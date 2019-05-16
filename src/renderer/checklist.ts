import $ from 'jquery';
import { dbPromise } from './data/db';
import { Deployment } from './models/deployment';
import { Phase } from './models/phase';
import { Task } from './models/task';
import { Step } from './models/step';
import { includeHTML } from './helpers/include-html';
import { toggleInfo } from './helpers/info-toggler';
import { transformLinks } from './helpers/external-urls';
import { DeploymentItem } from './models/deployment-item';
import { ItemState } from './models/item-state';

//get the deployment id from the URL querystring
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

//declare for scope
let deployment: Deployment;
let phase: Phase;
let mainContent = '';

//open indexedDB
dbPromise().then(async db => {

  //get the current deployment
  deployment = await db
    .transaction('deployments', 'readonly')
    .objectStore('deployments')
    .get(parseInt(id));

  //get the current phase for this deployment
  phase = await db
    .transaction('phases', 'readonly')
    .objectStore('phases')
    .get(deployment.currentPhaseId);

  //get all the tasks for this phase
  const tasks = await db
    .transaction('tasks', 'readonly')
    .objectStore('tasks')
    .index('phaseId')
    .getAll(phase.id);

  //get all the deployment items for this deployment
  const items = await db
    .transaction('deployment-items', 'readonly')
    .objectStore('deployment-items')
    .index('deploymentId')
    .getAll(deployment.id)

  //for each task
  for (const task of tasks
    //filter out what isn't relevant for this product
    .filter(task => task.productTier.valueOf() <= deployment.productTier.valueOf())) {
      //build the list using the task template
      mainContent += taskTemplate(
      //pass in the task
      task,
      //get all the steps related to this task 
      await db
        .transaction('steps', 'readonly')
        .objectStore('steps')
        .index('taskId')
        .getAll(task.id),
      //pass in the items  
      items);
  }
  //return the built list
  return mainContent;

//display the list and phase title 
}).then(mainContent => {
  document.getElementById('header-title').innerHTML = phase.title;
  document.getElementById('main-content').innerHTML = mainContent;

//then add event listeners, icons, and helper functions
}).then(() => {

  //save notes
  $('input[id$="save-note"]').on('click', function(e) {
    console.log(e);
    debugger;
  })

  //load icons
  $(".checklist-note__expand").load("./svg/note.svg")
  $("#back_icon").load("./svg/backarrow.svg");
  $("#save_icon").load("./svg/save.svg");
  $("#my-deployments_icon").load("./svg/mydeployments.svg");
  $("#add-new_icon").load("./svg/new.svg");
  $("#settings_icon").load("./svg/settings.svg");

  //load helper functions
  includeHTML();
  toggleInfo();
  transformLinks();
});

//generates the task-level html for each task in the deployment phase
const taskTemplate = (task: Task, steps: Step[], items: DeploymentItem[]): string => {
  return `
    <section class='checklist'>
        <h2 class='checklist__title'>${task.title}</h2>
        <span class='checklist__title-border'></span><span class='checklist__percentage-border'></span>
        ${steps
          .filter(step => step.productTier.valueOf() <= deployment.productTier.valueOf())
          .map(step => {return stepTemplate(step, items)})
          .join('')
        }
    </section>
  `
}

//generates the step-level html for each task in the deployment phase
const stepTemplate = (step: Step, items: DeploymentItem[]): string => {

  //find the item that matches the step
  const item = items.find(item => item.stepId == step.id);

  //build the step using both step and item data in the db
  return `
    <ul class='checklist-container'>
        <li class='checklist-item'>
            <input id='${step.id}' type='checkbox'/>
            <label for='${step.id}' class='checkbox'></label>
            <span class='checklist-item__title'>${step.title}</span>
            <button class='checklist-item__expand' aria-label='Toggle Info' title='More Information'>
                <span class='line'></span>
            </button>
            <button class='checklist-note__expand' aria-label='Toggle Notes' title='Add Note'>
            </button>
            <button class='checklist-disable' aria-label='Not Applicable' title='Mark this step Not Applicable'>
            </button>
            <div class='info-container'>
                <span id='${step.id}__status'> Marked <em>${ItemState[item.itemState]}</em> by ${item.integrator} on ${item.date}</span>
                <div class='info' include-html='../renderer/info_content/${step.infoPath}.html'></div>
                <!--info content-->
            </div>
            <!--info container-->
            <div class='note-container'>
                <span id='${step.id}__note-signature'>Written by ${item.noteIntegrator} on ${item.noteDate}</span>
                <input type='text' id='${step.id}__note' value='${item.note}'/>
                <button id="${step.id}__save-note">Save</button>
            </div>
            <!--note container-->
        </li>
    </ul>
  ` 
}

