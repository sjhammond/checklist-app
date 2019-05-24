import $ from 'jquery';
import { dbPromise } from './data/db';
import { Phase } from './models/phase';
import { includeHTML } from './functions/includeHtml';
import { toggleInfo } from './functions/toggleInfo';
import { transformLinks } from './functions/transformLinks';
import { Deployment } from './models/deployment';
import { IDBPDatabase } from 'idb';
import { MilestoneDB } from './models/milestone-db';
import { buildTasks } from './functions/buildChecklist';
import { addNoteListener, completeStepListener, disableStepListener } from './functions/checklistEventListeners';
import { getDeployment, getItemsByDeploymentId } from './functions/dbFunctions';

//declare global vars
export let deployment: Deployment;
let phase: Phase;
let mainContent = '';
let dbContext: IDBPDatabase<MilestoneDB>;

//get the deployment id from the URL querystring
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

dbPromise().then(async db => {
  dbContext = db; 

  //get the current deployment
  deployment = await getDeployment(id, db);

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

  //get the deployment items for this deployment
  const items = await getItemsByDeploymentId(id, db);

  //for each task
  for (const task of tasks
    //filter out what isn't relevant for this product
    .filter(task => task.productTier.valueOf() <= deployment.productTier.valueOf())) {
    //build the task list
    mainContent += buildTasks(task,
      //get all the steps related to this task 
      await db
        .transaction('steps', 'readonly')
        .objectStore('steps')
        .index('taskId')
        .getAll(task.id),
      items);
  }

  //return the built list
  return mainContent;

}).then(mainContent => {
  //display phase title and list
  document.getElementById('header-title').innerHTML = phase.title;
  document.getElementById('main-content').innerHTML = mainContent;

}).then(() => {
  
  //load event listeners
  completeStepListener(id, dbContext);
  addNoteListener(id, dbContext);
  disableStepListener(id, dbContext);

  //load helper functions
  includeHTML();
  toggleInfo();
  transformLinks();

  //load icons
  $(".checklist-note__expand").load("./svg/note.svg")
  $("#back_icon").load("./svg/backarrow.svg");
  $("#save_icon").load("./svg/save.svg");
  $("#my-deployments_icon").load("./svg/mydeployments.svg");
  $("#add-new_icon").load("./svg/new.svg");
  $("#settings_icon").load("./svg/settings.svg");
  $(".disable-step").load("./svg/disable.svg");

});