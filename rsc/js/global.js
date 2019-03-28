//current software version
const currentVersion = 1 

//db connection
const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "./data/database.db"
  }
})

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

//load html fragments
function loadHtml(element, source){
  $(element).load(source);
}