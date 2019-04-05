function displayDeployments(htmlElement) {
    knex
        .select()
        .from('Deployment') //get deployments from the database     
        .leftJoin('Product', 'Product.ProductId', 'Deployment.DeploymentProduct') //join with product table to get product names
        .orderBy('DeploymentModifyDate', 'desc') //order by last modified
        .then(result => {
            if (result.length > 0) {
                let d = document.getElementById('no-deployments')
                d.style.display = 'none'
                document.getElementById(htmlElement).innerHTML = result.map(listTemplate).join('') //map db data to list template and insert in html element
            } else {
                let d = document.getElementById('deployment-list')
                d.style.display = 'none'
            }
        })
}

//html template for db data
function listTemplate(d) {
    return `
        <tr>
            <td>
                ${d.DeploymentName}
            </td>
            <td>
                ${d.ProductName}
            </td>
            <td>
                ${d.DeploymentCreateDate}
            </td>
            <td>
                ${d.DeploymentModifyDate}
            </td>
        </tr>
    `
}