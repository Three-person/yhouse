angular.module('playgameModule',['ui.router','angularCSS'])

.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/ploy');
    $stateProvider
    .state('playgame',{
        url:'/playgame',
        templateUrl:'component/ploy/playgame/playgame.html',
        controller:'playgameCtrl',
        css: 'component/ploy/playgame/playgame.css'
    })
})

.service('playgameData',['$http',function($http){
    this.get = function(){
        return $http.get('data/playdetail2-2.json');
    }
}])

.controller('playgameCtrl',['$scope','playgameData',function($scope,playgameData) {
    playgameData.get().success(function (res) {
        $scope.headArr = res.data;
        $scope.shopArr = res.data.contentList;
        $scope.des = res.data.topicDescription;
        $scope.des = $($scope.des);
        console.log($scope.des);
    })
}])