//2.1
var person = 1;

function showPerson() {
    var person = 2;
    console.log(person)
}

showPerson();
/**
 * 2
 */

//2.2
var person = 1;

function showPerson() {
    console.log(person)
    var person = 2;
}

showPerson();
/**
 * undefined
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
 * ƒ person() {

    }
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
 * ƒ person() {}
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
