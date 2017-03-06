angular.module('searchModule',['ui.router','searchedPageModule'])
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
		var keyArr=[];
		var data=res.data;
		$scope.data=data;
		for(var i=0;i<data.length;i++){
			var itemList=data[i].itemList;
			for(var j=0;j<itemList.length;j++){
				var itemListName=itemList[j];
				keyArr.push(itemListName);
				localStorage.setItem('keys',JSON.stringify(keyArr));
			}
		}
	})
}])