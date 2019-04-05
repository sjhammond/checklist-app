export const includeHTML = (): void => {
  /* Loop through the collection of info divs: */
  const z = document.getElementsByClassName('info');
  for (let i = 0; i < z.length; i++) {
    const elmnt = z[i];
    /*get the 'include-html' attribute*/
    const file = elmnt.getAttribute('include-html');
    if (file) {
      /* Make an HTTP request using the 'include-html' attribute value as the file name: */
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            //EDIT THIS BIT TO STRIP META AND REL TAGS FROM FLARE TOPICS
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) { elmnt.innerHTML = 'Page not found.'; }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute('include-html');
          includeHTML();
        }
      }
      xhttp.open('GET', file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
