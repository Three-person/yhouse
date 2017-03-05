angular.module('everShopModule',['ui.router','me-lazyload'])
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
	this.get=function(url){
		return $http.get(url);
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
	var allId = JSON.parse(localStorage.getItem("idArr"));
	$scope.allId=allId;
	console.log(allId);
	for(var i=0;i<allId.length;i++){
		var id=allId[i];
		console.log(id);
		everShopData.get('http://m.yhouse.com/api/m/host/item-v3.8/'+id+'?from=h5').success(function(res){
			console.log(res.data);
			$scope.headPics=res.data.headPics;
			swiper.swiper();
			$scope.hostName=res.data.hostName;
			$scope.avgPrice=res.data.avgPrice;
			$scope.businessesDistrict=res.data.goodList[0].businessesDistrict;
			$scope.countOfInterested=res.data.countOfInterested;
			$scope.address=res.data.address;
			var tagArr=res.data.tagArr;
			$scope.tagArr=tagArr;
			$scope.highs=res.data.highs;
			$scope.recommendAutomatic=res.recommendAutomatic;
		})
		
	}
}])