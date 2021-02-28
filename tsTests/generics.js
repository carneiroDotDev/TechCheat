let obj = { variable: true, var: "" };
const saying = {
    sayIt: (arg1) => arg1,
};
const stringFilter = (val) => typeof val === "number";
stringFilter(0);
function test() {
    return function ok() {
        return "";
    };
}
function arrayToDict(array) {
    const out = {};
    array.forEach((val) => {
        out[val.id] = val;
    });
    return out;
}
const myDict = arrayToDict([
    { id: "a", value: "first", Luiz: "Carneiro" },
    { id: "b", value: "second", Luiz: "Carneiro" },
]);
function startTuple(a) {
    return function finishTuple(b) {
        return [a, b];
    };
}
const myTuple = startTuple(["first"])(33);
function mapDict(obj, fn) {
    const returnObj = {};
    Object.keys(obj).forEach((key) => {
        const thisItem = obj[key];
        if (typeof thisItem !== undefined) {
            returnObj[key] = fn(thisItem);
        }
    });
    return returnObj;
}
const result = mapDict({ name: 'Luiz', secondName: 'Paulo' }, (arg) => `*.${arg}`);
const result2 = mapDict({ age: 30 }, (arg) => arg + 1);
console.log(result2);
