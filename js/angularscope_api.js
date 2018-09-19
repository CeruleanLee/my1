//as its name ,this show the use of scope
//在模块定义中 [] 参数用于定义模块的依赖关系。
// 中括号[]表示该模块没有依赖，如果有依赖的话会在中括号写上依赖的模块名字。
//这里依赖了路由文件  angular-route.js
var app = angular.module('myAngularApi', ['ngRoute']);
app.controller('ctrl1', function ($scope) {
    $scope.sometext = "bill";
    $scope.somenumber = 22;
    $scope.sometext2 = angular.$$uppercase($scope.sometext);
    $scope.isString = angular.isString($scope.sometext);
    $scope.isNumber = angular.isNumber($scope.sometext);
    $scope.isString2 = angular.isString($scope.somenumber);
    $scope.isNumber2 = angular.isNumber($scope.somenumber);
    $scope.blur = function () {
        $scope.upper = angular.$$uppercase($scope.myInput);
        //①判断无效
        // $scope.isNumber3=angular.isNumber($scope.upper);
        //②可以一试
        // $scope.isNumber3 = !isNaN($scope.myInput);
        //③也可以验证
        if ($scope.myInput == '') {
            $scope.myInput = undefined;
        }
        if (!isNaN($scope.myInput)) {
            $scope.myInput = Number($scope.myInput);
        }
        console.log($scope.myInput);
        $scope.isNumber3 = angular.isNumber($scope.myInput);
        console.log($scope.isNumber3);
    }
});
//注入演示
app.value("defaultInput", 3);
//创建 factory ServiceName
app.factory('ServiceName', function () {
    var factory = {};

    factory.multiply = function (a, b) {
        return a * b;
    }
    return factory;
});
//注入：ServiceName
app.service("TestService", function (ServiceName) {
    this.square = function (a) {
        return ServiceName.multiply(a, a);
    }
});
//这里使用provider 创建service 来定义计算乘积的方法
app.config(function ($provide) {
    $provide.provider('ServiceName2', function () {
        this.$get = function () {
            var factory = {};
            factory.multiply = function (a, b) {
                return a * b;
            }
            return factory;
        }
    });
});
app.service("TestService2", function (ServiceName2) {
    this.square = function (a) {
        return ServiceName2.multiply(a, a);
    }
});
app.constant("configParam", "constant value");
//使用时一定要注入    defaultInput   TestService
app.controller('ctrl2', function ($scope, TestService, defaultInput) {
    $scope.inputnum = defaultInput;
    $scope.result = TestService.square($scope.inputnum);

    $scope.square = function () {
        $scope.result = TestService.square($scope.inputnum);
    }
});

//注入provider
app.controller('ctrl3', function ($scope, TestService2, defaultInput) {
    $scope.inputnum = defaultInput;
    $scope.result = TestService2.square($scope.inputnum);

    $scope.square = function () {
        $scope.result = TestService2.square($scope.inputnum);
    }
});

//实现路由 ngRoute
app.config(['$routeProvider',function ($routeProvider) {
//     路由设置对象参数规则：
//     $routeProvider.when(url,{
//         template:string, //在ng-view中插入简单的html内容
//         templateUrl:string, //在ng-view中插入html模版文件
//         controller:string,function / array, //在当前模版上执行的controller函数
//         controllerAs:string, //为controller指定别名
//         redirectTo:string,function, //重定向的地址
//         resolve:object&lt;key,function&gt; //指定当前controller所依赖的其他模块
// });
    $routeProvider
        .when('/',{template:'首页'})
        .when('/page1',{template:'页面1'})
        .when('/page2',{template:'页面2'})
        .when('/page3',{template:'页面3'})
        .otherwise({redirectTo:'/'});

}]);
