angular.module('jiuguanXQModule',['ui.router'])
.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/nightlife');
	$stateProvider
	.state('jiuguan',{
		url:'/jiuguan',
		templateUrl:'component/nightlife/jiuguan/jiuguan.html',
		controller:'jiuguanXQCtrl',
		css:'component/nightlife/jiuguan/jiuguan.css'
	})
})
.service('liveBanData',['$http',function($http){
	this.get=function(){
		return $http.get('data/banner3.json');
	}
}])
.service('liveData',['$http',function($http){
	this.get=function(){
		return $http.get('data/main3.json');
	}
}])
.service('jiuguanXQData',['$http',function($http){
	this.get=function(){
		return $http.get('data/BarErJi.json');
	}
}])
.controller('jiuguanXQCtrl',['$scope','$http','liveBanData','liveData','jiuguanXQData',function($scope,$http,liveBanData,liveData,jiuguanXQData){
	liveBanData.get().success(function(res){
		$scope.arr=res.data.reserveList[0].content;	
	});
	
	liveData.get().success(function(res){
		var pic1=res.data.doc[2].itemData[0].list[0].icon;
		var pic2=res.data.doc[2].itemData[0].list[1].icon;
		var pic3=res.data.doc[2].itemData[0].list[2].icon;
		var pic4=res.data.doc[2].itemData[0].list[3].icon;
		$scope.pic1=pic1;
		$scope.pic2=pic2;
		$scope.pic3=pic3;
		$scope.pic4=pic4;
		

		
	});
	
	jiuguanXQData.get().success(function(res){
		var contentList=res.data.contentList;
		$scope.contentList=contentList;
	});
}])