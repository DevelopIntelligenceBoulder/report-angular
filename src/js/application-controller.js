angular.module('reports')
  .controller('AppController', ['sales', AppController]);

/** 
 * Controller for the application.
 **/
function AppController(sales) {
    'use strict';

    //Saving the this reference
    var ac = this;

    //Report filtering
    ac.salesViewLimit = 4;
    //Is the form to be expanded
    ac.isExpanded = false;

    /**
     * Handle the expand/collapse of the report form element.
     **/
    ac.toggleFormControl = function toggleFormControl() {
        ac.isExpanded = !ac.isExpanded;
    };

    //Get all of the sales information
    sales.initialize()
        .then(function(data) {
            ac.sales = data;
        });
}