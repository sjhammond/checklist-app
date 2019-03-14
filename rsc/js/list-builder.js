//pull in the list data from the separate JSON file
const listData = require('./listData.json')
let deployment

//load the db, open obj store, get the deployment, and render the list for the deployment's current phase
dbPromise
    .then(db => {
        let tx = db.transaction('deployments', 'readwrite'),
            store = tx.objectStore('deployments')
        return store.get(1);
    })
    .then(result => {
        deployment = result
        document.getElementById("main-content").innerHTML = `${listData.deploymentPhases[deployment.currentPhase].phaseTasks.map(taskTemplate).join("")}`
        document.getElementById("header-title").innerHTML = `${listData.deploymentPhases[deployment.currentPhase].phaseTitle}`
    })
    .then(() => {
        includeHTML()
        toggleInfo()
    })


/* 
helper function that generates the task-level html for each task in the deployment phase
only the tasks whose productTier is equal to or less than the currentProduct are generated
*/
function taskTemplate(t) {
    if (t.productTier <= deployment.product) {
        return `
            <section class="checklist">
                <h2 class="checklist__title">${t.taskTitle}</h2>
                <span class="checklist__title-border"></span><span class="checklist__percentage-border"></span>
            ${t.taskSteps.map(stepTemplate).join("")}
            </section>
        `
    }
}

/* 
helper function that generates the step-level html for each task in the deployment phase
only the steps whose productTier is equal to or less than the currentProduct are generated 
*/
function stepTemplate(s) {
    if (s.productTier <= deployment.product) {
        return `
            <ul class="checklist-container">
                <li class="checklist-item">
                    <input id="${s.stepID}" type="checkbox"/>
                    <label for="${s.stepID}" class="checkbox"></label>
                    <span class="checklist-item__title">${s.stepTitle}</span>
                    <button class="checklist-note__expand" aria-label="Toggle Notes" title="Add Note">
                        <svg class="svg-note-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 197.99 197.99">
                            <path d="M33.94,96.17,0,198l101.82-33.94,77.29-77.29L111.23,18.88ZM45.42,167,31,152.57,45.8,108,90,152.19Z"/>
                            <rect x="149.8" y="-8.16" width="16.69" height="96" transform="translate(18.15 123.5) rotate(-45)"/>
                        </svg>
                    </button>
                    <button class="checklist-item__expand" aria-label="Toggle Info" title="More Information">
                        <span class="line"></span>
                    </button>
                    <div class="info-container">
                        <div class="info" include-html="${s.infoPath}"></div>
                        <!--info content-->
                    </div>
                    <!--info container-->
                    <div class="note-container">
                        <input type="text" id="${s.stepID}_note" />
                    </div>
                    <!--note container-->
                </li>
            </ul>
        `
    }
}



