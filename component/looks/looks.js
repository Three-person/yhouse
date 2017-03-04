angular.module('looksModule',['ui.router','tenSellerModule'])
.service('bannerData4',['$http',function($http){
	this.get=function(){
		return $http.get('data/banner4.json');
	}
	
}])
.service('mainData',['$http',function($http){
	this.get=function(){
		return $http.get('data/main4.json');
	}
}])
	.service('swiper',['$timeout',function($timeout){
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
	

.controller('looksCtrl',['$scope','bannerData4','mainData','swiper',function($scope,bannerData4,mainData,swiper){
	bannerData4.get().success(function(res){
		$scope.arr=res.data.reserveList[0].content;
		console.log($scope.arr);
		swiper.swiper();
	})
	mainData.get().success(function(res){
		$scope.fourArr1=res.data.doc[2].itemData[0];
		$scope.detailArr=res.data.doc[3].itemData;
	})
//	$('.seller').on('click',function(){
//		console.log('xiaoshi');
//		$('.headAndTab').css({
//			'display':'none'
//		})
//	})
	
	
	
}])

	

//$.getJSON("data/select.json",function(res){
//			var urlParamValuesArr=res.data.urlParamValues;
//			for(var i=0;i<urlParamValuesArr.length;i++){
//				var liEle=$("<li><a>"+urlParamValuesArr[i].name+"</a></li>");
//				$('.filterHeader>ul').append(liEle);
//			}
//			
//			var fourArr=urlParamValuesArr[0].urlParamValues[0].urlParamValues;
//			for(var i=0;i<fourArr.length;i++){
//				var liEle=$("<li>"+fourArr[i].name+"</li>");
//				liEle.css({
//					'background-image':'url('+fourArr[i].icon+')'
//				})
//				$('.all>ul:nth-child(1)').append(liEle);
//				
//				//点击出现右边
//				(function(i){
//					liEle.on('click',function(){
//						$('.all>ul:nth-child(1)>li').removeClass();
//						$('.all>ul:nth-child(1)>li').eq(i).addClass('active');
//						$('.all>ul:nth-child(2)').empty();
//						var fourMoreArr=fourArr[i].urlParamValues;
//						for(var j=0;j<fourMoreArr.length;j++){
//							var liEle2=$("<li>"+fourMoreArr[j].name+"</li>");
//							$('.all>ul:nth-child(2)').append(liEle2);
//						}
//						
//					})
//				})(i);
//				
//				
//			}
//			
//			
//			
//		})