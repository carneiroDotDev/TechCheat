var _this = this;
var buzz = {
    a: 'aaa'
};
var boo = function () { console.log('works'); };
var foo = {
    'Luiz': 'Paulo'
};
var obj1 = {
    shouldWork: function () {
        console.log('hello', _this);
    },
    paulo: true
};
if (typeof obj1.shouldWork === 'function') {
    obj1.shouldWork.call(obj1);
}
