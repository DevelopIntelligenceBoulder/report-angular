angular.module('reports')
  .controller('ReportFormController', ReportFormController);

/** 
 * Controller for the report form.
 **/
function ReportFormController() {
    'use strict';

    //Saving the this reference
    var rfc = this;

    //Report object to add
    rfc.reportToAdd = {};

    /** 
     * Handles the submission of the form.
     **/
    rfc.submitHandler = function submitHandler() {
        rfc.sales.push(rfc.reportToAdd);
    };

    /**
     * Clears the form of data.
     **/
    rfc.clearFormHandler = function clearFormHandler() {
        var keys = Object.keys(rfc.reportToAdd);
        var count = keys.length;
        while(count--) {
            rfc.reportToAdd[keys[count]] = '';
        }
    };
}