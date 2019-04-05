const path = require('path')
const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'data', 'database.db')
  }
})

//current software version
const appVersion = 1 

//current deployment being worked on
let currentDeployment = [],
    currentPhase = 1,
    currentTask = 1,
    currentStep = 1

//use jQuery
window.$ = window.jQuery = require('jquery');

//external links
const xlinks = document.querySelectorAll('a[href]') 

//launch external links in browser
Array.prototype.forEach.call(xlinks, (link) => {
  const url = link.getAttribute('href')
  if (url.indexOf('http') === 0) {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      shell.openExternal(url)
    })
  }
})

//load html fragment
function loadHtml(element, source){
  $(element).load(source);
}

//get id from path
let urlParams = new URLSearchParams(window.location.search),
    strId = urlParams.get('id')