import $ from 'jquery';
import { createNewDeployment } from './helpers/createNewDeployment';

//load svg images
$("#essential-icon").load("./svg/essential.svg");
$("#express-icon").load("./svg/express.svg");
$("#professional-icon").load("./svg/professional.svg");
$("#expert-icon").load("./svg/expert.svg");
$("#corporate-icon").load("./svg/corporate.svg");

//prevent default form submission (but keep form validation!)
$('form').submit(e => e.preventDefault());

// on click, create a new deployment using the params from the html form
$('#newDeploymentBtn').on('click', () => {
  const product = document.querySelector('input[name="radio"]:checked') as HTMLInputElement;
  const name = document.getElementById('deploymentName') as HTMLInputElement;
  const integrator = document.getElementById('integratorName') as HTMLInputElement;
  if (product != null && name.checkValidity() && integrator.checkValidity()) {
    createNewDeployment(product.value, name.value, integrator.value);
  }
});