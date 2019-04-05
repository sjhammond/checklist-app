<<<<<<< HEAD:rsc/js/info-toggler.js
function toggleInfo() {
  $('.info-container, .note-container').hide()
=======
import $ from 'jquery';

export const toggleInfo = () => {
  $('.info-container').hide()
  $('.note-container').hide()
>>>>>>> 59bee1b06e3ea8e69660c27f671de0bafe9ac1f2:src/renderer/helpers/info-toggler.ts

  //toggle more information when clicking the "more info" icon
  $('body').on('click', '.checklist-item__expand', function () {
    $(this).parent().find('.info-container').slideToggle('fast');
    $(this).find('.line').toggleClass('closed');
  });

  //toggle notes section when clicking the "note" icon
  $('body').on('click', '.checklist-note__expand', function () {
    $(this).parent().find('.note-container').slideToggle('fast');
    $(this).find('.svg-note-icon').toggleClass('closed');
  });

  // add the 'hovering' class to the info-expander on hover 
  // (The hover effect can't be done in pure CSS or JQuery because the
  // icon is made up of nested items that use pseudo classes.)
  $(function () {
    $('.checklist-item__expand').hover(function () {
      $(this).find('.line').toggleClass('hovering');
    }, function () {
      $(this).find('.line').toggleClass('hovering');
    })
  })
}
