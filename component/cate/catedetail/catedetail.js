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
    //localStorage.clear();
    var allCateDetail = JSON.parse(localStorage.getItem('shop'));
    $scope.allPageDetail = allCateDetail[0];
    //console.log($scope.allPageDetail);
    $scope.otherDetail = allCateDetail[0].contentList;
    //console.log($scope.otherDetail);
    $scope.des = allCateDetail[0].topicDescription;
    $scope.des = $($scope.des);
    //console.log($scope.des);
}])
