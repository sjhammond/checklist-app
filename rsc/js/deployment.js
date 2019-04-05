class Deployment {
    constructor(p, n) {
        let d = new Date()
        this.version = appVersion
        this.product = p
        this.name = n
        this.date = d.toLocaleString()
    }

    create() {
        return new Promise((resolve, reject) => {
            knex('Deployment')
            .insert({
                DeploymentAppVersion: this.version,
                DeploymentProduct: this.product,
                DeploymentName: this.name,
                DeploymentCreateDate: this.date,
                DeploymentModifyDate: this.date
            })
            .then(result => resolve(result))
            .catch(error => reject(error))
        })
    }
    
    static fetch(id) {
        return new Promise((resolve, reject) => {
            knex('Deployment')
            .where('DeploymentId', id)
            .first()
            .then(result => {
                if (result == undefined){
                    reject("this deployment doesn't exist in the database")
                } else {
                    currentDeployment = result
                    resolve(result)
                }
            })
        })
    }
}