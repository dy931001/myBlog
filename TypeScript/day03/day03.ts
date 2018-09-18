//类
class Greeter{
    greeting : string;
    constructor(message : string){
        this.greeting = message;
    }
    getGreet ()　{
        return console.log('hello' + this.greeting);
    }
}

let g = new Greeter('li');

g.getGreet();

//继承

class Ngreeter extends Greeter{
    constructor(message:string){
        super(message);
    }
    ng () {
        console.log('ng:'+this.greeting);
    }
}

let ng = new Ngreeter('deyao');

ng.getGreet();
ng.ng();

class Login{
    constructor(private pname : string){}
    get name() : string{
        return this.pname;
    }
    set name(newName:string){
        this.pname = newName;
    } 
}


