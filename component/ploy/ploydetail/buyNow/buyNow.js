angular.module('buyNowModule',['ui.router','angularCSS'])

.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/ploydetail.buyNow');
    $stateProvider
    .state('buyNow',{
        url:'/buyNow',
        templateUrl:'component/ploy/ploydetail/buyNwo/buyNow.html',
        controller:'buyNowCtrl',
        css:'component/ploy/ploydetail/buyNwo/buyNow.css'
    })
})

.service(buyNowData,['$http',function($http){
    this.get = function(url){
        return $http.get(url)
    }
}])

.controller('buyNowCtrl',['$scope','buyNowData',function($scope,buyNowData){
    $scope.hostId = JSON.parse(sessionStorage.getItem('idArr'));
    var id = $scope.hostId;
    console.log(id);
    for (var i = 0; i < id.length; i++){
        buyNowData.get('http://m.yhouse.com/api/m/event/item-v2.3/'+id[i]+'?from=h5').success(function(res){
            console.log(res.data);
        })
    }
}])