// app.controller('indexpageCont',['$scope',function($scope){
// 	$scope.activeIndex = 0;
// 	$scope.clickFun = function(index){
// 		$scope.activeIndex = index;
// 	}
// }]);

// app.controller('homeController',['$scope','$http','$interval','$timeout',function($scope,$http,$interval,$timeout){
// 	$scope.showIndex = 0; 
// 	$scope.showArr1 = ['《晚秋》再现舞台','《犹太人在上海》音乐剧']; 
// 	$scope.showArr2 = ['汤唯、玄彬继电影后，首次在话剧舞台合作，重现美国西雅图两名男女身在异国他乡的爱情故事。',
// 					   '中国、以色列联合创作的大型音乐剧《犹太人在上海》']; 
// 	$scope.showh1 = $scope.showArr1[$scope.showIndex];
// 	$scope.showp = $scope.showArr2[$scope.showIndex];
// 	$http({
//     	url: 'json/navClass.json'
//     }).success(function(res){
//     	$scope.homeArr1 = res.homeArr1;
//     	// console.log($scope.homeArr1);
//     });
//     $scope.homeStatus = 4;
// 	$scope.clickFun = function(index){
// 		$scope.homeStatus = index;
// 	}
// 	var imgFun = function(){
// 		if ($scope.showIndex == 1) {
// 			$scope.showIndex = -1;
// 		}
// 		$scope.showIndex++;
// 		$scope.showh1 = $scope.showArr1[$scope.showIndex];
// 		$scope.showp = $scope.showArr2[$scope.showIndex];
// 	}
// 	var timer = $interval(imgFun, 2000);
// 	$scope.prev = function(){
// 		if ($scope.showIndex == 0) {
// 			$scope.showIndex = 2;
// 		}
// 		$scope.showIndex = $scope.showIndex - 1;
// 		$scope.showh1 = $scope.showArr1[$scope.showIndex];
// 		$scope.showp = $scope.showArr2[$scope.showIndex];
// 	}
// 	$scope.next = function(){
// 		if ($scope.showIndex == 1) {
// 			$scope.showIndex = 0;
// 		}
// 		$scope.showIndex = $scope.showIndex + 1;
// 		$scope.showh1 = $scope.showArr1[$scope.showIndex];
// 		$scope.showp = $scope.showArr2[$scope.showIndex];
// 	}
// }]);

// app.controller('listController',['$scope','$http',function($scope,$http){
// 	$scope.myFilterModel = {status:''};
// 	$http({
//     	url: 'json/navClass.json'
//     }).success(function(res){
//     	$scope.listArr1 = res.listArr1;
//     	$scope.listArr2 = res.listArr2;
//     	$scope.listArr3 = res.listArr3;
//     	$scope.list = res.list;
//     });
//     $scope.listStatus1 = 0;
//     $scope.listStatus2 = 2;
//     $scope.listStatus3 = 0;
// 	$scope.clickFun1 = function(index){
// 		$scope.listStatus1 = index;
// 		$scope.myFilterModel = {status: ['',2,0,3,4,5,6,7,8,1][index]};
// 	}
// 	$scope.clickFun2 = function(index){
// 		$scope.listStatus2 = index;
//     	$scope.myFilterModel = {status: ['',1,2][index]};
// 	}
// 	$scope.clickFun3 = function(index){
// 		$scope.listStatus3 = index;
//     	$scope.myFilterModel = {status: ['',1,2][index]};
// 	}
// }]);

// app.controller('detailController',['$scope','$state',function($scope,$state){
// 	$state.go('detail.intruduction');
// 	$scope.activeIndex = 0;
// 	$scope.clickFun = function(index){
// 		$scope.activeIndex = index;
// 	}
// }]);

// app.controller('intruductionController',['$scope',function($scope){}]);

// app.controller('developController',['$scope',function($scope){}]);

// app.controller('orderController',['$scope',function($scope){}]);

// app.controller('payController',['$scope','$http',function($scope,$http){
// 	$http({
// 		url: 'json/choose.json'
// 	}).success(function(res){
// 		$scope.bankList = res.bank;
// 		// console.log($scope.bankList);
// 	});
// 	$scope.radioBoxFn1Show = 0;
// 	$scope.radioBoxFn1 = function(index){
// 		$scope.radioBoxFn1Show = index;
// 	}
// 	$scope.activeIndex = 0;
// 	$scope.contentIndex = 0;
// 	$scope.clickFn = function(index){
// 		$scope.activeIndex = index;
// 		$scope.contentIndex = index;
// 	}
// }]);

// app.controller('paiedController',['$scope',function($scope){}]);

// app.controller('loginController',['$scope','$http','$state',function($scope,$http,$state){
// 	$scope.arr = [];
// 	$scope.clickFun = function(index){
// 		if ($scope.myForm.$valid) {
// 			$http({
// 				// 登录接口
// 				// 	/User/Login
// 				// 	入参：
// 				// 		{
// 				// 			phone: '1888888888',
// 				// 			password: '123456'
// 				// 		}

// 				// 官网首页全部信息接口
// 				// 	/Pro/IndexInfo
// 				// 	入参： 无

// 				// 项目详情接口
// 				// 	/Pro/ProInfoById
// 				// 	入参：
// 				// 		{
// 				// 			id: 3 | 4 | 5
// 				// 		}
// 				url: '',
// 				type: 'get',
// 				data: {
// 					phone: $scope.phone,
// 					password: $scope.password
// 				}
// 				// url: 'http://10.48.0.79:3000',
// 				// type: 'post',
// 				// data: {
// 				// 	phone: '18888888888',
// 				// 	password: '123456'
// 				// }

				
// 				// params: {
// 				// 	id: 3 | 4 | 5
// 				// }
// 			}).success(function(res){
// 				$state.go("personal");
// 			})
// 		}
// 		else{
// 			alert("请输入手机号和密码或选择“注册”！");
// 		};
// 	    $scope.arr[index] = !$scope.arr[index];
// 	}
// }]);

// app.controller('personalController',['$scope','$state',function($scope,$state){
// 	$state.go('personal.personalPage');
// 	$scope.curTime = +new Date();
// 	$scope.personal = 0;
// 	$scope.clickFun = function(index){
// 	    $scope.personal = index;
// 	}
// }]);

// app.controller('personalPageController',['$scope',function($scope){}]);
// app.controller('personalInfoController',['$scope','$http',function($scope,$http){
// 	$http({
// 		url: 'json/choose.json'
// 	}).success(function(res){
// 		$scope.checkList = res.check;
// 	});
// 	$scope.arr = [];
// 	$scope.arr[0]=$scope.arr[8]=true;
// 	$scope.checkBoxFn = function(index){
// 	    $scope.arr[index] = !$scope.arr[index];
// 	}
// }]);

// app.controller('safeSetController',['$scope',function($scope){
// 	$scope.activeIndex = 0;
// 	$scope.contentIndex = 0;
// 	$scope.clickFn = function(index){
// 		$scope.activeIndex = index;
// 		$scope.contentIndex = index;
// 	}
// }]);

// app.controller('buyHistoryController',['$scope','$http',function($scope,$http){
// 	$scope.showActive = 0;
//     $scope.filterStatus = 0;
//     $scope.orderArr = [];
//     $scope.myFilterModel = {status:''};
//     $http({
//     	url: 'json/test.json'
//     }).success(function(res){
//     	$scope.orderArr = res.data.list;
//     });
//     $scope.checkContent = function(i){
//     	if( i==0 ){
//     		$scope.myFilterModel = {status:''};
//     	}else if(i == 1){
//     		$scope.myFilterModel = {status: 0};
//     	}else if(i == 2){
//     		$scope.myFilterModel = {status: 1};
//     	}
//     	$scope.showActive = i;
//     	$scope.filterStatus = i;
//     }
//     $scope.myFilter = function(item){
//     	if( $scope.filterStatus -1 < 0 ){
//     		return true;
//     	}
//     	return item.status == $scope.filterStatus-1;
//     }
// }]);

// app.controller('registerController',['$scope',function($scope){}]);

// app.controller('findpasswordController',['$scope',function($scope){}]);