var myApp = angular.module('myApp',[]);

myApp.controller('MyCtrl', function MyCtrl($scope) {
		var MONTHS_PER_YEAR = 12;
    var WORKING_DAYS_PER_MONTH = 22;
    var WORKING_HOURS_PER_DAY = 8;
		$scope.setSalaryFromHour = function(perHour) {
    		if (perHour !== undefined) {
						$scope.perHour = perHour;
        }
				$scope.perMonth = $scope.perHour * WORKING_HOURS_PER_DAY * WORKING_DAYS_PER_MONTH;
				$scope.perYear = $scope.perMonth * MONTHS_PER_YEAR;
    }

		$scope.setSalaryFromMonth = function(perMonth) {
    		if (perMonth !== undefined) {
						$scope.perMonth = perMonth;
        }
				$scope.perHour = $scope.perMonth / WORKING_HOURS_PER_DAY / WORKING_DAYS_PER_MONTH;
				$scope.perYear = $scope.perMonth * MONTHS_PER_YEAR;
    }

		$scope.setSalaryFromYear = function(perYear) {
    		if (perYear !== undefined) {
						$scope.perYear = perYear;
        }
				$scope.perMonth = $scope.perYear / MONTHS_PER_YEAR;
				$scope.perHour = $scope.perMonth / WORKING_HOURS_PER_DAY / WORKING_DAYS_PER_MONTH;
    }

		$scope.setSalaryFromHour(1);

});

