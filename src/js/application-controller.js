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
    ac.salesViewLimit = 10;
    ac.expand = true;

    /**
     * Handle the expansion of the report form element.
     **/
    ac.expandHandler = function expandHandler() {
        ac.expand = true;
    };

    /**
     * Handle the collapse of the report form element.
     **/
    ac.collapseHandler = function collapseHandler() {
        ac.expand = false;
    };


    //Get all of the sales information
    sales.initialize()
        .then(function(data) {
            ac.sales = data;
        });
}