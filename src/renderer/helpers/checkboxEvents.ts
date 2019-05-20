import $ from 'jquery';

export const checkboxEvents = () => {
    $('input[id$="__checkbox"]').click(function (e) {
        const elmt = $(e); 
        console.log(elmt);
        debugger; 
    });
}