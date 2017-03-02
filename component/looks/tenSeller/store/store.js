angular.module('storeModule',['ui.router'])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('store',{
		url:'/store',
		templateUrl:'component/looks/tenSeller/store/store.html',
		controller:'storeCtrl',
		css:'component/looks/tenSeller/store/store.css'
	})
})
.service('spaData',['$http',function($http){
	this.get=function(){
		return $http.get('data/spa.json');
	}
}])
.service('swiper',['$timeout',function($timeout){
		this.swiper = function(){
			$timeout(function(){
				Swiper('.swiper-container',{
					loop: true,
					autoplay: 2500,
					pagination: '.swiper-pagination'
				})
			},50);
		}
	}])
.controller('storeCtrl',['$scope','spaData','swiper',function($scope,spaData,swiper){
	spaData.get().success(function(res){
		$scope.dataObj=res.data;
		
		
		//调用轮播
		swiper.swiper();
		
	})
}])