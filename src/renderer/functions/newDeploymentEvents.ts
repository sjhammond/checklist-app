import { ProductTier } from "../models/product-tier";
import { Deployment } from "../models/deployment";
import { dbPromise } from "../data/db";

export const createDeployment = async (product: string, name: string, integrator: string) => {
    //declare id for function-level scope
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

    //open the indexedDB
    dbPromise().then(async db => {

        //add the deployment
        await db
            .transaction('deployments', 'readwrite')
            .objectStore('deployments')
            .add(deployment);

        //retrieve the latest deployment id using back-stepping cursor
        const deploymentCursor = await db
            .transaction('deployments', 'readonly')
            .objectStore('deployments')
            .openCursor(undefined, "prev");
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
                });
        }
        return;
    })
        //go to deployment checklist
        .then(() => {
            const href = `./checklist.html?id=${id}`;
            window.location.href = href;
        });
}