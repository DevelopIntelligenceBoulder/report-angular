angular.module('reports')
  .controller('ReportFormController', ['$scope', ReportFormController]);

/** 
 * Controller for the report form.
 **/
function ReportFormController($scope) {
    'use strict';

    //Saving the this reference
    var rfc = this;

    //Report object to add
    rfc.reportToAdd = {};

    /** 
     * Handles the submission of the form.
     **/
    rfc.submitHandler = function submitHandler() {
        $scope.ac.sales.push(rfc.reportToAdd);
        console.log(rfc.reportToAdd);
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