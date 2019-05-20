import $ from 'jquery';
import { IDBPDatabase } from 'idb';
import { MilestoneDB } from '../models/milestone-db';

export const checkboxEvents = async (db: IDBPDatabase<MilestoneDB>) => {
    $('inputid$="__checkbox"').click(function (e) {
        const stepId = parseInt(e.target.dataset.stepId); 
        var checked = e.originalEvent.srcElement['checked'] == 'true';
        const elmt = $(e);
        console.log(elmt);
        debugger;
    });
}