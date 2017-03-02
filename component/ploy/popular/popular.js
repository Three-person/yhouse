angular.module('popularModule',['ui.router'])

.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/ploy');
    $stateProvider
    .state('ploy.popular',{
        url:'/popular',
        templateUrl:'component/ploy/popular/popular.html',
        controller:'popularCtrl',
        css:'component/ploy/popular/popular.css'
    })
})

.service('popularData',['$http',function($http){
    this.get = function(){
        return $http.get('data/playdetail2-1.json');
    }
}])

.controller('popularCtrl',['$scope','popularData',function($scope,popularData) {
    popularData.get().success(function (res) {
        $scope.popularArr = res.data.contentList;
        console.log($scope.popularArr);
        console.log('dfdfdef');
    })
}])