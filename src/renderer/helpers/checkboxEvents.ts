import $ from 'jquery';
import { IDBPDatabase } from 'idb';
import { MilestoneDB } from '../models/milestone-db';
import { ItemState } from '../models/item-state';

export const checkboxEvents = async (id:string, db: IDBPDatabase<MilestoneDB>) => {
    $('input[id$="__checkbox"]').click(async function (e) {
        
        //get event tragets
        const stepId = parseInt(e.target.dataset.stepId); 
        const checked = e.originalEvent.srcElement['checked'];
        
        //get the deployment the event is associated with
        const deployment = await db
        .transaction('deployments', 'readonly')
        .objectStore('deployments')
        .get(parseInt(id));

        //get the checklist items associated with the deployment
        const deploymentItems = await db
        .transaction('deployment-items', 'readonly')
        .objectStore('deployment-items')
        .index('deploymentId')
        .getAll(parseInt(id));
        
        //retreive the specific deployment item
        const item = deploymentItems.find(step => step.stepId == stepId)

        //declare an status variable to check
        let status: ItemState; 

        //if status is checked, set to complete, otherwise set to incomplete
        if (checked){
            status = ItemState.Complete;
        } else {
            status = ItemState.Incomplete;
        }

        //define the data to put to the db; pass though all the attributes that are unchanged -- just change the date, integrator, and status
        const data = {
            id: item.id,
            deploymentId: item.deploymentId,
            stepId: item.stepId,
            itemState: status,
            integrator: deployment.integrator,
            date: new Date(),
            note: item.note,
            noteDate: item.noteDate,
            noteIntegrator: item.noteIntegrator
        }

        //put the updated record in the db
        await db
        .transaction('deployment-items', 'readwrite')
        .objectStore('deployment-items')
        .put(data);
    });
}
