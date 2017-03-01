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

.controller('looksCtrl',['$scope','bannerData','mainData',function($scope,bannerData,mainData){
	bannerData.get().success(function(res){
		$scope.arr=res.data.reserveList[0].content;
		console.log($scope.arr);
	})
	bannerData.swiper();
	mainData.get().success(function(res){
		$scope.fourArr=res.data.doc[2].itemData[0];
		console.log($scope.fourArr);
		$scope.detailArr=res.data.doc[3].itemData;
	})
}])