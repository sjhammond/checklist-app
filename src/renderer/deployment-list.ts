import { IDBPCursorWithValue } from 'idb';
import { dbPromise } from './data/db';
import { MilestoneDB } from './models/milestone-db';
import { ProductTier } from './models/product-tier';

let deploymentList = '';

dbPromise().then(async db => {
  // get the db then create a transaction, open obj store, and open cursor
  const tx = db.transaction(['deployments'], 'readonly');
  const store = tx.objectStore('deployments');
  return await store.openCursor(undefined, 'prev');
}).then(async cursor => {
  // iterate through the cursor and display each item in the object store
  while (cursor) {
    buildDeployments(cursor);
    cursor = await cursor.continue();
  }
}).then(() => {
  if (deploymentList !== '') {
    const noDeployments = document.getElementById('no-deployments');
    if (noDeployments != null) noDeployments.style.display = 'none'; //hide 'no deployments found' message
    const body = document.getElementById('deployment-list__body');
    if (body != null) body.innerHTML = deploymentList;
    addClickEvents();
  } else {
    const list = document.getElementById('deployment-list');
    list.style.display = 'none';
  }
});

const buildDeployments = (cursor: IDBPCursorWithValue<MilestoneDB, 'deployments'[], 'deployments', unknown>) => {
  if (!cursor) {
    return;
  }
  deploymentList += `
          <tr class="deployment-row" id="${cursor.value.id}">
              <td>
                  ${cursor.value.name}
              </td>
              <td>
                  ${(cursor.value.productTier < 4) ? ProductTier[cursor.value.productTier] + "+" : ProductTier[cursor.value.productTier]}
              </td>
              <td>
                  ${(cursor.value.dateCreated).toLocaleString()}
              </td>
              <td>
                  ${(cursor.value.dateModified).toLocaleString()}
              </td>
              <td>
                <button type="button" class="edit-btn">Edit</button>
                <button type="button" class="delete-btn">Delete</button>
              </td>
          </tr>
      `
};

const deleteDeployment = (id: number): any => {
  //confirm delete (maybe make this a modal)
  const c = confirm('Are you sure you want to delete this deployment?')
  //if OK to delete, delete from idb 
  if (c == true) {
    dbPromise().then(async db => {
      const tx = db.transaction('deployments', 'readwrite');
      const store = tx.objectStore('deployments');
      await store.delete(id);
    });
    //and remove the element from the table
    const el = document.getElementById(id.toString());
    el.remove();
    //check if there are no more delpoyments - if there aren't display the 'no deployments' message
    const body = document.getElementById('deployment-list__body')
    if (body.innerHTML.trim() == '') {
      const list = document.getElementById('deployment-list');
      const noDeployments = document.getElementById('no-deployments');
      list.style.display = 'none';
      noDeployments.style.display = 'block';
    }
    //stop event propigation so you don't navigate to the deleted list
    event.stopPropagation();
  } else {
    //if cancelled, stop event propigation so you don't navigate to the deployment checklist
    event.stopPropagation();
  }
}

const addClickEvents = async () => {
  const deleteBtn = document.getElementsByClassName('delete-btn');
  //const editBtn = document.getElementsByClassName('edit-btn');
  const gotoChecklist = document.getElementsByClassName('deployment-row');


  // add delete functionality to each delete button in the table 
  Array.from(deleteBtn).forEach(element => {
    element.addEventListener('click', function () {
      deleteDeployment(parseInt(element.parentElement.parentElement.id));
    })
  })

  //add the "go" event to each table row
  Array.from(gotoChecklist).forEach(element => {
    element.addEventListener('click', function () {
      const href = `./checklist.html?id=${element.id}`
      window.location.href = href;
    })
  })

}