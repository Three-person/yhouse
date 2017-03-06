angular.module('selectModule',['ui.router','angularCSS'])

.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/cate');
	$stateProvider
	.state('select',{
		url:'/select',
		templateUrl:'component/select/select.html',
		controller:'selectCtrl',
		css:'component/select/select.css'
	})
})

.service('selectData',['$http',function($http){
		this.get=function(){
			return $http.get('data/select.json');
		}
	}])

.service('spaSelectData',['$http',function($http){
		this.get=function(){
			return $http.get('data/spaSelect.json');
		}
	}])




.controller('selectCtrl',['$scope','selectData','spaSelectData',function($scope,selectData,spaSelectData){
	
	
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
		$scope.changestyle=function(i,s){
			$('.all>ul:nth-child(2)>li').removeClass();
			$('.all>ul:nth-child(2)>li').eq(i).addClass('activeGold');
			
			//点击改变文本
			var texts=$('.all>ul:nth-child(2)>li').eq(i).text();
//			if(texts=='全部'){
//				texts=$('.all>ul:nth-child(1)>li').eq(i).text();
//			}
			$('.selectAndsort>li:nth-child(1)>span').text(texts);
			
			
			$scope.filterStyle=s;
		}
		
		//点击按钮翻转动画
//		$scope.uptodown=function(i){
////			console.log("123");
//			$('.selectAndsort>li').eq(i).find('span').css({
//				'background-image':'url(img-h/toup.png)'
//			})
//		}
		
		
		//点击类型有不同筛选
		$scope.fourunlimitedArr=$scope.urlParamValuesArr[0].urlParamValues[1].urlParamValues;
		$scope.diffty=function(i,d){
			$scope.fourunlimitedsArr=$scope.fourunlimitedArr[i].urlParamValues;
			console.log(i);
			console.log($scope.fourunlimitedsArr);
			
			$scope.filterStyle=d;
			
		}
		
		//智能排序
		$scope.smartsortArr=$scope.urlParamValuesArr[0].urlParamValues[2].urlParamValues;
		//点击只能排序切换样式
//		$scope.smartstyle=function(){
			$('.all2>ul>li').click(function(){
				var index=$(this).index();
				console.log(index);
				$('.all2>ul>li').removeClass();
				$('.all2>ul>li').find('span').removeClass();
				$('.all2>ul>li').eq(index).addClass('smartactive');
				$('.all2>ul>li').eq(index).find('span').addClass('smartli');
			})
//		}
		//点击商户商品
		$scope.twoss=function(i){
			$('.filterHeader>ul>li').find('a').removeClass();
			$('.filterHeader>ul>li').eq(i).find('a').addClass('twosssactive');
		}
		
		//点击all1的风格
		$scope.sxstyle=function(i,k,ss){
			$('.unlimited>div').eq(k).find('ul').find('li').removeClass();
			$('.unlimited>div').eq(k).find('ul').find('li').eq(i).addClass('sxactive');
				
			$scope.filterStyle=ss;

		}
		
		//重置按钮
		$scope.reset=function(){
			$('.all1').css({
				'display':'none'
			})
		}
		//确定按钮
		$scope.ok=function(){
			$('.all1').css({
				'display':'none'
			})
		}
		
		
		//全部 筛选 只能排序之间的切换
		var i=0;
		var j=0;
		var k=0;
		$('.selectAndsort>li').eq(0).on('click',function(){
			++i;
			$('.all').css({
				'display':'block'
			})
			$('.all1').css({
				'display':'none'
			})
			$('.all2').css({
				'display':'none'
			})
			$('.selectAndsort>li').eq(0).find('span').css({
				'background-image':'url(img-h/toup.png)'
			})
			if(i%2==0){
				$('.all').css({
					'display':'none'
				})
				$('.selectAndsort>li').eq(0).find('span').css({
					'background-image':'url(img-h/todown.png)'
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
			$('.selectAndsort>li').eq(1).find('span').css({
				'background-image':'url(img-h/toup.png)'
			})
			if(j%2==0){
				$('.all1').css({
					'display':'none'
				})
				$('.selectAndsort>li').eq(1).find('span').css({
					'background-image':'url(img-h/todown.png)'
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
			$('.selectAndsort>li').eq(2).find('span').css({
				'background-image':'url(img-h/toup.png)'
			})
			if(k%2==0){
				$('.all2').css({
					'display':'none'
				})
				$('.selectAndsort>li').eq(2).find('span').css({
					'background-image':'url(img-h/todown.png)'
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
	
	spaSelectData.get().success(function(res){
		$scope.selectArr=res.data.searchData.doc;
		console.log($scope.selectArr);
	})
	
	
	//给商户添加class
		function addClass(){
			console.log($('.filterHeader>ul>li').eq(1));
			$('.filterHeader>ul>li').eq(1).find('a').addClass('twosssactive');
			console.log('进来了');
		}
		addClass();
	
}])