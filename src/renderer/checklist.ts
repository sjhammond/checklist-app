import $ from 'jquery';
import { dbPromise } from './data/db';
import { Deployment } from './models/deployment';
//import { DeploymentItem } from './models/deployment-item';
import { Phase } from './models/phase';
import { Task } from './models/task';
import { Step } from './models/step';
import { includeHTML } from './helpers/include-html';
import { toggleInfo } from './helpers/info-toggler';
import { transformLinks } from './helpers/external-urls';

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
let deployment: Deployment;
let phase: Phase;
let mainContent = '';

//load the db, open obj store, get the deployment, and render the list for the deployment's current phase
dbPromise().then(async db => {
  deployment = await db
    .transaction('deployments', 'readonly')
    .objectStore('deployments')
    .get(parseInt(id));

  phase = await db
    .transaction('phases', 'readonly')
    .objectStore('phases')
    .get(deployment.currentPhaseId);

  const tasks = await db
    .transaction('tasks', 'readonly')
    .objectStore('tasks')
    .index('phaseId')
    .getAll(phase.id);

  for (const task of tasks
    .filter(task => task.productTier.valueOf() <= deployment.productTier.valueOf())) {
    mainContent += taskTemplate(task, await db
      .transaction('steps', 'readonly')
      .objectStore('steps')
      .index('taskId')
      .getAll(task.id));
  }
  return mainContent;
}).then(mainContent => {
  document.getElementById('header-title').innerHTML = phase.title;
  document.getElementById('main-content').innerHTML = mainContent;
}).then(() => {
  $(".checklist-note__expand").load("./svg/note.svg")
  $("#back_icon").load("./svg/backarrow.svg");
  $("#save_icon").load("./svg/save.svg");
  $("#my-deployments_icon").load("./svg/mydeployments.svg");
  $("#add-new_icon").load("./svg/new.svg");
  $("#settings_icon").load("./svg/settings.svg");
  includeHTML();
  toggleInfo();
  transformLinks();
});

//helper function that generates the task-level html for each task in the deployment phase
//only the tasks whose productTier is equal to or less than the currentProduct are generated
const taskTemplate = (task: Task, steps: Step[]): string => `
    <section class='checklist'>
        <h2 class='checklist__title'>${task.title}</h2>
        <span class='checklist__title-border'></span><span class='checklist__percentage-border'></span>${
  steps
    .filter(step => step.productTier.valueOf() <= deployment.productTier.valueOf())
    .map(stepTemplate)
    .join('')
  }</section>
`

//helper function that generates the step-level html for each task in the deployment phase
//only the steps whose productTier is equal to or less than the currentProduct are generated 
const stepTemplate = (step: Step): string => `
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
                <div class='info' include-html='../renderer/info_content/${step.infoPath}.html'></div>
                <!--info content-->
            </div>
            <!--info container-->
            <div class='note-container'>
                <input type='text' id='${step.id}__note' />
            </div>
            <!--note container-->
        </li>
    </ul>
`

//add click event listener to each checkbox
