'use strict'

angular.module('myApp', [])
	
	.controller('myCtrl',function($scope){
		$scope.hideSec1 = function(){
			console.log('hi1');
			    document.getElementById("sec2").style.display = "none";
			    document.getElementById("sec1").style.display = "block";
			    document.getElementById("sec3").style.display = "none";	
			}

		$scope.hideSec2 = function(){
			console.log('hi2');
			    document.getElementById("sec2").style.display = "block";
			    document.getElementById("sec1").style.display = "none";
			    document.getElementById("sec3").style.display = "none";

			}	

		$scope.hideSec3 = function(){
			console.log('hi3');
			    document.getElementById("sec2").style.display = "none";
			    document.getElementById("sec1").style.display = "none";
			    document.getElementById("sec3").style.display = "block";

			}		
	});