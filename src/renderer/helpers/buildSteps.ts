import { Step } from "../models/step";
import { DeploymentItem } from "../models/deployment-item";
import { ItemState } from "../models/item-state";

//generates the step-level html for each task in the deployment phase
export const buildSteps = (step: Step, items: DeploymentItem[]): string => {

    //find the item that matches the step
    const item = items.find(item => item.stepId == step.id);

    //toggle checkbox state
    let checkboxWithState;
    if (item.itemState === ItemState.Complete) {
        checkboxWithState = `<input id='${step.id}__checkbox' type='checkbox' data-step-id='${step.id}' checked/>`
    } else {
        checkboxWithState = `<input id='${step.id}__checkbox' type='checkbox' data-step-id='${step.id}'/>`
    }

    //toggle disabled state


    //build the step using both step and item data in the db
    return `
      <ul class='checklist-container'>
          <li class='checklist-item'>
              ${checkboxWithState}
              <label for='${step.id}' class='checkbox'></label>
              <span class='checklist-item__title'>${step.title}</span>
              <button class='checklist-item__expand' aria-label='Toggle Info' title='Show more information'>
                  <span class='line'></span>
              </button>
              <button class='checklist-note__expand' aria-label='Toggle Notes' title='Add note'>
              </button>
              <button class='checklist-disable' aria-label='Not Applicable' title='This step does not apply'>
              </button>
              <div class='info-container'>
                  <span id='${step.id}__status'> Marked <em>${ItemState[item.itemState]}</em> by ${item.integrator} on ${item.date}</span>
                  <div class='info' include-html='../renderer/info_content/${step.infoPath}.html'></div>
                  <!--info content-->
              </div>
              <!--info container-->
              <div class='note-container'>
                  <span id='${step.id}__note-signature'>Written by ${item.noteIntegrator} on ${item.noteDate}</span>
                  <input type='text' id='${step.id}__note' value='${item.note == undefined ? '' : item.note}'/>
                  <button id="${step.id}__save-note">Save</button>
              </div>
              <!--note container-->
          </li>
      </ul>
    `
}
