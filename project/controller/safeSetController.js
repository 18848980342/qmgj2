app.controller('safeSetController',['$scope',function($scope){
	$scope.activeIndex = 0;
	$scope.contentIndex = 0;
	$scope.clickFn = function(index){
		$scope.activeIndex = index;
		$scope.contentIndex = index;
	}
}]);