angular.module('reports')
  .factory('sales', ['salesAPI', sales]);

function sales(salesAPI) {
	'use strict';

	//Stores the sales records for the application
	var salesRecords = [];

	//Getter for the sales records
	var getSalesRecords = function getSalesRecords() {
		return salesRecords;
	};

	//Add a record to array of sales
	var addSalesRecord = function addSalesRecord(record) {
		salesRecords.push(record);
	};

	//Initialize this sales service
	var initialize = function initialize() {
		return salesAPI.getSalesRecords()
			.then(function(resolved) {
				salesRecords = resolved.data;
				return salesRecords;
			});		
	};

	//API
	return {
		initialize: initialize,
		getSalesRecords: getSalesRecords,
		addSalesRecord: addSalesRecord
	};

}