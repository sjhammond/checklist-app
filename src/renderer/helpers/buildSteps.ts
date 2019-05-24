import { Step } from "../models/step";
import { DeploymentItem } from "../models/deployment-item";
import { ItemState } from "../models/item-state";
import { dateOptions } from "./dateOptions";
import { buildStatus } from "./buildStatus";

//generates the step-level html for each task in the deployment phase
export const buildSteps = (step: Step, items: DeploymentItem[]): string => {

    //find the item that matches the step
    const item = items.find(item => item.stepId == step.id);

    //toggle checkbox state
    let checkboxWithState:string;
    if (item.itemState === ItemState.Complete) {
        checkboxWithState = `<input id='step${step.id}__checkbox' type='checkbox' data-step-id='${step.id}' checked/>`
    } else if (item.itemState === ItemState.NotApplicable) {
        checkboxWithState = `<input id='step${step.id}__checkbox' type='checkbox' data-step-id='${step.id}' disabled/>`
    } else {
        checkboxWithState = `<input id='step${step.id}__checkbox' type='checkbox' data-step-id='${step.id}'/>`
    }

    //toggle disabled state
    let disableCheckbox:string;
    if (item.itemState === ItemState.NotApplicable){
        disableCheckbox = `
            <input id='step${step.id}__disable' type='checkbox' data-step-id='${step.id}' checked/>
        `
    } else {
        disableCheckbox = `
            <input id='step${step.id}__disable' type='checkbox' data-step-id='${step.id}' />
        `
    }

    //build the step using both step and item data in the db
    return `
      <ul class='checklist-container'>
          <li class='checklist-item'>
              ${checkboxWithState}
              <label for='step${step.id}__checkbox' class='checkbox'></label>
              <span class='checklist-item__title'>${step.title}</span>
              <button class='checklist-item__expand' aria-label='Toggle Info' title='Show more information'>
                  <span class='line'></span>
              </button>
              <button class='checklist-note__expand' aria-label='Toggle Notes' title='Add note'>
              </button>
              ${disableCheckbox}
              <label for='step${step.id}__disable' class='disable-step'></label>
              <div class='info-container'>
                  <span id='step${step.id}__status'>${buildStatus(item)}</span>
                  <div class='info' include-html='../renderer/info_content/${step.infoPath}.html'></div>
                  <!--info content-->
              </div>
              <!--info container-->
              <div class='note-container'>
                  <span id='step${step.id}__note-status'>Written by ${item.noteIntegrator} on ${item.noteDate != undefined ? item.noteDate.toLocaleString('default', dateOptions) : ''}</span>
                  <input type='text' id='step${step.id}__note' name='step${step.id}__note' value='${item.note == undefined || item.note == '' ? '' : item.note}'/>
                  <button id="step${step.id}__save-note" type="button" data-step-id="${step.id}">Save</button>
              </div>
              <!--note container-->
          </li>
      </ul>
    `
}