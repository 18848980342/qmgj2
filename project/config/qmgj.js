var app = angular.module('qmgj',['ui.router']);
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider)
	{
		$urlRouterProvider.otherwise('/home');
		$stateProvider
			.state('home',{
				url: '/home',
				templateUrl: 'view/home.html',
				controller: 'homeController'
			})
			.state('list',{
				url: '/list',
				templateUrl: 'view/list.html',
				controller: 'listController'
			})
			.state('detail',{
				url: '/detail',
				templateUrl: 'view/detail.html',
				controller: 'detailController'
			})
			.state('detail.intruduction',{
				url: '/intruduction',
				templateUrl: 'view/intruduction.html',
				controller: 'intruductionController'
			})
			.state('detail.develop',{
				url: '/develop',
				templateUrl: 'view/develop.html',
				controller: 'developController'
			})
			.state('order',{
				url: '/order',
				templateUrl: 'view/order.html',
				controller: 'orderController'
			})
			.state('pay',{
				url: '/pay',
				templateUrl: 'view/pay.html',
				controller: 'payController'
			})
			.state('paied',{
				url: '/paied',
				templateUrl: 'view/paied.html',
				controller: 'paiedController'
			})
			.state('login',{
				url: '/login',
				templateUrl: 'view/login.html',
				controller: 'loginController'
			})
			.state('personal',{
				url: '/personal',
				templateUrl: 'view/personal.html',
				controller: 'personalController'
			})
			.state('personal.personalPage',{
				url: '/personalPage',
				templateUrl: 'view/personalPage.html',
				controller: 'personalPageController'
			})
			.state('personal.personalInfo',{
				url: '/personalInfo',
				templateUrl: 'view/personalInfo.html',
				controller: 'personalInfoController'
			})
			.state('personal.safeSet',{
				url: '/safeSet',
				templateUrl: 'view/safeSet.html',
				controller: 'safeSetController'
			})
			.state('personal.buyHistory',{
				url: '/buyHistory',
				templateUrl: 'view/buyHistory.html',
				controller: 'buyHistoryController'
			})
			.state('register',{
				url: '/register',
				templateUrl: 'view/register.html',
				controller: 'registerController'
			})
			.state('findpassword',{
				url: '/findpassword',
				templateUrl: 'view/findpassword.html',
				controller: 'findpasswordController'
			})
	}]);