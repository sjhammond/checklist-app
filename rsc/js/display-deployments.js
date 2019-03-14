//declare an output var
let output = ""

//get the db then create a transaction, open obj store, and open cursor
dbPromise
    .then(db => {
        let tx = db.transaction(["deployments"], "readonly"),
            store = tx.objectStore("deployments")
        return store.openCursor(null, 'prev')
    })
    .then(function displayDeployments(cursor) {
        if (!cursor) {
            return;
        }
        output += `
                <tr>
                    <td>
                        ${cursor.value.id}
                    </td>
                    <td>
                        ${cursor.value.name}
                    </td>
                    <td>
                        ${cursor.value.product}
                    </td>
                    <td>
                        ${cursor.value.integrator}
                    </td>
                    <td>
                        ${(cursor.value.dateModified).toLocaleString()}
                     </td>
                </tr>
            `
        //iterate through the cursor and display each item in the object store
        return cursor.continue().then(displayDeployments)
    })
    .then(() => document.getElementById('deploymentTable').innerHTML = output)
