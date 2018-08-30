function buttonclick() {

    document.getElementById("demo").innerHTML="my  demo " +
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
function model(){
    var num1 = 1; // 本地变量
    num2 = 2;     // window的属性
    // 匿名函数
    (function(){
        var num = 1; // 本地变量
        num1 = 2; // 继承作用域（闭包）
        num3 = 3; // window的属性
    }())
}
/*对象--- 对象是键值对的容器*/
//用字符来定义和创建对象:
function newPerson() {
    var person = {
        firstName:"John",
        lastName:"Doe",
        age:50,
        eyeColor:"blue",
        fullName:function () {
            return this.firstName+" "+this.lastName;
        }
    };
//    获取对象属性的两种方式：
    console.log(person.age);
    console.log(person["eyeColor"]);
    /*调方法 直接调*/
    console.log("带括号---"+person.fullName());
//    如果你要访问 person 对象的 fullName 属性，它将作为一个定义函数的字符串返回：
    console.log("没有括号---"+person.fullName);


}
