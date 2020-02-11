var _this = this;
var obj1 = {
    name: 'Luiz',
    shouldWork: function () { console.log(_this); }
};
obj1.shouldWork.call(obj1);
