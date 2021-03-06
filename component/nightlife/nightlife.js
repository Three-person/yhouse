angular.module('nightlifeModule',['ui.router','me-lazyload','jiuguanXQModule','fiveteenShopModule','everShopModule'])
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
.controller('nightlifeCtrl',['$scope','$http','liveBanData','liveData',function($scope,$http,liveBanData,liveData){
	liveBanData.get().success(function(res){
		$scope.arr=res.data.reserveList[0].content;	
	});
	liveData.get().success(function(res){
		var pid=[];
		var arr1=res.data.doc[2].itemData[0].list;
		var title=res.data.doc[2].itemData[0].title;
		var viceTitle=res.data.doc[2].itemData[0].viceTitle;
		$scope.title=title;
		$scope.viceTitle=viceTitle;
		var contentsNumStr=res.data.doc[2].itemData[0].contentsNumStr;
		$scope.contentsNumStr=contentsNumStr;
		$scope.arr1=arr1;
		
		var itemData=res.data.doc[3].itemData;
		$scope.itemData=itemData;
		//点击存储当前对象id
		$scope.login=function(i){
			var id=itemData[i].id;
			pid.push(id);
			console.log(id);
		localStorage.setItem('idArr',JSON.stringify(pid));
		}
		
	});
}])