angular.module('reports')
	.controller('HeaderController', HeaderController);

/**
 * Header Controller for the application header.
 **/
function HeaderController() {

 	//Setting the page properties
 	this.date = {
 		current: new Date()
 	};

 }