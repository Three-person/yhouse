angular.module('everShopModule',['ui.router'])
.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/nightlife');
	$stateProvider
	.state('everShop',{
		url:'/everShop',
		templateUrl:'component/nightlife/everShop/everShop.html',
		controller:'everShopCtrl',
		css:'component/nightlife/everShop/everShop.css'
	})
})
.service('everShopData',['$http',function($http){
	this.get=function(){
		return $http.get('data/everShopData.json');
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

.controller('everShopCtrl',['$scope','$http','everShopData','swiper',function($scope,$http,everShopData,swiper){
	everShopData.get().success(function(res){
		$scope.headPics=res.data.headPics;
		swiper.swiper();
		$scope.hostName=res.data.hostName;
		$scope.avgPrice=res.data.avgPrice;
		$scope.businessesDistrict=res.data.goodList[0].businessesDistrict;
		$scope.countOfInterested=res.data.countOfInterested;
	})
}])