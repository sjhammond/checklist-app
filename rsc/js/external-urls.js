//get all anchor tags
const links = document.querySelectorAll('a[href]')

//For each link, get the href attribute. If it contains 'http' (i.e. external),
//add an event listener to the link, prevent default behavior, and open in a browser
Array.prototype.forEach.call(links, (link) => {
  const url = link.getAttribute('href')
  if (url.indexOf('http') === 0) {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      shell.openExternal(url)
    })
  }
})
