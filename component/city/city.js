angular.module('cityChangeModule',['ui.router'])
.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
	.state('city',{
		url:'/city',
		templateUrl:'component/city/city.html',
		controller:'cityCtrl',
		css:'component/city/city.css'
	})
})
.service('cityData',['$http',function($http){
	this.get=function(){
		return $http.get('data/city.json');
	}
}])
.controller('cityCtrl',['$scope','$http','cityData',function($scope,$http,cityData){
	cityData.get().success(function(res){
		var cityGroup=res.cityGroup;
		var city=res.city;
		var remen=cityGroup["热门"];
		var AGCategory=cityGroup["A~G"];
		var HnCategory=cityGroup["H~N"];
		var otCategory=cityGroup["O~T"];
		var uzCategory=cityGroup["U~Z"];
		
		var hotCityArr=[];
		var agCityArr=[];
		var hnCityArr=[];
		var otCityArr=[];
		var uzCityArr=[];
		for(var temp in city){
			var cityId=city[temp].id;
			for(var i=0;i<remen.length;i++){
				if(cityId==remen[i]){
					var hotCityName=city[cityId].name;
					hotCityArr.push(hotCityName);
					$scope.hotCityArr=hotCityArr;
				}
			}
			for(var j=0;j<AGCategory.length;j++){
				if(cityId==AGCategory[j]){
					var agCityName=city[cityId].name;
					agCityArr.push(agCityName);
					$scope.agCityArr=agCityArr;
				}
			}
			for(var k=0;k<HnCategory.length;k++){
				if(cityId==HnCategory[k]){
					var hnCityName=city[cityId].name;
					hnCityArr.push(hnCityName);
					$scope.hnCityArr=hnCityArr;
				}
			}
			for(var m=0;m<otCategory.length;m++){
				if(cityId==otCategory[m]){
					var otCityName=city[cityId].name;
					otCityArr.push(otCityName);
					$scope.otCityArr=otCityArr;
				}
			}
			for(var n=0;n<uzCategory.length;n++){
				if(cityId==uzCategory[n]){
					var uzCityName=city[cityId].name;
					uzCityArr.push(uzCityName);
					$scope.uzCityArr=uzCityArr;
				}
			}
			
		}
//		$scope.remen=remen;
//		console.log(cityGroup["热门"]);
	})
angular.module('ployModule',['ui.router','angularCSS'])

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