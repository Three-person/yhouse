angular.module('cateModule',['ui.router','angularCSS','me-lazyload','catedetailModule','shopDetailModule'])

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
//第一个json
.service('secondPage1',['$http',function($http){
    this.get = function(){
        return $http.get('data/catedetail2-1.json');
    }
}])
//第二个json
.service('secondPage2',['$http',function($http){
    this.get = function(){
        return $http.get('data/catedetail2-2.json');
    }
}])
//第三个json
.service('secondPage3',['$http',function($http){
    this.get = function(){
        return $http.get('data/catedetail2-3.json');
    }
}])

.controller('cataCtrl',['$scope','cateBanner','cateData','swiper2','secondPage1','secondPage2','secondPage3',function($scope,cateBanner,cateData,swiper2,secondPage1,secondPage2,secondPage3){

    cateBanner.get().success(function(res){
        $scope.imgSwiperArr = res.data.reserveList[0].content;
        swiper2.swiper();

    })
    cateData.get().success(function(res){
        $scope.allInfoArr = res.data.doc[2].itemData;
        $scope.allShopArr = res.data.doc[3].itemData;

        var idArr = [];
        $scope.detail = function(i){
            console.log(i);
        var obj1 = $scope.allInfoArr;
        for (var i = 0; i < obj1.length; i++){
            var obj2 = obj1[i].list;
            //console.log(obj2);
            for (var j = 0; j < obj2.length; j++){
                var obj3 = obj2[j].link;
                //console.log(obj3);
                var str = obj3.substring(14);
                //console.log(str);
                idArr.push(str);
            }
        }
        //console.log(idArr);
        localStorage.setItem('allId',JSON.stringify(idArr));
        }
    })

	
    //跳转二级子页面---闭包
//  secondPage1.get().success(function(res){
//      var detailData = [];
//      var allDetailArr = res.data;
//      $scope.allDetailArr = allDetailArr;
//      $scope.allDetailArr = res.data;
//      detailData.push(allDetailArr);
//      for (var i=0;i<detailData.length;i++){
//          var obj = detailData[i];
//
//          (function (obj1) {
//              $('.seeMore').on('click', function () {
//                  if (localStorage.getItem('shop')&& localStorage.getItem('shop').length>0){
//                      var arr1 = JSON.parse(localStorage.getItem('shop'));
//                      var flag = false;
//                      for (var i = 0; i < arr1.length; i++){
//                          if (arr1[i].name == obj1.name){
//                              flag = true;
//                          }
//                      }
//                      if (!flag){
//                          arr1.push(obj1);
//                      }
//                      localStorage.setItem('shop',JSON.stringify(arr1));
//                  }else{
//                      var arr2 = [];
//                      //obj1.count = 1;
//                      arr2.push(obj1);
//                      //console.log(arr2);
//                      localStorage.setItem('shop',JSON.stringify(arr2));
//                  }
//              })
//          })(obj)
//
//      }
//      console.log(detailData);
//      localStorage.setItem('shop',JSON.stringify(detailData));
//  })

    //跳转二级子页面
//    (function(obj1){
          var detailData = {};
          
          $scope.cclick = function (i) {
              	console.log(i);
              if (i == 0){
                  secondPage1.get().success(function(res){
                      var allDetailArr = res.data;
					  detailData=allDetailArr;
                      console.log(detailData);
                      localStorage.setItem('catedetailArr2',JSON.stringify(detailData));
                  })
              }
              if (i == 1){
                  secondPage2.get().success(function(res){
                      var allDetailArr = res.data;
					  detailData=allDetailArr;
                      console.log(detailData);
                      localStorage.setItem('catedetailArr2',JSON.stringify(detailData));
                  })
              }
              if (i == 2){
                  secondPage3.get().success(function(res){
                      var allDetailArr = res.data;
					  detailData=allDetailArr;
                      console.log(detailData);
                      localStorage.setItem('catedetailArr2',JSON.stringify(detailData));
                  })
              }
          }
//    })(obj)


}])