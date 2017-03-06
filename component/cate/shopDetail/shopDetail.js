angular.module('shopDetailModule',['ui.router','me-lazyload','angularCSS'])

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

.service('swiper1',['$timeout',function($timeout){
    this.swiper = function(){
        $timeout(function(){
            Swiper('.swiper-container',{
                loop: true,
                autoplay: 2500,
                pagination: '.swiper-pagination'
            })
        },50);
    }
}])

.controller('shopDetailCtrl',['$scope','swiper1','shopDetailData',function($scope,swiper1,shopDetailData){
    $scope.hostId = JSON.parse(sessionStorage.getItem('allId'));
    var id = $scope.hostId;
    //console.log(id);
    for (var i = 0; i < id.length; i++){
        shopDetailData.get('http://m.yhouse.com/api/m/host/item-v3.8/'+id[i]+'?from=h5').success(function(res){
            $scope.allData = res.data;
            console.log($scope.allData);
            $scope.headPics = res.data.headPics;
            swiper1.swiper();
            $scope.highs = res.data.highs;
            $scope.hostShareTag = res.data.hostShareTag;
            $scope.hotContent = res.data.hotContent;
            $scope.productLabels = res.data.productLabels;
            $scope.durationList = res.data.durationList;
        });
    }
}])
