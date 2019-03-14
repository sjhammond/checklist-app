//create a new deployment
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

    //get the db, create transaction, open store, and add deployment
    dbPromise.then(db => {
        let tx = db.transaction(["deployments"], "readwrite"),
            store = tx.objectStore("deployments")
        store.add(newDeployment)
        return tx.complete
    })
    .then(() => window.location.href = 'checklist.html')
}

//create a new deployment in the database on click
document.getElementById('newDeploymentBtn').onclick = () => {
    let product = document.querySelector('input[name="radio"]:checked').value,
        name = document.getElementById('deploymentName').value,
        integrator = document.getElementById('integratorName').value
    createNewDeployment(product, name, integrator)
}