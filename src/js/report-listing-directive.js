/**
 *  Report directive used to create individual reports.
 **/
angular.module('reports')
	.directive('reportListing', reportListing);

function reportListing() {
	'use strict';

	//Icon selection for icon-fonts
	var URL = [
		'fa-angellist',
		'fa-smile-o',
		'fa-thumbs-o-up'
	];

	return {
		//Only want attribute directive
		restrict: 'A',  
		//Isolate scope
    	scope: {
    		//2 way binding on a report object
    		report: '=',
    		reportLimit: '='
    	},
    	//We want to deal with an external template
		templateUrl: 'templates/report-listing-directive.html',
		link: function(scope, instanceElement) {
			var imageChoice;
			var PROFITABLILTY_BREAK_POINT = 200;

			scope.report.grossProfit = scope.report.netSale - scope.report.costOfGoods;
			scope.report.profitable = scope.report.grossProfit > PROFITABLILTY_BREAK_POINT ? true : false;

			scope.$watch('reportLimit', function() {
				imageChoice = Math.round(Math.random()*2);
				scope.report.goodImage = URL[imageChoice];
			});
			
			instanceElement.bind('click', function() {
				instanceElement.parent().children().removeClass('selected');
				instanceElement.addClass('selected');
			});
		}
	};
}