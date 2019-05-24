import $ from 'jquery';
import { IDBPDatabase } from 'idb';
import { MilestoneDB } from '../models/milestone-db';
import { ItemState } from '../models/item-state';
import { buildStatus } from './buildStatus';

export const disableStepEvents = async (id: string, db: IDBPDatabase<MilestoneDB>) => {
    $('input[id$="__disable"]').click(async function (e) {

        //get event targets
        const stepId = parseInt(e.target.dataset.stepId);
        const disabled = e.originalEvent.srcElement['checked'];

        //get the deployment
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

        //retrieve one deployment item associated with this step
        const item = deploymentItems.find(step => step.stepId == stepId)

        //declare status variable to check
        let stepStatus: ItemState;

        //get the step checkbox for this step
        const checkbox = $(`#step${stepId}__checkbox`)

        //if status is checked, set to complete, otherwise set to incomplete
        if (disabled) {
            stepStatus = ItemState.NotApplicable;
            //clear and disable the step checkbox
            checkbox.prop('checked', false);
            checkbox.prop('disabled', true);
        } else {
            stepStatus = ItemState.Incomplete;
            checkbox.prop('disabled', false);
        }

        //define the data to put to the db
        //pass though all the item attributes that are unchanged
        //just change the date, integrator, and status
        const data = {
            id: item.id,
            deploymentId: item.deploymentId,
            stepId: item.stepId,
            itemState: stepStatus,
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

        //update the signature html with data values
        $(`#step${stepId}__status`).html(buildStatus(data));
    });
}
