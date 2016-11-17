app.controller('personalInfoController',['$scope','$http',function($scope,$http){
	$http({
		url: 'json/choose.json'
	}).success(function(res){
		$scope.checkList = res.check;
	});
	$scope.arr = [];
	$scope.arr[0]=$scope.arr[8]=true;
	$scope.checkBoxFn = function(index){
	    $scope.arr[index] = !$scope.arr[index];
	}
}]);