app.controller('indexpageCont',['$scope',function($scope){
	$scope.activeIndex = 0;
	$scope.clickFun = function(index){
		$scope.activeIndex = index;
	}
}]);