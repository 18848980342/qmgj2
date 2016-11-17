app.controller('homeController',['$scope','$http','$interval','$timeout',function($scope,$http,$interval,$timeout){
	$scope.showIndex = 0; 
	$scope.showArr1 = ['《晚秋》再现舞台','《犹太人在上海》音乐剧']; 
	$scope.showArr2 = ['汤唯、玄彬继电影后，首次在话剧舞台合作，重现美国西雅图两名男女身在异国他乡的爱情故事。',
					   '中国、以色列联合创作的大型音乐剧《犹太人在上海》']; 
	$scope.showh1 = $scope.showArr1[$scope.showIndex];
	$scope.showp = $scope.showArr2[$scope.showIndex];
	$http({
    	url: 'json/navClass.json'
    }).success(function(res){
    	$scope.homeArr1 = res.homeArr1;
    	// console.log($scope.homeArr1);
    });
    $scope.homeStatus = 4;
	$scope.clickFun = function(index){
		$scope.homeStatus = index;
	}
	var imgFun = function(){
		if ($scope.showIndex == 1) {
			$scope.showIndex = -1;
		}
		$scope.showIndex++;
		$scope.showh1 = $scope.showArr1[$scope.showIndex];
		$scope.showp = $scope.showArr2[$scope.showIndex];
	}
	var timer = $interval(imgFun, 2000);
	$scope.prev = function(){
		if ($scope.showIndex == 0) {
			$scope.showIndex = 2;
		}
		$scope.showIndex = $scope.showIndex - 1;
		$scope.showh1 = $scope.showArr1[$scope.showIndex];
		$scope.showp = $scope.showArr2[$scope.showIndex];
	}
	$scope.next = function(){
		if ($scope.showIndex == 1) {
			$scope.showIndex = 0;
		}
		$scope.showIndex = $scope.showIndex + 1;
		$scope.showh1 = $scope.showArr1[$scope.showIndex];
		$scope.showp = $scope.showArr2[$scope.showIndex];
	}
}]);