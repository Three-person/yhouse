angular.module('shopDetailModule',['ui.router','angularCSS'])

.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/cate.shopDetail');
    $stateProvider
        .state('shopDetail',{
            url:'/shopDetail',
            templateUrl:'component/cate/shopDetail/shopDetail.html',
            controller:'shopDetailCtrl',
            css:'component/cate/shopDetail/shopDetail.css'
        })
})

.service('shopDetailData',['$http',function($http){
    this.get = function(url){
        return $http.get(url);
    }
}])

.controller('shopDetailCtrl',['$scope',function($scope,shopDetailData){
    shopDetailData.get('http://m.yhouse.com/api/m/host/item-v3.8/148750?from=').success(function(data){
        console.log(data);
    });
}])