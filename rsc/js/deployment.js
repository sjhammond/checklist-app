class Deployment {
    constructor(p, n) {
        let d = new Date()
        this.version = currentVersion
        this.product = p
        this.name = n
        this.date = d.toLocaleString()
    }

    create() {
        knex
            .insert({
                VersionId: this.version,
                ProductId: this.product,
                DeploymentName: this.name,
                CreateDate: this.date,
                ModifyDate: this.date
            })
            .into('Deployment')
            .catch(err => console.log(err))
    }
}
