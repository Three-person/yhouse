angular.module('fiveteenShopModule',['ui.router'])
.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/nightlife');
	$stateProvider
	.state('fiveteenShop',{
		url:'/fiveteenShop',
		templateUrl:'component/nightlife/fiveteenShop/fiveteenShop.html',
		controller:'fiveteenShopCtrl',
		css:'component/nightlife/fiveteenShop/fiveteenShop.css'
	})
})
.controller('fiveteenShopCtrl',['$scope',function($scope){
	
}])