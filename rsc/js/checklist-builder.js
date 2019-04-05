/*
let tasks = [],
    steps = []

function getPhase(v, p) {
    knex('Phase')
        .where('PhaseAppVersion', v)
        .where('PhaseId', p)
        .first()
        .then(result => document.getElementById("header-title").innerHTML = result.PhaseName)
}

function getTasks(v, p) {
    knex('Task')
        .where('TaskAppVersion', v)
        .where('TaskPhase', p)
        .select()
        .then(result => {
            tasks = result
            document.getElementById("main-content").innerHTML = `${tasks.map(taskTemplate).join("")}`
        })
}

Deployment.fetch(strId)
    .then(d => getPhase(d.DeploymentAppVersion, currentPhase))
    .then(() => getTasks(currentDeployment.DeploymentAppVersion, currentPhase))
    .then()


knex('Task')
    .where('TaskAppVersion', d.DeploymentAppVersion)
    .where('TaskPhase', currentPhase)
    .select()
    .then(t => {
        tasks = t
        console.log(t)
        document.getElementById("main-content").innerHTML = `${tasks.map(taskTemplate).join("")}`
    })

knex('Step')
    .where('StepAppVersion', d.DeploymentAppVersion)
    .where('StepPhase', currentPhase)
    .join('Phase', 'Phase.PhaseId', 'Step.StepPhase')
    .join('Task', 'Task.TaskId', 'Step.StepTask')
    .select()
    .then(s => {
        steps = s
        console.log(s)
    })

//load the db, open obj store, get the deployment, and render the list for the deployment's current phase
dbPromise
    .then(db => {
        let tx = db.transaction('deployments', 'readwrite'),
            store = tx.objectStore('deployments')
        return store.get(id)
    })
    .then(result => {
        deployment = result
        document.getElementById("header-title").innerHTML = `${listData.deploymentPhases[deployment.currentPhase].phaseTitle}`
        document.getElementById("main-content").innerHTML = `${listData.deploymentPhases[deployment.currentPhase].phaseTasks.map(taskTemplate).join("")}`
    })
    .then(() => {
        includeHTML()
        toggleInfo()
    })

*/

//helper function that generates the task-level html for each task in the deployment phase
//only the tasks whose productTier is equal to or less than the currentProduct are generated
function taskTemplate(t) {
    console.log(t)
    if (t.TaskMinProduct <= currentDeployment.DeploymentProduct) {
        return `
            <section class="checklist">
                <h2 class="checklist__title">${t.TaskName}</h2>
                <span class="checklist__title-border"></span><span class="checklist__percentage-border"></span>
                {t.map(stepTemplate).join("")}
            </section>
        `
    }
}

//helper function that generates the step-level html for each task in the deployment phase
//only the steps whose productTier is equal to or less than the currentProduct are generated 
function stepTemplate(s) {
    console.log(s)
    if (s.StepMinProduct <= currentDeployment[0].ProductId) {
        return `
            <ul class="checklist-container">
                <li class="checklist-item">
                    <input id="${s.StepId}" type="checkbox"/>
                    <label for="${s.StepId}" class="checkbox"></label>
                    <span class="checklist-item__title">${s.StepName}</span>
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
                        <div class="info" include-html="${s.StepInfoPath}"></div>
                        <!--info content-->
                    </div>
                    <!--info container-->
                    <div class="note-container">
                        <input type="text" id="${s.StepId}_note" />
                    </div>
                    <!--note container-->
                </li>
            </ul>
        `
    }
}



