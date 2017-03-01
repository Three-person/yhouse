angular.module('looksModule',['ui.router'])
.service('bannerData',['$http','$timeout',function($http,$timeout){
	this.get=function(){
		return $http.get('data/banner4.json');
	}
	  	 this.swiper=function(){
	  	 	$timeout(function(){
	  	 		new Swiper ('.swiper-container', {
					loop: true,
				    autoplay:'3000',
				    
				    // 如果需要分页器
				    pagination: '.swiper-pagination',
			    
			 	 })
	  	 	},50)
	  	 }
	
}])
.service('mainData',['$http',function($http){
	this.get=function(){
		return $http.get('data/main4.json');
	}
}])
	.service('swiper1',['$timeout',function($timeout){
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

.controller('looksCtrl',['$scope','bannerData','mainData','swiper1',function($scope,bannerData,mainData,swiper1){
	bannerData.get().success(function(res){
		$scope.arr=res.data.reserveList[0].content;
		console.log($scope.arr);
	})
	swiper1.swiper();
	mainData.get().success(function(res){
		$scope.fourArr=res.data.doc[2].itemData[0];
		console.log($scope.fourArr);
		$scope.detailArr=res.data.doc[3].itemData;
	})
}])