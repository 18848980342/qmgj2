app.controller('buyHistoryController',['$scope','$http',function($scope,$http){
	$scope.showActive = 0;
    $scope.filterStatus = 0;
    $scope.orderArr = [];
    $scope.myFilterModel = {status:''};
    $http({
    	url: 'json/test.json'
    }).success(function(res){
    	$scope.orderArr = res.data.list;
    });
    $scope.checkContent = function(i){
    	if( i==0 ){
    		$scope.myFilterModel = {status:''};
    	}else if(i == 1){
    		$scope.myFilterModel = {status: 0};
    	}else if(i == 2){
    		$scope.myFilterModel = {status: 1};
    	}
    	$scope.showActive = i;
    	$scope.filterStatus = i;
    }
    $scope.myFilter = function(item){
    	if( $scope.filterStatus -1 < 0 ){
    		return true;
    	}
    	return item.status == $scope.filterStatus-1;
    }
}]);