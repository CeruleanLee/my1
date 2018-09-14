//as its name ,this show the use of scope
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