//On click, create a new deployment using the params from the html form
document.getElementById('newDeploymentBtn').onclick = () => {
    let p = document.querySelector('input[name="radio"]:checked').value,
        n = document.getElementById('deploymentName').value,
        d = new Deployment(p, n)
    d.create()
    .then(result => window.location.href = "./checklist.html?id=" + result)
}