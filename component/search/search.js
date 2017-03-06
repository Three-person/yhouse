angular.module('searchModule',['ui.router'])
.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
	.state('search',{
		url:'/search',
		templateUrl:'component/search/search.html',
		controller:'searchCtrl',
		css:'component/search/search.css'
	})
})
.service('searchData',['$http',function($http){
	this.get=function(){
		return $http.get('data/search.json');
	}
}])
.controller('searchCtrl',['$scope','$http','searchData',function($scope,$http,searchData){
	searchData.get().success(function(res){
		console.log(res.data);
		var data=res.data;
		for(var i=0;i<data.length;i++){
			var obj=data[i];
			console.log(obj);
			var icon=obj.icon;
			var itemList=obj.itemList;
			for(var j=0;j<itemList.length;j++){
				console.log(itemList[j]);
			}
		}
	})
}])