import { IDBPCursorWithValue } from 'idb';
import { dbPromise } from './data/db';
import { MilestoneDB } from './models/milestone-db';
import { ProductTier } from './models/product-tier';

//declare deploymentList for scope
let deploymentList = '';

// return a cursor opened in the deployment object store
dbPromise().then(async db => {
  const tx = db.transaction(['deployments'], 'readonly');
  const store = tx.objectStore('deployments');
  return await store.openCursor(undefined, 'prev');

// iterate through the cursor and display each item in the object store
}).then(async cursor => {
  while (cursor) {
    buildDeployments(cursor);
    cursor = await cursor.continue();
  }

//if the list has data, hide the "no deployments" message, display the list, and add click interactions
}).then(() => {
  if (deploymentList !== '') {
    const noDeployments = document.getElementById('no-deployments');
    if (noDeployments != null) noDeployments.style.display = 'none';
    const body = document.getElementById('deployment-list__body');
    if (body != null) body.innerHTML = deploymentList;
    addClickEvents();

  //otherwise, hide the list
  } else {
    const list = document.getElementById('deployment-list');
    list.style.display = 'none';
  }
});

const buildDeployments = (cursor: IDBPCursorWithValue<MilestoneDB, 'deployments'[], 'deployments', unknown>) => {

  //if the cursor is undefined (ie no more items found), escape
  if (!cursor) {
    return;
  }

  //otherwise, build a table row for each deployment in the store
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

  //confirm delete
  const c = confirm('Are you sure you want to delete this deployment?')
  
  //if OK to delete, delete from indexedDB object store 
  if (c == true) {
    dbPromise().then(async db => {
      const tx = db.transaction('deployments', 'readwrite');
      const store = tx.objectStore('deployments');
      await store.delete(id);
    });
   
    //remove the element from the table
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
  
  //if cancelled, stop event propigation so you don't navigate to the deployment checklist
  } else {
    event.stopPropagation();
  }
}

const addClickEvents = async () => {
  const deleteBtn = document.getElementsByClassName('delete-btn');
  //const editBtn = document.getElementsByClassName('edit-btn');
  const gotoChecklist = document.getElementsByClassName('deployment-row');

  //add delete functionality to each delete button in the table 
  Array.from(deleteBtn).forEach(element => {
    element.addEventListener('click', function () {
      deleteDeployment(parseInt(element.parentElement.parentElement.id));
    })
  });

  //add the "go to Checklist" click event to each table row
  Array.from(gotoChecklist).forEach(element => {
    element.addEventListener('click', function () {
      const href = `./checklist.html?id=${element.id}`
      window.location.href = href;
    })
  });

}