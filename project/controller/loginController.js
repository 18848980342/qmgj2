app.controller('loginController',['$scope','$http','$state',function($scope,$http,$state){
	$scope.arr = [];
	$scope.clickFun = function(index){
		if ($scope.myForm.$valid) {
			$http({
				// 登录接口
				// 	/User/Login
				// 	入参：
				// 		{
				// 			phone: '1888888888',
				// 			password: '123456'
				// 		}

				// 官网首页全部信息接口
				// 	/Pro/IndexInfo
				// 	入参： 无

				// 项目详情接口
				// 	/Pro/ProInfoById
				// 	入参：
				// 		{
				// 			id: 3 | 4 | 5
				// 		}
				url: '',
				type: 'get',
				data: {
					phone: $scope.phone,
					password: $scope.password
				}
				// url: 'http://10.48.0.79:3000',
				// type: 'post',
				// data: {
				// 	phone: '18888888888',
				// 	password: '123456'
				// }

				
				// params: {
				// 	id: 3 | 4 | 5
				// }
			}).success(function(res){
				$state.go("personal");
			})
		}
		else{
			alert("请输入手机号和密码或选择“注册”！");
		};
	    $scope.arr[index] = !$scope.arr[index];
	}
}]);