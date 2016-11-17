app.controller('detailController',['$scope','$state',function($scope,$state){
	$state.go('detail.intruduction');
	$scope.activeIndex = 0;
	$scope.clickFun = function(index){
		$scope.activeIndex = index;
	}
}]);