function buttonclick() {

    document.getElementById("demo").innerHTML = "my  demo " +
        "\ haha";
}

/*let
* let允许你声明一个作用域被限制在块级中的变量、语句或者表达式。在Function中局部变量推荐使用let变量，避免变量名冲突。
作用域规则
let 声明的变量只在其声明的块或子块中可用，这一点，与var相似。二者之间最主要的区别在于var声明的变量的作用域是整个封闭函数
* */
function varTest() {
    var x = 1;
    if (true) {
        var x = 2;       // 同样的变量!
        console.log(x);  // 2
    }
    console.log(x);  // 2
}

function letTest() {
    let x = 1;
    if (true) {
        let x = 2;       // 不同的变量
        console.log(x);  // 2
    }
    console.log(x);  // 1
}

/*var 和不var来声明变量的区别*/
// num1为全局变量，num2为window的一个属性
var num1 = 1;
num2 = 2;
// delete num1;  无法删除
// delete num2;  删除
function model() {
    var num1 = 1; // 本地变量
    num2 = 2;     // window的属性
    // 匿名函数
    (function () {
        var num = 1; // 本地变量
        num1 = 2; // 继承作用域（闭包）
        num3 = 3; // window的属性
    }())
}

/*对象--- 对象是键值对的容器*/

//用字符来定义和创建对象:
function newPerson() {
    var person = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue",
        fullName: function () {
            return this.firstName + " " + this.lastName;
        }
    };
//    获取对象属性的两种方式：
    console.log(person.age);
    console.log(person["eyeColor"]);
    /*调方法 直接调*/
    console.log("带括号---" + person.fullName());
//    如果你要访问 person 对象的 fullName 属性，它将作为一个定义函数的字符串返回：
    console.log("没有括号---" + person.fullName);


}

/*带参的函数 逗号分隔  */
function myFunction(var1, var2) {
    //todo
}

/*js实现复选框的全选 反选实例*/

/*将选中设置为 checked 或 true， 取消选中可设置为空或 false，实现反选使用 checked 属性会出现问题*/
function checkboxed(objname, type) {
    var objnamelist = document.getElementsByName(objname);
    if (objnamelist != num1) {
        for (var i = 0; i < objnamelist.length; i++) {
            if (objnamelist[i].checked == true) {
                if (type != 'checkall') {//非全选
                    objnamelist[i].checked = false;
                }

            } else {
                if (type != 'uncheckall') {//非取消全选
                    objnamelist[i].checked = true;
                }
            }
        }
    }
}
var checkall=fale;
function checkallclick(objname) {
checkall=!checkall;
let elementsByName = document.getElementsByName(objname);
    for (let i = 0; i < elementsByName.length; i++) {
        elementsByName[i].checked=checkall;
    }
}
//JavaScript 初始化不会提升
// JavaScript 只有声明的变量会提升，初始化的不会
//严格模式通过在脚本或函数的头部添加 "use strict"; 表达式来声明
//不允许使用未声明的变量：
//不允许删除变量或对象。
//不允许删除函数。不允许变量重名:不允许使用八进制:不允许使用转义字符: 不允许对只读属性赋值:
function func() {
    "use strict";
    var obj = {};
    Object.defineProperty(obj, "x", {value:0, writable:false});

    obj.x = 3.14;            // 报错
}
//不允许对一个使用getter方法读取的属性进行赋值
//不允许删除一个不允许删除的属性：
// 变量名不能使用 "eval" 字符串:
//     变量名不能使用 "arguments" 字符串:
//     不允许使用以下这种语句:
function fun2() {

// "use strict";
// with (Math){x = cos(2)}; // 报错
}

//浮点整数的运算 直接恒等号===是有问题的   可以使用整数除法来解决


// href="#"与href="javascript:void(0)"的区别
// # 包含了一个位置信息，默认的锚是#top 也就是网页的上端。
//
// 而javascript:void(0), 仅仅表示一个死链接。
//
// 在页面很长的时候会使用 # 来定位页面的具体位置，格式为：# + id。
//
// 如果你要定义一个死链接请使用 javascript:void(0) 。
// void()仅仅是代表不返回任何值，但是括号内的表达式还是要运行，如
// void(alert("Wornning!"))


// 全局变量为大写 (UPPERCASE )
// 常量 (如 PI) 为大写 (UPPERCASE )