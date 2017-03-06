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
//		var places=[];
		$('.place').text(JSON.parse(localStorage.getItem("place")));
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
//					console.log(hotCityArr);
					$scope.hotCityArr=hotCityArr;
					$scope.showPlace=function(i){
						console.log(hotCityArr[i]);
						var myplace=$(this)[0].obj;
						localStorage.setItem("place",JSON.stringify(myplace));
						var a=JSON.parse(localStorage.getItem("place"));
						$('.place').text(a);
						$('.city').text(a);
//						console.log(a);
					}
				}
			}
			for(var j=0;j<AGCategory.length;j++){
				if(cityId==AGCategory[j]){
					var agCityName=city[cityId].name;
					agCityArr.push(agCityName);
					$scope.agCityArr=agCityArr;
					$scope.showPlace=function(i){
						var myplace=$(this)[0].obj;
						localStorage.setItem("place",JSON.stringify(myplace));
						var b=JSON.parse(localStorage.getItem("place"));
						$('.place').text(b);
						$('.city').text(b);
					}
				}
			}
			for(var k=0;k<HnCategory.length;k++){
				if(cityId==HnCategory[k]){
					var hnCityName=city[cityId].name;
					hnCityArr.push(hnCityName);
					$scope.hnCityArr=hnCityArr;
					$scope.showPlace=function(i){
						var myplace=$(this)[0].obj;
						localStorage.setItem("place",JSON.stringify(myplace));
						var c=JSON.parse(localStorage.getItem("place"));
						$('.place').text(c);
						$('.city').text(c);
					}
				}
			}
			for(var m=0;m<otCategory.length;m++){
				if(cityId==otCategory[m]){
					var otCityName=city[cityId].name;
					otCityArr.push(otCityName);
					$scope.otCityArr=otCityArr;
					$scope.showPlace=function(i){
						var myplace=$(this)[0].obj;
						localStorage.setItem("place",JSON.stringify(myplace));
						var d=JSON.parse(localStorage.getItem("place"));
						$('.place').text(d);
						$('.city').text(d);
					}
				}
			}
			for(var n=0;n<uzCategory.length;n++){
				if(cityId==uzCategory[n]){
					var uzCityName=city[cityId].name;
					uzCityArr.push(uzCityName);
					$scope.uzCityArr=uzCityArr;
					$scope.showPlace=function(i){
						var myplace=$(this)[0].obj;
						localStorage.setItem("place",JSON.stringify(myplace));
						var e=JSON.parse(localStorage.getItem("place"));
						$('.place').text(e);
						$('.city').text(e);
					}
				}
			}
			
			
		}
	})
}])