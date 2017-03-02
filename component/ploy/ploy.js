angular.module('ployModule',['ui.router','popularModule'])

.service('bannerData',['$http',function($http){
    this.get = function(){
        return $http.get('data/banner2.json');
    }
}])

.service('ployData',['$http',function($http){
    this.get = function(){
        return $http.get('data/main2.json');
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

.controller('ployCtrl',['$scope','bannerData','ployData','swiper1',function($scope,bannerData,ployData,swiper1){
    bannerData.get().success(function(res){
        $scope.imgSwiperArr = res.data.reserveList[0].content;
        swiper1.swiper();
        $scope.imgPopArr = res.data.bundle[0].content;
    })
    ployData.get().success(function(res){
        $scope.allInfoArr = res.data.doc[2].itemData;
    })
}])