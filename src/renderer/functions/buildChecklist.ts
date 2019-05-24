import { Task } from "../models/task";
import { Step } from "../models/step";
import { DeploymentItem } from "../models/deployment-item";
import { deployment } from "../checklist";
import { ItemState } from "../models/item-state";
import { dateOptions } from "./dateOptions";

//generates the task-level html for each task in the deployment phase
export const buildTasks = (task: Task, steps: Step[], items: DeploymentItem[]): string => {
    return `
      <section class='checklist'>
          <h2 class='checklist__title'>${task.title}</h2>
          <span class='checklist__title-border'></span><span class='checklist__percentage-border'></span>
          ${steps
            .filter(step => step.productTier.valueOf() <= deployment.productTier.valueOf())
            .map(step => { return buildSteps(step, items) })
            .join('')
        }
      </section>
    `
}

//generates the step-level html for each task in the deployment phase
export const buildSteps = (step: Step, items: DeploymentItem[]): string => {

    //find the item that matches the step
    const item = items.find(item => item.stepId == step.id);

    //toggle checkbox status
    let checkboxStatus: string;
    if (item.itemState === ItemState.Complete) {
        checkboxStatus = 'checked'
    } else if (item.itemState === ItemState.NotApplicable) {
        checkboxStatus = 'disabled'
    } else {
        checkboxStatus = ''
    }

    //toggle disabled status
    let disableStatus: string;
    if (item.itemState === ItemState.NotApplicable) {
        disableStatus = ' selected'
    } else {
        disableStatus = ''
    }

    //build the step using both step and item data in the db
    return `
        <ul class='checklist-container'>
            <li class='checklist-item'>
                <input id='step${step.id}__checkbox' type='checkbox' data-step-id='${step.id}' ${checkboxStatus}/>
                <label for='step${step.id}__checkbox' class='checkbox'></label>
                <span class='checklist-item__title'>${step.title}</span>
                <button class='checklist-item__expand' aria-label='Toggle Info' title='Show more information'>
                    <span class='line'></span>
                </button>
                <button class='checklist-note__expand' aria-label='Toggle Notes' title='Add note'>
                </button>
                <button id='step${step.id}__disable' class='disable-step${disableStatus}' title="This step doesn't apply" data-step-id='${step.id}'}>
                </button>
                <div class='info-container'>
                    <span id='step${step.id}__status'>${buildStatus(item)}</span>
                    <div class='info' include-html='../renderer/info_content/${step.infoPath}.html'></div>
                    <!--info content-->
                </div>
                <!--info container-->
                <div class='note-container'>
                    <span id='step${step.id}__note-status'>${buildNoteStatus(item)}</span>
                    <input type='text' id='step${step.id}__note' name='step${step.id}__note' value='${item.note == undefined || item.note == '' ? '' : item.note}'/>
                    <button id="step${step.id}__save-note" type="button" data-step-id="${step.id}">Save</button>
                </div>
                <!--note container-->
            </li>
        </ul>
    `
}

//build the step status html
export const buildStatus = (data:DeploymentItem):string => {
    if (data.integrator != undefined){
        return `Marked
            <strong> ${data.itemState != ItemState.NotApplicable ? ItemState[data.itemState] : "Does Not Apply"} </strong>
            by ${data.integrator} on ${data.date.toLocaleString('default', dateOptions)}
        `;
    } else {
        return '';
    }
}

//build the note status html
export const buildNoteStatus = (data:DeploymentItem):string => {
    if (data.noteIntegrator != undefined && data.note != ''){
        return `Written by 
            ${data.noteIntegrator} 
            on ${data.noteDate != undefined ? data.noteDate.toLocaleString('default', dateOptions) : ''}
        `;
    } else {
        return ''; 
    }
}