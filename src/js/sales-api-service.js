angular.module('reports')
  .factory('salesAPI', ['$http', salesAPI]);

/**
 * Handles sales interaction with the backend.
 **/
function salesAPI($http) {
	'use strict';

	/**
	 *  Get the initial supply quantities for the day.
	 **/
	var getSalesRecords = function() {
	 	return $http({
	 			method: 'GET', 
	 			url: '/data/sales'
	 		});
	};	

	//API
	return {
		getSalesRecords: getSalesRecords
	};

}