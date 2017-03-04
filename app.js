var routerApp=angular.module('myApp',['ui.router','angularCSS','cityChangeModule','cateModule','looksModule','nightlifeModule','ployModule'])
.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/cate');
	
	$stateProvider
		.state('cate',{
			url:'/cate',
			templateUrl:'component/cate/cate.html',
			controller:'cataCtrl',
			css:'component/cate/cate.css'
		})
		.state('nightlife',{
			url:'/nightlife',
			templateUrl:'component/nightlife/nightlife.html',
			controller:'nightlifeCtrl',
			css:'component/nightlife/nightlife.css'
		})
		.state('ploy',{
			url:'/ploy',
			templateUrl:'component/ploy/ploy.html',
			controller:'ployCtrl',
			css:'component/ploy/ploy.css'
		})
		.state('looks',{
			url:'/looks',
			templateUrl:'component/looks/looks.html',
			controller:'looksCtrl',
			css:'component/looks/looks.css'
		})
	
})
