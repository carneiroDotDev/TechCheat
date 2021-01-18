var obj = { variable: true, "var": "" };
var saying = {
    sayIt: function (arg1) { return arg1; }
};
console.log(saying.sayIt(1122));
var stringFilter = function (val) { return typeof val === "number"; };
stringFilter(0);
function test() {
    return function ok() {
        return "";
    };
}
// Generic extended
function arrayToDict(array) {
    var out = {};
    array.forEach(function (val) {
        out[val.id] = val;
    });
    return out;
}
var myDict = arrayToDict([
    { id: "a", value: "first", Luiz: "Carneiro" },
    { id: "b", value: "second", Luiz: "Carneiro" },
]);
// console.log(myDict);
function startTuple(a) {
    return function finishTuple(b) {
        return [a, b];
    };
}
var myTuple = startTuple(["first"])(33);
function mapDict(obj, fn) {
    var returnObj = {};
    Object.keys(obj).forEach(function (key) {
        var thisItem = obj[key];
        if (typeof thisItem !== undefined) { //really nice tip when you still want values like '' or 0 to pass through
            returnObj[key] = fn(thisItem);
        }
    });
    return returnObj;
}
var result = mapDict({ name: 'Luiz', secondName: 'Paulo' }, function (arg) { return "*." + arg; });
var result2 = mapDict({ age: 30 }, function (arg) { return arg + 1; });
console.log(result2);
