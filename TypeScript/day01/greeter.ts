//类型注解
let greenter = (p:String) =>{
    console.log('hello'+p)
}

let user = 'lideao';

greenter(user);

//接口
interface Person{
    firstName : string;
    lastName : string;
}

let p = (person:Person) => {
    console.log('f:'+person.firstName+',l:'+person.lastName);
}

let p1 = {firstName:'li',lastName:'deyao'}

p(p1)

//类
class Student{
    fullName:string;
    constructor(public firstName:string,public middleInitial:string,public lastName:string){
        this.fullName = this.firstName+''+this.middleInitial+''+this.lastName;
    }
}

interface Person{
    firstName:string;
    lastName:string;
}

let p2 = (person:Person) => {
    console.log('f1:'+person.firstName+',l1:'+person.lastName);
}

let u1 = new Student('li','M.','deyao');

p2(u1);

// 类 private
class Animal{
    private name : string;
    private num : number;
    constructor(name:string, num:number){
        this.name = name;
        this.num = num;
    }

    getName () {
        return this.name;
    }

    getNum () {
        return this.num;
    }
}

class Dog extends Animal{
    sex : string;
    constructor(name:string,num:number,sex:string){
        super(name,num);
        this.sex = sex;
    }

    getSex () {
        return this.sex;
    }
}

let d1 = new Dog('dog',10,'man');

console.log(d1.getName());
console.log(d1.getNum());
console.log(d1.getSex());


//类型
let b:boolean = false;
let a:number[] = [1,2,3];
let x:[string,number] = ['test',10];

//枚举
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

let d:Array<any> = ['striung',false];
