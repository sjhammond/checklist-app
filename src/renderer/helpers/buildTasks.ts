import { Task } from "../models/task";
import { Step } from "../models/step";
import { DeploymentItem } from "../models/deployment-item";
import { buildSteps } from "./buildSteps";
import { deployment } from "../checklist";

//generates the task-level html for each task in the deployment phase
export const buildTasks = (task: Task, steps: Step[], items: DeploymentItem[]): string => {
    return `
      <section class='checklist'>
          <h2 class='checklist__title'>${task.title}</h2>
          <span class='checklist__title-border'></span><span class='checklist__percentage-border'></span>
          ${steps
            .filter(step => step.productTier.valueOf() <= deployment.productTier.valueOf())
            .map(step => { return buildSteps(step, items) })
            .join('')
        }
      </section>
    `
}