angular.module('cateModule',['ui.router','angularCSS','catedetailModule'])

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

.service('secondPage1',['$http',function($http){
    this.get = function(){
        return $http.get('data/catedetail2-1.json');
    }
}])

.service('secondPage2',['$http',function($http){
    this.get = function(){
        return $http.get('data/catedetail2-2.json');
    }
}])

.controller('cataCtrl',['$scope','cateBanner','cateData','swiper2','secondPage1','secondPage2',function($scope,cateBanner,cateData,swiper2,secondPage1,secondPage2){








    cateBanner.get().success(function(res){
        $scope.imgSwiperArr = res.data.reserveList[0].content;
        swiper2.swiper();
    })
    cateData.get().success(function(res){
        $scope.allInfoArr = res.data.doc[2].itemData;
        $scope.allShopArr = res.data.doc[3].itemData;
        //console.log($scope.allShopArr);

        //$('.seeMore').eq(0).on('click',function(){
            console.log($('.seeMore'));
            console.log('123');
            //var index=$(this).index();
            //console.log(index);
            //var ss='qwer';
            //console.log((ss+index+1));
        //})


    })


    secondPage1.get().success(function(res){
        var detailArr = [];
        var allDetailArr = res.data;
        $scope.allDetailArr = allDetailArr;
        $scope.allDetailArr = res.data;
        detailArr.push(allDetailArr);
        //for (var i=0;i<detailArr.length;i++){
        //    var obj = detailArr[i];
        //
        //    (function (obj1) {
        //        $('.seeMore').on('click', function () {
        //            if (localStorage.getItem('shop')&& localStorage.getItem('shop').length>0){
        //                var arr1 = JSON.parse(localStorage.getItem('shop'));
        //                var flag = false;
        //                for (var i = 0; i < arr1.length; i++){
        //                    if (arr1[i].name == obj1.name){
        //                        flag = true;
        //                    }
        //                }
        //                if (!flag){
        //                    arr1.push(obj1);
        //                }
        //                localStorage.setItem('shop',JSON.stringify(arr1));
        //            }else{
        //                var arr2 = [];
        //                //obj1.count = 1;
        //                arr2.push(obj1);
        //                //console.log(arr2);
        //                localStorage.setItem('shop',JSON.stringify(arr2));
        //            }
        //        })
        //    })(obj)
        //
        //}
        localStorage.setItem('catedetailArr',JSON.stringify(detailArr));
    })

    //跳转二级子页面
    //(function(obj1){
    //    var detailArr = [];
    //    $scope.cclick = function (i) {
    //        if (i == 0){
    //            secondPage1.get().success(function(res){
    //                var allDetailArr = res.data;
    //                $scope.allDetailArr = allDetailArr;
    //                $scope.allDetailArr = res.data;
    //                detailArr.push(allDetailArr);
    //                console.log(detailArr);
    //                localStorage.setItem('catedetailArr',JSON.stringify(detailArr));
    //            })
    //        }
    //        if (i == 1){
    //            secondPage2.get().success(function(res){
    //                var allDetailArr = res.data;
    //                $scope.allDetailArr = allDetailArr;
    //                $scope.allDetailArr = res.data;
    //                detailArr.push(allDetailArr);
    //                console.log(detailArr);
    //                localStorage.setItem('catedetailArr',JSON.stringify(detailArr));
    //            })
    //        }
    //    }
    //})(obj)
}])