angular.module('looksModule',['ui.router','tenSellerModule'])
.service('bannerData4',['$http',function($http){
	this.get=function(){
		return $http.get('data/banner4.json');
	}
	
}])
.service('mainData',['$http',function($http){
	this.get=function(){
		return $http.get('data/main4.json');
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

.controller('looksCtrl',['$scope','bannerData4','mainData','swiper',function($scope,bannerData4,mainData,swiper){
	bannerData4.get().success(function(res){
		$scope.arr=res.data.reserveList[0].content;
		console.log($scope.arr);
		swiper.swiper();
	})
	mainData.get().success(function(res){
		$scope.fourArr=res.data.doc[2].itemData[0];
		$scope.detailArr=res.data.doc[3].itemData;
	})
	$('.seller').on('click',function(){
		console.log('xiaoshi');
		$('.headAndTab').css({
			'display':'none'
		})
	})
}])