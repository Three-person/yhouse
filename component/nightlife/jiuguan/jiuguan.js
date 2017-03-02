angular.module('jiuguanXQModule',['ui.router'])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('nightlife.jiuguan',{
		url:'/jiuguan',
		templateUrl:'component/nightlife/jiuguan/jiuguan.html',
		controller:'jiuguanXQCtrl',
		css:'component/nightlife/jiuguan/jiuguan.css'
	})
})
.service('jiuguanXQData',['$http',function($http){
	this.get=function(){
		return $http.get('data/BarErJi.json');
	}
}])
.controller('jiuguanXQCtrl',['$scope','$http','jiuguanXQData',function($scope,$http,jiuguanXQData){
	jiuguanXQData.get().success(function(res){
		
	})
}])