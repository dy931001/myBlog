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
//类
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.getGreet = function () {
        return console.log('hello' + this.greeting);
    };
    return Greeter;
}());
var g = new Greeter('li');
g.getGreet();
//继承
var Ngreeter = /** @class */ (function (_super) {
    __extends(Ngreeter, _super);
    function Ngreeter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ngreeter.prototype.ng = function () {
        console.log('ng:' + this.greeting);
    };
    return Ngreeter;
}(Greeter));
var ng = new Ngreeter('deyao');
ng.getGreet();
ng.ng();
