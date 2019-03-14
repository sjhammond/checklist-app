function createNewDeployment(p, n, i) {
    //create deployment template from params
    let date = new Date(),
        newDeployment = {
            "dateCreated": date,
            "dateModified": date,
            "product": p,
            "name": n,
            "integrator": i,
            "currentPhase": 0
        }

    //get the db, create a transaction, open obj store, add deployment, and return an open cursor
    dbPromise
    .then(db => {
        let tx = db.transaction(["deployments"], "readwrite"),
            store = tx.objectStore("deployments")
        store.add(newDeployment)
        return store.openCursor(null, 'prev')
    })
    //step backwards once through the cursor and return the last id in the store (i.e. newest deployment)
    .then(cursor => {
        cursor.continue()
        return cursor.value.id
    })
    //then go to the checklist and pass the id through the url
    .then(id => window.location.href = 'deployment-checklist.html?id=' + id)
}

//On click, create a new deployment using the params from the html form
document.getElementById('newDeploymentBtn').onclick = () => {
    let product = document.querySelector('input[name="radio"]:checked').value,
        name = document.getElementById('deploymentName').value,
        integrator = document.getElementById('integratorName').value
    createNewDeployment(product, name, integrator)
}