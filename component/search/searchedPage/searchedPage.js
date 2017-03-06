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
	this.get=function(){
		return $http.get('data/searchedPage.json');
	}
}])
.controller('searchedPageCtrl',['$scope','$http','searchedPageData',function($scope,$http,searchedPageData){
	searchedPageData.get().success(function(res){
		console.log(res.data);
		var searchData=res.data.searchData;
		$scope.searchData=searchData;
	})
}])