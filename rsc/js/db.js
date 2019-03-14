//use idb to wrap asynchronous db requests in promises to support sequential operations
const idb = require('idb')

//open appDB database
let dbPromise = idb.openDb('appDb', 1, upgradeDb => {
    console.log(`${upgradeDb.name} upgrade required. Upgrading to version ${upgradeDb.version}...`)
    if (!upgradeDb.objectStoreNames.contains('deployments')) {
        let deploymentOS = upgradeDb.createObjectStore('deployments', { keyPath: 'id', autoIncrement: true })
        deploymentOS.createIndex('dateModified', 'dateModified', { unique: false })
    }
})

dbPromise
    .then(db => console.log(`${db.name} version ${db.version} open.`))