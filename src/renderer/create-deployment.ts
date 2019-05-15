import $ from 'jquery';
import { dbPromise } from './data/db';
import { Deployment } from './models/deployment';
import { ProductTier } from './models/product-tier';

$("#essential-icon").load("./svg/essential.svg");
$("#express-icon").load("./svg/express.svg");
$("#professional-icon").load("./svg/professional.svg");
$("#expert-icon").load("./svg/expert.svg");
$("#corporate-icon").load("./svg/corporate.svg");

const createNewDeployment = async (product: string, name: string, integrator: string) => {
  //declare id for scope use
  let id: number;

  //create deployment template from params
  const date = new Date();
  const productTier = ProductTier[parseInt(product)];

  const deployment: Deployment = {
    dateCreated: date,
    dateModified: date,
    name: name,
    currentPhaseId: 1,
    integrator: integrator,
    productTier: ProductTier[productTier as keyof typeof ProductTier]
  };

  dbPromise().then(async db => {
    //add the deployment
    await db
      .transaction('deployments', 'readwrite')
      .objectStore('deployments')
      .add(deployment)

    //retrieve the latest deployment id using cursor
    const deploymentCursor = await db
      .transaction('deployments', 'readonly')
      .objectStore('deployments')
      .openCursor(undefined, "prev")
    deploymentCursor.continue();
    id = deploymentCursor.value.id;

    //get all the steps from the step table
    const steps = await db
      .transaction('steps', 'readonly')
      .objectStore('steps')
      .getAll();

    //for each step, add a deployment item for this deployment
    for (const step of steps) {
      await db
      .transaction('deployment-items', 'readwrite')
      .objectStore('deployment-items')
      .add({
        deploymentId: id,
        stepId: step.id,
        itemState: 0,
        integrator: undefined,
        date: new Date(),
        note: undefined,
        noteIntegrator: undefined,
        noteDate: undefined
      })
    }
    return;
  })
    .then(() => {
      //go to deployment checklist
      const href = `./checklist.html?id=${id}`;
      console.log(href)
      window.location.href = href;
    })
}

// On click, create a new deployment using the params from the html form
document.getElementById('newDeploymentBtn').onclick = () => {
  const product = document.querySelector('input[name="radio"]:checked') as HTMLInputElement;
  const name = document.getElementById('deploymentName') as HTMLInputElement;
  const integrator = document.getElementById('integratorName') as HTMLInputElement;
  if (product != null && name.checkValidity() && integrator.checkValidity()) {
    createNewDeployment(product.value, name.value, integrator.value);
  }
  return;
}
