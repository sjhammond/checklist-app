import { dbPromise } from './data/db';
import { buildDeploymentList, deploymentList } from './functions/buildDeploymentList';
import { deploymentListEventListeners } from './functions/deploymentListEventListeners';

// return a cursor opened in the deployment object store
dbPromise().then(async db => {
  const tx = db.transaction(['deployments'], 'readonly');
  const store = tx.objectStore('deployments');
  return await store.openCursor(undefined, 'prev');

  // iterate through the cursor and display each item in the object store
}).then(async cursor => {
  while (cursor) {
    buildDeploymentList(cursor);
    cursor = await cursor.continue();
  }
}).then(() => {

  //if the list has data, hide the "no deployments" message, display the list, and add click interactions
  if (deploymentList !== '') {
    const noDeployments = document.getElementById('no-deployments');
    if (noDeployments != null) noDeployments.style.display = 'none';
    const body = document.getElementById('deployment-list__body');
    if (body != null) body.innerHTML = deploymentList;
    deploymentListEventListeners();

  } else {
    //otherwise, hide the list
    const list = document.getElementById('deployment-list');
    list.style.display = 'none';
  }
});