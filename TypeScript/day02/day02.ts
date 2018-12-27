interface LabelledValue {
    label : string;
}
let prinLabel = (LabelledValue:LabelledValue) => {
    console.log(LabelledValue.label);
}
let myObj = {label:'hello ts', age:10};
prinLabel(myObj);

//可选属性

interface People {
    car ? : string;
    house ? : boolean;
    name : string;
    age : number
}

let p = (config:People) => {
    console.log(config);
}

let np = {house:false,name:'li',age:25};

p(np);

//只读属性

interface readOnly {
    readonly x: string;
}

let o : readOnly = {x:'93'};

//函数接口
interface Fuc {
    (name:string,age:number):boolean
}

let setM:Fuc;


setM = (n:string,a:number) => {
    console.log(n,a);
    return true; 
}

interface Animal{
    name : string;
    age : number;
}

interface Person extends Animal {
    address : string;
    car : boolean;
}

let p1 = <Person>{};
p1.car = false;
p1.address = 'beijing';
p1.age = 18;
p1.name = 'li';
