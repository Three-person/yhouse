angular.module('buyNowModule',['ui.router','angularCSS','me-lazyload'])

.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/ploydetail.butNow');
    $stateProvider
    .state('butNow',{
        url:'/butNow',
        templateUrl:'component/ploy/ploydetail/buyNow/butNow.html',
        controller:'buyNowCtrl',
        css:'component/ploy/ploydetail/buyNow/buyNow.css'
    })
})

.controller('buyNowCtrl',['$scope',function($scope){
    $scope.proInfo = JSON.parse(sessionStorage.getItem('buyNow'));
    //console.log($scope.proInfo);
    $scope.proImg = $scope.proInfo[0];
    $scope.proName = $scope.proInfo[1];
    $scope.proPrice = $scope.proInfo[2];
    var price = $scope.proPrice;

    var count = $('.num').val();
    $('.cut').on('click',function(){
        count--;
        if (count == 0){
            count = 1;
        }
        $('.num').val(count);
        var total = Number(count)*price;
        $('.buyNow>span').text(total+'元');
    }),
    $('.add').on('click',function(){
        count++;
        $('.num').val(count);
        var total = Number(count)*price;
        $('.buyNow>span').text(total+'元');
    })

}])