angular.module('ploydetailModule',['ui.router','me-lazyload','angularCSS','buyNowModule'])

.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/ploy');
    $stateProvider
    .state('ploydetail',{
        url:'/ploydetail',
        templateUrl:'component/ploy/ploydetail/ploydetail.html',
        controller:'ploydetailCtrl',
        css: 'component/ploy/ploydetail/ploydetail.css'
    })
})

.service('ploydetailData',['$http',function($http){
    this.get = function(url){
        return $http.get(url);
    }
}])

.controller('ploydetailCtrl',['$scope','ploydetailData',function($scope,ploydetailData) {
    $scope.hostId = JSON.parse(sessionStorage.getItem('idArr'));
    var id = $scope.hostId;
    for (var i = 0; i < id.length; i++){
        ploydetailData.get('http://m.yhouse.com/api/m/event/item-v2.3/'+id[i]+'?from=h5').success(function (res) {
            $scope.headArr = res.data;
            $scope.reason = res.data.highs;
            $scope.detail = res.data.content;
            $scope.detail = $($scope.detail);
            $('.more').on('click',function(){
                $('.detail div').css('overflow','auto');
            })
            $scope.attention = res.data.productLabels;
            $scope.tips = res.data.productAdvice;

            //存立即购买页面的数据
            $scope.proImg = res.data.mPicUrl;
            $scope.proName = res.data.title;
            $scope.proPrice = res.data.neededCredits;
            sessionStorage.setItem('buyNow',JSON.stringify([$scope.proImg,$scope.proName,$scope.proPrice]));

            //地图
            var point = $scope.headArr;
            var map = new AMap.Map('container',{
                zoom: 14,
                center: [point.longitude,point.latitude]
            })
            //点标记
            var marker = new AMap.Marker({
                map: map,
                position: [point.longitude,point.latitude]
            });
            //添加地图插件
            AMap.plugin(['AMap.ToolBar','AMap.Scale','AMap.OverView'],
            function(){
                map.addControl(new AMap.ToolBar());
                map.addControl(new AMap.Scale());
                map.addControl(new AMap.OverView({isOpen:true}));
            });
        })
    }
    //控制地图显示
    $('#map').hide();
    $('.map').on('click',function(){
        $('#map').show();
    })
    $('.closeMap').on('click',function(){
        $('#map').hide();
    })

}])