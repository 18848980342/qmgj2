app.controller('personalController',['$scope','$state',function($scope,$state){
	$state.go('personal.personalPage');
	$scope.curTime = +new Date();
	$scope.personal = 0;
	$scope.clickFun = function(index){
	    $scope.personal = index;
	}
}]);