angular.module('ploydetailModule',['ui.router','angularCSS'])

.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/ploy');
    $stateProvider
    .state('ploydetail',{
        url:'/ploydetail',
        templateUrl:'component/ploy/ploydetail/ploydetail.html',
        controller:'ploydetailCtrl',
        css: 'component/ploy/ploydetail/ploydetail.css'
    })
})

.service('ploydetailData',['$http',function($http){
    this.get = function(){
        return $http.get('data/ploydetail.json');
    }
}])

.controller('ploydetailCtrl',['$scope','ploydetailData',function($scope,ploydetailData) {
    ploydetailData.get().success(function (res) {
        $scope.headArr = res.data;
        $scope.reason = res.data.highs;
        $scope.detail = res.data.content;
        $scope.detail = $($scope.detail);
        $('.more').on('click',function(){
            $('.detail div').css('overflow','auto');
        })
        $scope.attention = res.data.productLabels;
        $scope.tips = res.data.productAdvice;
        console.log($scope.tips);
    })
}])