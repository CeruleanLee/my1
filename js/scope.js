//as its name ,this show the use of scope
//在模块定义中 [] 参数用于定义模块的依赖关系。
// 中括号[]表示该模块没有依赖，如果有依赖的话会在中括号写上依赖的模块名字。
var app = angular.module('my', []);
app.controller('mycontroller', function ($scope) {
    $scope.name = "bill";
});
app.controller('ctrl2', function ($scope) {
    $scope.name2 = "jim";
    $scope.sayHi = function () {
        $scope.greeting = "hi," + $scope.name2;
    }

});
//重复列表展示
app.controller('ctrl3', function ($scope) {
    $scope.list = ["windows7", "win 8", "win 10"];

});
app.controller('ctrl4', function ($scope, $rootScope) {
    $scope.nameList = ["Amy", "bill", "jam", "marry"];
    $rootScope.genName = "Lee";
});
app.controller('ctrl5', function ($scope, $rootScope) {
    $scope.nameList = [{name: "bill", country: "USA"}, {name: "Amy", country: "China"},
        {name: "jam", country: "Japan"},
        {name: "marry", country: "England"}, {name: "Aoliy", country: "USA"}];
    // $scope.nameList = ["Amy", "bill", "jam", "marry"];
    $scope.ageList = [{"age": 12, "id": 1},
        {"age": 5, "id": 2},
        {"age": 7, "id": 3},
        {"age": 98, "id": 4},
        {"age": 56, "id": 5},
        {"age": 44, "id": 6},];
    $rootScope.genName = "Jan";
    $scope.deletePerson = function (index) {
        //点击删除后会自动更新列表
        $scope.nameList.splice(index, 1);
    }
    $scope.addPerson = function (name) {
        //自动更新列表
        $scope.nameList.push({name: name, country: "unknown"})
    }
    // var today=new Date();
    // $scope.formatDate=$filter('date')(today, 'yyyy-MM-dd');


});
app.controller('ctrl6-filter', function ($scope, $rootScope) {
    $scope.nameList = [{name: "currency", explain: "格式化数字为货币格式"}, {name: "filter", explain: "数组中选择一个子集"},
        {name: "lowercase", explain: "字符串格式化为小写"},
        {name: "orderBy", explain: "根据某个表达式排列数组"},
        {name: "uppercase", explain: "字符串格式化为大写"},
        {name: "date", explain: "date 格式化"},
    ];
});
app.controller('ctrl7-filter2', function ($scope, $rootScope) {
    $scope.num = 1;
    $scope.price = 9;

});
app.controller('ctrl8-filter3-self', function ($scope, $rootScope) {
    $scope.text = 'filter';
});
//反转字符串
app.filter('reverse', function () {
    return function (text) {
        return text.split("").reverse().join("");
    }
});
// $location 服务是作为一个参数传递到 controller 中。
app.controller('ctrl9', function ($scope, $filter) {
    var today = new Date();
    $scope.formatDate = $filter('date')(today, "yyyy-MM-dd");
});
// 如果要使用它，需要在 controller 中定义。
app.controller('ctrl-Service10', function ($scope, $location) {
    $scope.myUrl = $location.absUrl();
});
app.controller('ctrl-Service11', function ($scope, $http) {
    $http({
        method: 'GET',
        url: 'https://myqdzc.cdcdn.cn:55002/api/form/types'
    }).then(function successCallback(response) {
        console.log("success-" + response);
        $scope.successData = response.data;
    }, function errorCallback(response) {
        console.log("error-" + response);
        $scope.errorData = response;

    });
//简写：
});
app.controller('ctrl-Service12', function ($scope, $http) {
    $http.jsonp("http://www.runoob.com/try/angularjs/data/sites.php?callback=JSON_CALLBACK'").
    success(function (response) {
        console.log("--->"+response)
        $scope.successData2 = response.sites;
    });
});
app.controller('ctrl-timeout13', function ($scope, $timeout) {
    $scope.hello = "hello~";
    $timeout(function () {
        $scope.hello = "hello,xiaoming";

    }, 2000);
});
app.controller('ctrl-interval14', function ($scope, $interval) {
    $scope.nowtime = new Date().toLocaleTimeString();
    $interval(function () {
        $scope.nowtime = new Date().toLocaleTimeString();

    }, 1000);
});
//$apply 可以实现上述interval的效果
app.controller('ctrl-apply14', function ($scope) {
    $scope.nowtime = new Date().toLocaleTimeString();
    $scope.settime = function () {
        $scope.$apply(function () {
            $scope.nowtime = new Date().toLocaleTimeString();

        });
    };
    setInterval($scope.settime, 1000);
});


/***********自定义服务**转换16进制数**********/
app.service('hexafy', function () {
    this.myFun = function (x) {
        return x.toString(16);
    }
});
app.controller("ctrl-self15", function ($scope, hexafy) {
    $scope.hex = hexafy.myFun(255);
});
//可以在控制器，指令，过滤器或其他服务中使用自定义服务
app.filter("myFormat", ['hexafy', function (hexafy) {
    return function (x) {
        return hexafy.myFun(x);
    }
}]);
//数组中使用自定义服务和过滤器
app.controller("ctrl-self16", function ($scope) {
    $scope.numList = [255, 250, 222, 147];
});

//注意： controller 有两种写法 Service10   推荐这种写法，因为第一种写法在 js 压缩后会出问题，而第二种写法可以完美应对 js 压缩，
// 原因是：js 压缩后，变量名会重命名，故第一种写法会报错。
app.controller('ctrl-Service1010', ["$scope", "$location", function ($scope, $location) {
    $scope.myUrl = $location.absUrl();
}]);
//上述写法也可以这样写：
app.controller('ctrl-Service1010', ["$scope", "$location", function (a, b) {
    a.myUrl = b.absUrl();
}]);
//监听   $watch 用法
app.controller("ctrl-self17", function ($scope) {
    $scope.xing = "";
    $scope.ming = "";
    $scope.fullName = function () {
        return $scope.xing + " " + $scope.ming;
    }
    //监听xing的变化 更新fullname
    $scope.$watch('xing', function () {
        $scope.fullName = $scope.xing + " " + $scope.ming;
    });
    //监听ming的变化 更新fullname
    $scope.$watch('ming', function () {
        $scope.fullName = $scope.xing + " " + $scope.ming;

    });

});
app.controller("ctrl18", function ($scope) {
    $scope.person = {
        name: "bill",
        sex: "male",
        age: "12",
        price: "15"
    };
    $scope.sites = {
        age: "Google",
        site02: "Runoob",
        site03: "Taobao"
    };
    $scope.carlist = {
        car1: {
            brand: "Ford",
            color: "red",
            id: 1
        },
        car2: {
            brand: "Volvo",
            color: "whit",
            id: 2
        },
        car3: {
            brand: "QQ",
            color: "Yellow",
            id: 3
        }

    };
    //初始化
    $scope.selectedCar = $scope.carlist.car1;
});
app.controller("ctrl19", function ($scope, $http) {
        // $http.jsonp("http://192.168.81.102:8080/myapp/my1/demolist.json?callback=JSON_CALLBACK'")
        //     .then(function (result) {
        //         console.log("---------->"+result);
        //         $scope.lists=result.data.records;
        //     })
        // }

        $http({
            method: 'JSONP',
            url: 'http://192.168.81.102:8080/myapp/my1/demolist.json?callback=JSON_CALLBACK',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function successCallback(response) {
            console.log("success-" + response);
            $scope.lists=response.data.records;
        }, function errorCallback(response) {
            console.log("error-" + response.data);
            // $scope.errorData = response;

        });
    }
);
app.controller("ctrl20", function ($scope) {
       $scope.count=0;
       $scope.isHide=false;
       $scope.toggle=function () {
           $scope.isHide=!$scope.isHide;
       }
       $scope.sum=function () {
           $scope.count=this.count+1;
       }
    }
);

app.directive("myDirective",function () {
    return{
        template:"<p>i am a Directive</p>"
    }
});
app.directive("runobjDirective", function () {
    return {
        template: "<p>i am a directive</p>"
    };
});
app.directive("runoobDirective", function() {
    return {
        template : "我在指令构造器中创建!"
    };
});
app.controller("ctrl21form", function ($scope) {
        $scope.name="Amy";
        $scope.age="12";
        $scope.mail="456@163.com";
        $scope.user2={name:"Bill",age:"15",mail:"123@163.com"};
        $scope.isHide=false;
        $scope.toggle=function () {
            $scope.isHide=!$scope.isHide;
        }
        $scope.sum=function () {
            $scope.count=this.count+1;
        }
        $scope.reset=function () {
            $scope.user=angular.copy($scope.user2);
        }
        $scope.reset();
    }
);