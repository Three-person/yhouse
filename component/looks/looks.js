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
	
	.service('selectData',['$http',function($http){
		this.get=function(){
			return $http.get('data/select.json');
		}
	}])

.controller('looksCtrl',['$scope','bannerData4','mainData','swiper','selectData',function($scope,bannerData4,mainData,swiper,selectData){
	bannerData4.get().success(function(res){
		$scope.arr=res.data.reserveList[0].content;
		console.log($scope.arr);
		swiper.swiper();
	})
	mainData.get().success(function(res){
		$scope.fourArr=res.data.doc[2].itemData[0];
		$scope.detailArr=res.data.doc[3].itemData;
	})
	$('.seller').on('click',function(){
		console.log('xiaoshi');
		$('.headAndTab').css({
			'display':'none'
		})
	})
	
	//筛选
	selectData.get().success(function(res){
		$scope.urlParamValuesArr=res.data.urlParamValues;
		
		$scope.fourArr=$scope.urlParamValuesArr[0].urlParamValues[0].urlParamValues;
		$scope.fourArrchange=function(i){
			$scope.fourMoreArr=$scope.fourArr[i].urlParamValues;
		}
		$scope.changecolor=function(i){
			$('.all>ul:nth-child(1)>li').removeClass();
			$('.all>ul:nth-child(1)>li').eq(i).addClass('active');
		}
		$scope.changestyle=function(i){
			$('.all>ul:nth-child(2)>li').removeClass();
			$('.all>ul:nth-child(2)>li').eq(i).addClass('activeGold');
			
			//点击改变文本
			var texts=$('.all>ul:nth-child(2)>li').eq(i).text();
//			if(texts=='全部'){
//				texts=$('.all>ul:nth-child(1)>li').eq(i).text();
//			}
			$('.selectAndsort>li:nth-child(1)>span').text(texts);
			
		}
		
		//点击按钮翻转动画
		$scope.uptodown=function(i){
			console.log("123");
			$('.selectAndsort>li').eq(i).find('span').css({
				'background-image':'url(img-h/toup.png)'
			})
		}
		
		
		//点击类型有不同筛选
		$scope.fourunlimitedArr=$scope.urlParamValuesArr[0].urlParamValues[1].urlParamValues;
		$scope.diffty=function(i){
			$scope.fourunlimitedsArr=$scope.fourunlimitedArr[i].urlParamValues;
			console.log(i);
			console.log($scope.fourunlimitedsArr);
			
		}
		
		//智能排序
		$scope.smartsortArr=$scope.urlParamValuesArr[0].urlParamValues[2].urlParamValues;
		//点击只能排序切换样式
		$scope.smartstyle=function(i){
			$('.all2>ul>li').removeClass();
			$('.all2>ul>li').find('span').removeClass();
			$('.all2>ul>li').eq(i).addClass('smartactive');
			$('.all2>ul>li').eq(i).find('span').addClass('smartli');
		}
		
		
		
		
		
		
		
		//全部 筛选 只能排序之间的切换
		var i=0;
		var j=0;
		var k=0;
		$('.selectAndsort>li').eq(0).on('click',function(){
			++i;
			console.log(i);
			$('.all').css({
				'display':'block'
			})
			$('.all1').css({
				'display':'none'
			})
			$('.all2').css({
				'display':'none'
			})
			if(i%2==0){
				$('.all').css({
					'display':'none'
				})
				i=0;
			}
		})
		$('.selectAndsort>li').eq(1).on('click',function(){
			j++;
			$('.all').css({
				'display':'none'
			})
			$('.all1').css({
				'display':'block'
			})
			$('.all2').css({
				'display':'none'
			})
			if(j%2==0){
				$('.all1').css({
					'display':'none'
				})
				j=0;
			}
		})
		$('.selectAndsort>li').eq(2).on('click',function(){
			k++;
			$('.all').css({
				'display':'none'
			})
			$('.all1').css({
				'display':'none'
			})
			$('.all2').css({
				'display':'block'
			})
			if(k%2==0){
				$('.all2').css({
					'display':'none'
				})
				k=0;
			}
		})
		
		
		
		
		
		
		
//		(function(i){
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
//	    })(i);
	
	})
	
	
	
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