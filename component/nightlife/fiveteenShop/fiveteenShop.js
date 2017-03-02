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
.service('fiveteenShopData',['$http',function($http){
	this.get=function(){
		return $http.get('data/fiveteenShop.json');
	}
}])
.controller('fiveteenShopCtrl',['$scope','$http','fiveteenShopData',function($scope,$http,fiveteenShopData){
	fiveteenShopData.get().success(function(res){
		$scope.picUrl=res.data.picUrl;
		$scope.topicDescription=res.data.topicDescription;
		$scope.contentList=res.data.contentList;
	})
}])