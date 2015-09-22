'use strict'

app.controller('MainCtrl', function($scope, $http){

	$http.get('././data/record.json').success(function(response){
  $scope.myData = response;
  console.log(response);
  });

	$scope.sec1display = true;
	$scope.sec2display = $scope.sec3display = false;

	$scope.displaySec = function(sec_Id){
		$scope.sec1display = $scope.sec2display = $scope.sec3display = false;
    var tempVar = "sec"+sec_Id+"display";
    $scope[tempVar] = true;                              // doubt.....
	};


});