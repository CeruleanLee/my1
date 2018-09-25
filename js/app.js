angular.module("todo", ['ionic'])

    .controller('todoctrl1', function ($scope,$ionicModal,$ionicSideMenuDelegate,$ionicLoading,$timeout) {
        //$ionicModal 模态窗口
        $scope.tasks = [{title: '百度'}, {title: '谷歌'},
            {title: '搜狗'}, {title: '必应'}];


        //创建并载入模型
        $ionicModal.fromTemplateUrl('new-task.html', function (modal) {
            $scope.taskModal = modal;
        }, {
            scope: $scope,
            animation: 'slide-in-up'
        });
        //提交表单
        $scope.creatTask = function (task) {
            console.log("add-date-->"+task.title);
            $scope.tasks.push({
                title: task.title
            });
            $scope.taskModal.hide();
            task.title = "";
        };
        //打开新增模型
        $scope.newTask = function () {
            $scope.taskModal.show();
        };
        //关闭新增模型
        $scope.closeNewTask = function () {
            $scope.taskModal.hide();
        };
        $scope.toggleLists = function() {
            $ionicSideMenuDelegate.toggleLeft();
        };
        //加载框
        $scope.showLoading=function () {
            $ionicLoading.show({
                template:"请稍后..."
            });
        };
        $scope.dismissLoading=function () {
            $ionicLoading.hide();
        };

        $timeout(function () {
            $scope.dismissLoading();
        },10000);

    });
