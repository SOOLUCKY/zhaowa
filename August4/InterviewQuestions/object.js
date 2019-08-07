// 面向对象
//1.1
function Person() {
    this.name = 1;
    return {};
}

var person = new Person();
console.log('name:', person.name);

/**
 * undefined,构造函数模式创建对象，因为构造函数return了空对象
 */

//1.2
function Person() {
    this.name = 1;
}

Person.prototype = {
    show: function () {
        console.log('name is:', this.name);
    }
};
var person = new Person();
person.show();

/**
 * 1，组合模式创建对象，构造函数里的name是每个实例的私有属性，默认值为1，show里面访问的是person实例的name属性
 */

//1.3
function Person() {
    this.name = 1;
}

Person.prototype = {
    name: 2,
    show: function () {
        console.log('name is:', this.name);
    }
};
var person = new Person();

Person.prototype.show = function () {
    console.log('new show');
};
person.show();

/**
 * new show，第二个show函数覆盖了第一个
 */

//1.4
function Person() {
    this.name = 1;
}

Person.prototype = {
    name: 2,
    show: function () {
        console.log('name is:', this.name);
    }
}
var person = new Person();
var person2 = new Person();
person.show = function () {
    console.log('new show')
}

person2.show();
person.show();

/**
 * 1，优先构造函数里的name属性，没有才找prototype的
 * new show , 这个也是先找自己有没有show函数
 */

//2
function Person() {
    this.name = 1;
}

Person.prototype = {
    name: 2,
    show: function () {
        console.log('name is:', this.name);
    }
}

Person.prototype.show();
(new Person()).show();
/**
 * 2, this指的是prototype对象，prototype的name是2
 * 1， this指的是new 出来的Person实例，所有name是1
 */
