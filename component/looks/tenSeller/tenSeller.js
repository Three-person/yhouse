angular.module('tenSellerModule',['ui.router','storeModule'])
.config(function($stateProvider, $urlRouterProvider){
//	$urlRouterProvider.otherwise('/cate');
	
	$stateProvider
		.state('tenSeller',{
			url:'/tenSeller',
			templateUrl:'component/looks/tenSeller/tenSeller.html',
			controller:'tenSellerCtrl',
			css:'component/looks/tenSeller/tenSeller.css'
		})
})
.service('tenSellerData',['$http',function($http){
	this.get=function(){
		return $http.get('data/main4.json');
	}
}])
.controller('tenSellerCtrl',['$scope','tenSellerData',function($scope,tenSellerData){
	tenSellerData.get().success(function(res){
		$scope.arr=res.data.doc[2];
		$scope.itemArr=res.data.doc[3].itemData;
		console.log($scope.itemArr);
		$scope.str=$scope.arr.itemData[0].description;
		$scope.str=$($scope.str);
		var str1=[];
		for(var i=0;i<$scope.str.length;i++){
			if(i%2==0){
				str1.push($scope.str[i]);
			}
		}
		$scope.str1=str1;
		
		
	})
}])