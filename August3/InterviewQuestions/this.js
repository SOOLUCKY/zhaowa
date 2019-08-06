//1.1
function show() {
    console.log('this:', this);
}

var obj = {
    show: show
};

obj.show();
/**
 * this是obj,因为show是被obj调用的
 */

//1.2
var obj = {
    show: function () {
        console.log('this:', this);
    }
};
(0, obj.show)();
/**
 * 逗号表达式的值是括号里最后一个表达式的值，obj.show返回的是一个函数，相当于直接调用函数，所以this是指window
 */

//1.3
var obj = {
    sub: {
        show: function () {
            console.log('this:', this)
        }
    }
};
obj.sub.show();
/**
 *  obj里的sub点出来的，所以this是sub
 */

//1.4
var obj = {
    show: function () {
        console.log('this:', this);
    }
};
var newobj = new obj.show();
/**
 * this是obj，因为是obj点出来的
 */

//1.5
var obj = {
    show: function () {
        console.log('this:', this);
    }
};
var newobj = new (obj.show.bind(obj))();
/**
 * this是obj，bind函数的第一个参数
 */

//1.6
var obj = {
    show: function () {
        console.log('this:', this);
    }
};
var newobj = new (obj.show.bind(obj))();
/**
 * 好像重复了和上一个
 */

//1.7
var obj = {
    show: function () {
        console.log('this:', this);
    }
};

var elem = document.getElementById('js-flash-container');
elem.addEventListener('click', obj.show); // window
elem.addEventListener('click', obj.show.bind(obj)); // obj
elem.addEventListener('click', function () {
    obj.show();
}); // obj

