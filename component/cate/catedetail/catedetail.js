angular.module('catedetailModule',['ui.router','angularCSS'])

.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/cate.catedetail');
    $stateProvider
    .state('catedetail',{
        url:'/catedetail',
        templateUrl:'component/cate/catedetail/catedetail.html',
        controller:'catedetailCtrl',
        css:'component/cate/catedetail/catedetail.css'
    })
})

.controller('catedetailCtrl',['$scope',function($scope){
    $scope.allCateDetail= JSON.parse(localStorage.getItem('catedetailArr2'));
	var topic=$($scope.allCateDetail.topicDescription);
	$scope.topic=topic;
	$scope.contentListArr=$scope.allCateDetail.contentList;
	
//	console.log($('.title>a').eq(0));
//	function del(){
//		localStorage.clear();
//	}
//	console.log($scope.allCateDetail);
	
}])
