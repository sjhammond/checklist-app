import { deleteDeployment } from "./deleteDeployment";

export const deploymentListEventListeners = async () => {
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
      });
    });
  }