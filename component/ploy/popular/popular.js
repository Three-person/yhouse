angular.module('popularModule',['ui.router','angularCSS'])

.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/ploy');
    $stateProvider
    .state('popular',{
        url:'/popular',
        templateUrl:'component/ploy/popular/popular.html',
        controller:'popularCtrl',
        css: 'component/ploy/popular/popular.css'
    })
})

.service('popularData',['$http',function($http){
    this.get = function(){
        return $http.get('data/playdetail2-1.json');
    }
}])

.controller('popularCtrl',['$scope','popularData',function($scope,popularData) {
    popularData.get().success(function (res) {
        $scope.headArr = res.data;
        $scope.shopArr = res.data.contentList;
        $scope.des = res.data.topicDescription;
        $scope.des = $($scope.des);
        console.log($scope.des);
    })
}])