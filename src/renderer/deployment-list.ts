import { IDBPCursorWithValue } from 'idb';
import { dbPromise } from './data/db';
import { MilestoneDB } from './models/milestone-db';
import { ProductTier } from './models/product-tier';

let deploymentList = '';

dbPromise().then(async appDB => {
  // get the db then create a transaction, open obj store, and open cursor
  const tx = appDB.transaction(['deployments'], 'readonly');
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
  }
});

const buildDeployments = (cursor: IDBPCursorWithValue<MilestoneDB, 'deployments'[], 'deployments', unknown>) => {
  if (!cursor) {
    return;
  }
  deploymentList += `
          <tr>
              <td>
                  ${cursor.value.name}
              </td>
              <td>
                  ${ProductTier[cursor.value.productTier]}
              </td>
              <td>
                  ${(cursor.value.dateCreated).toLocaleString()}
              </td>
              <td>
                  ${(cursor.value.dateModified).toLocaleString()}
              </td>
          </tr>
      `
};
