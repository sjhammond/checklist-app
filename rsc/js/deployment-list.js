function displayDeployments(htmlElement) {
    knex
        .select()
        .from('Deployment') //get deployments from the database     
        .leftJoin('Product', 'Product.ProductId', 'Deployment.ProductId') //join with product table to get product names
        .orderBy('ModifyDate', 'desc') //order by last modified
        .then(result => {
            if (result.length > 0) {
                let noDeployments = document.getElementById('no-deployments')
                noDeployments.style.display = 'none' //hide 'no deployments found' message
                document.getElementById(htmlElement).innerHTML = result.map(listTemplate).join('') //map db data to list template and insert in html element
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
                ${d.CreateDate}
            </td>
            <td>
                ${d.ModifyDate}
            </td>
        </tr>
    `
}