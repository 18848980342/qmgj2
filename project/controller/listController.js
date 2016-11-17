app.controller('listController',['$scope','$http',function($scope,$http){
	$scope.myFilterModel = {status:''};
	$http({
    	url: 'json/navClass.json'
    }).success(function(res){
    	$scope.listArr1 = res.listArr1;
    	$scope.listArr2 = res.listArr2;
    	$scope.listArr3 = res.listArr3;
    	$scope.list = res.list;
    });
    $scope.listStatus1 = 0;
    $scope.listStatus2 = 2;
    $scope.listStatus3 = 0;
	$scope.clickFun1 = function(index){
		$scope.listStatus1 = index;
		$scope.myFilterModel = {status: ['',2,0,3,4,5,6,7,8,1][index]};
	}
	$scope.clickFun2 = function(index){
		$scope.listStatus2 = index;
    	$scope.myFilterModel = {status: ['',1,2][index]};
	}
	$scope.clickFun3 = function(index){
		$scope.listStatus3 = index;
    	$scope.myFilterModel = {status: ['',1,2][index]};
	}
}]);