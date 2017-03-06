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

    //验证
    function isName(){
        var name = $('#userName').val();
        if (name.length!=0){
            reg = /^[\u0391-\uFFE5]|[a-zA-Z]$/
            if (!reg.test(name)){
                $('.alert').css({display:'block'});
                $('.alert>span').text("姓名输入格式不正确");
            }
        }
    }
    function isTel(){
        var tel = $('#userTel').val();
        if (tel.length!=0){
            reg = /^1[3|5|7|8][0-9]{9}$/
            if (!reg.test(tel)){
                $('.alert').css({display:'block'});
                $('.alert>span').text("手机号输入格式不正确");
            }
        }
    }
    function isCode(){
        var code = $('#userCode').val();
        if (code.length!=0){
            reg = /^[a-zA-Z0-9]{4}$/
            if (!reg.test(code)){
                $('.alert').css({display:'block'});
                $('.alert>span').text("验证码无效");
            }
        }
    }

    $('.buyNow').on('click',function(){
        isName();
        isTel();
        isCode();
        setTimeout(function(){
            $('.alert').css({display:'none'});
        },1000)
    })

}])