angular.module('ployModule',['ui.router','angularCSS','popularModule','playgameModule','ploydetailModule'])

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
        $scope.shop = function (i) {
            var allId = [];
            console.log(i);
            var obj1 = $scope.allInfoArr;
            var obj2 = obj1[i].linkUrl;
            var str = obj2.substring(15);
            allId.push(str)
            console.log(allId);
            sessionStorage.setItem('idArr',JSON.stringify(allId));
        }
    })
}])