angular.module('cateModule',['ui.router','angularCSS','catedetailModule'])


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


    secondPage1.get().success(function(res){
        var detailArr = [];
        var allDetailArr = res.data;
        $scope.allDetailArr = allDetailArr;
        $scope.allDetailArr = res.data;
        detailArr.push(allDetailArr);
        for (var i=0;i<detailArr.length;i++){
            var obj = detailArr[i];

            (function (obj1) {
                $('.seeMore').on('click', function () {
                    if (localStorage.getItem('shop')&& localStorage.getItem('shop').length>0){
                        var arr1 = JSON.parse(localStorage.getItem('shop'));
                        var flag = false;
                        for (var i = 0; i < arr1.length; i++){
                            if (arr1[i].name == obj1.name){
                                flag = true;
                            }
                        }
                        if (!flag){
                            arr1.push(obj1);
                        }
                        localStorage.setItem('shop',JSON.stringify(arr1));
                    }else{
                        var arr2 = [];
                        //obj1.count = 1;
                        arr2.push(obj1);
                        //console.log(arr2);
                        localStorage.setItem('shop',JSON.stringify(arr2));
                    }
                })
            })(obj)

        }
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