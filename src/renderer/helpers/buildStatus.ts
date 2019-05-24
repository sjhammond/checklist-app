import { ItemState } from '../models/item-state';
import { dateOptions } from './dateOptions';
import { DeploymentItem } from '../models/deployment-item';
 
export const buildStatus = (data:DeploymentItem) :string => {
    //build the status html for each step 
    return `Marked <strong>
            ${data.itemState != ItemState.NotApplicable ? ItemState[data.itemState] : "Does Not Apply"}
            </strong> by ${data.integrator} on ${data.date.toLocaleString('default', dateOptions)}
    `;
}