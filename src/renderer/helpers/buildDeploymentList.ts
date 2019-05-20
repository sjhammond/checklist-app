import { IDBPCursorWithValue } from "idb";
import { MilestoneDB } from "../models/milestone-db";
import { ProductTier } from "../models/product-tier";

//declare deploymentList for global scope
export let deploymentList = '';

export const buildDeploymentList = (cursor: IDBPCursorWithValue<MilestoneDB, 'deployments'[], 'deployments', unknown>) => {

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