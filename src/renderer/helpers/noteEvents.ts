import $ from 'jquery';
import { IDBPDatabase } from 'idb';
import { MilestoneDB } from '../models/milestone-db';
import { dateOptions } from './dateOptions';

export const noteEvents = async (id:string, db: IDBPDatabase<MilestoneDB>) => {
    $('button[id$="__save-note"]').click(async function (e) {
        
        //get stepId from event target
        const stepId = parseInt(e.target.dataset.stepId); 
        
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
        const item = deploymentItems.find(step => step.stepId == stepId);

        //get the note from the form field
        const noteInput= <HTMLInputElement>document.getElementById(`step${stepId}__note`);
        const stepNote = noteInput.value; 

        //if the note is different, save the updated note
        if (item.note == undefined || stepNote != item.note){
        
            //define the data to put to the db
            //pass though all the item attributes that are unchanged
            //just change the note, note integrator, note date
            const data = {
                id: item.id,
                deploymentId: item.deploymentId,
                stepId: item.stepId,
                itemState: item.itemState,
                integrator: item.integrator,
                date: item.date,
                note: stepNote,
                noteDate: new Date(),
                noteIntegrator: deployment.integrator
            };

            //put the updated record in the db
            await db
            .transaction('deployment-items', 'readwrite')
            .objectStore('deployment-items')
            .put(data);

            //update the note status html with data values
            const noteSignature:JQuery<HTMLElement> = $(`#step${stepId}__note-status`);
            $(noteSignature).html(`Written by ${data.noteIntegrator} on ${data.noteDate.toLocaleString('defualt', dateOptions)}`);

        }
    });
}
