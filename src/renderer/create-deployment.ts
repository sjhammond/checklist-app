import $ from 'jquery';
import { dbPromise } from './data/db';
import { Deployment } from './models/deployment';
import { ProductTier } from './models/product-tier';

$("#essential-icon").load("./rsc/svg/essential.svg");
$("#express-icon").load("./rsc/svg/express.svg");
$("#professional-icon").load("./rsc/svg/professional.svg");
$("#expert-icon").load("./rsc/svg/expert.svg");
$("#corporate-icon").load("./rsc/svg/corporate.svg");

const createNewDeployment = async (product: string, name: string, integrator: string) => {
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
  
  // get the db
  dbPromise().then(async db => {
    // create a transaction, open obj store, add deployment, and return an open cursor
    const tx = db.transaction(['deployments'], 'readwrite');
    const store = tx.objectStore('deployments');
    await store.add(deployment);
    const cursor = await store.openCursor();
    const id = cursor.value.id;
    await tx.done;
    return id;
  }).then(id => {
    // then go to the checklist and pass the id through the url
    const href = `./checklist.html?id=${id}`;
    window.location.href = href;
  })
}

// On click, create a new deployment using the params from the html form
document.getElementById('newDeploymentBtn').onclick = () => {
  const product = document.querySelector('input[name="radio"]:checked') as HTMLInputElement;
  const name = document.getElementById('deploymentName') as HTMLInputElement;
  const integrator = document.getElementById('integratorName') as HTMLInputElement;
  if (product == null || name.value == null || integrator.value == null) {
    return;
  }
  createNewDeployment(product.value, name.value, integrator.value);
}
