angular.module('cateModule',['ui.router'])

.service('cateBanner',['$http',function($http){
    this.get = function(){
        return $http.get('data/banner1.json');
    }
}])

.service('cateData',['$http',function($http){
    this.get = function(){
        return $http.get('data/main1.json');
    }
}])

.service('swiper2',['$timeout',function($timeout){
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

.controller('cateCtrl',['$scope','cateBanner','cateData','swiper2',function($scope,bannerData,ployData,swiper2){
    cateBanner.get().success(function(res){
        $scope.imgSwiperArr = res.data.reserveList[0].content;
        swiper2.swiper();
    })
    cateData.get().success(function(res){
        $scope.allInfoArr = res.data.doc[2].itemData;
    })
}])