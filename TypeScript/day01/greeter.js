//类型注解
// let greenter = (p:String) =>{
//     console.log('hello'+p)
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// let user = 'lideao';
// greenter(user);
//接口
// interface Person{
//     firstName : string;
//     lastName : string;
// }
// let p = (person:Person) => {
//     console.log('f:'+person.firstName+',l:'+person.lastName);
// }
// let p1 = {firstName:'li',lastName:'deyao'}
// p(p1)
//类
// class Student{
//     fullName:string;
//     constructor(public firstName:string,public middleInitial:string,public lastName:string){
//         this.fullName = this.firstName+''+this.middleInitial+''+this.lastName;
//     }
// }
// interface Person{
//     firstName:string;
//     lastName:string;
// }
// let p2 = (person:Person) => {
//     console.log('f1:'+person.firstName+',l1:'+person.lastName);
// }
// let u1 = new Student('li','M.','deyao');
// p2(u1);
// 类 private
var Animal = /** @class */ (function () {
    function Animal(name, num) {
        this.name = name;
        this.num = num;
    }
    Animal.prototype.getName = function () {
        return this.name;
    };
    Animal.prototype.getNum = function () {
        return this.num;
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, num, sex) {
        var _this = _super.call(this, name, num) || this;
        _this.sex = sex;
        return _this;
    }
    Dog.prototype.getSex = function () {
        return this.sex;
    };
    return Dog;
}(Animal));
var d1 = new Dog('dog', 10, 'man');
console.log(d1.getName());
console.log(d1.getNum());
console.log(d1.getSex());
//类型
// let b:boolean = false;
// let a:number[] = [1,2,3];
// let x:[string,number] = ['test',10];
// //枚举
// enum Color {Red, Green, Blue}
// let c: Color = Color.Green;
// let d:Array<any> = ['striung',false];
