angular.module('searchedPageModule',['ui.router'])
.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
	.state('searchedPage',{
		url:'/searchedPage',
		templateUrl:'component/search/searchedPage/searchedPage.html',
		controller:'searchedPageCtrl',
		css:'component/search/searchedPage/searchedPage.css'
	})
})
.service('searchedPageData',['$http',function($http){
	this.get=function(url){
		return $http.get(url);
	}
}])
.controller('searchedPageCtrl',['$scope','$http','searchedPageData',function($scope,$http,searchedPageData){
	var allKeys=JSON.parse(localStorage.getItem("keys"));
	for(var i=0;i<allKeys.length;i++){
		var keya=allKeys[i];
		console.log(keya);
		searchedPageData.get('http://m.yhouse.com/api/m/fullSearch-v3.3?cityId=37&key='+keya+'&type=2').success(function(res){
			var searchData=res.data.searchData;
			$scope.searchData=searchData;
		})
	}
}])