import { dbPromise } from "../data/db";

export const deleteDeployment = (id: number): any => {

    //confirm delete
    const c = confirm('Are you sure you want to delete this deployment?')
  
    //if OK to delete, delete from indexedDB object store 
    if (c == true) {
      dbPromise().then(async db => {
  
        //delete the deployment from deployments db store
        await db
          .transaction('deployments', 'readwrite')
          .objectStore('deployments')
          .delete(id);
  
        //get the items associated with the deployment
        const items = await db
          .transaction('deployment-items', 'readwrite')
          .objectStore('deployment-items')
          .index('deploymentId')
          .getAllKeys(id);
  
        //delete each item for the deployment from deployment-items db store
        for (const item of items){
          await db
          .transaction('deployment-items', 'readwrite')
          .objectStore('deployment-items')
          .delete(item);
        }
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