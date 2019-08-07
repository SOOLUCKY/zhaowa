//2.1
var person = 1;

function showPerson() {
    var person = 2;
    console.log(person)
}

showPerson();
/**
 * 2， 函数作用域内局部变量覆盖了全局变量
 */

//2.2
var person = 1;

function showPerson() {
    console.log(person)
    var person = 2;
}

showPerson();
/**
 * undefined，局部变量覆盖了全局变量，局部变量person不会提升，只有申明会提升，初始化不会
 */

//2.3
var person = 1;

function showPerson() {
    console.log(person)

    var person = 2;

    function person() {

    }
}

showPerson();
/**
 * ƒ person() {}
 * 函数提升
 */

//2.4
var person = 1;

function showPerson() {
    console.log(person)

    function person() {
    }

    var person = 2;
}

showPerson();
/**
 * ƒ person() {} 函数提升在变量提升之后
 */

//2.5
for (var i = 0; i < 10; i++) {
    console.log(i)
}

for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i)
    }, 0)
}

for (var i = 0; i < 10; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i)
        }, 0)
    })(i);
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}
