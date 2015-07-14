angular.module('reports')
  .controller('ReportFormController', ['sales', ReportFormController]);

/** 
 * Controller for the report form.
 **/
function ReportFormController(sales) {
    'use strict';

    //Saving the this reference
    var rfc = this;

    //Report object to add
    rfc.reportToAdd = {};

    /** 
     * Handles the submission of the form.
     **/
    rfc.submitHandler = function submitHandler() {
        //Update the sales record information
        sales.addSalesRecord(rfc.reportToAdd);
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