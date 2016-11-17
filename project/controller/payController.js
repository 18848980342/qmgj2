app.controller('payController',['$scope','$http',function($scope,$http){
	$http({
		url: 'json/choose.json'
	}).success(function(res){
		$scope.bankList = res.bank;
		// console.log($scope.bankList);
	});
	$scope.radioBoxFn1Show = 0;
	$scope.radioBoxFn1 = function(index){
		$scope.radioBoxFn1Show = index;
	}
	$scope.activeIndex = 0;
	$scope.contentIndex = 0;
	$scope.clickFn = function(index){
		$scope.activeIndex = index;
		$scope.contentIndex = index;
	}
}]);