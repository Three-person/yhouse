angular.module('ploydetailModule',['ui.router','me-lazyload','angularCSS','buyNowModule'])

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
    this.get = function(url){
        return $http.get(url);
    }
}])

.controller('ploydetailCtrl',['$scope','ploydetailData',function($scope,ploydetailData) {
    $scope.hostId = JSON.parse(sessionStorage.getItem('idArr'));
    var id = $scope.hostId;
    console.log(id);
    for (var i = 0; i < id.length; i++){
        ploydetailData.get('http://m.yhouse.com/api/m/event/item-v2.3/'+id[i]+'?from=h5').success(function (res) {
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
    }
}])