var obj = { variable: true, "var": '' };
var stringFilter = function (val) { return typeof val === 'number'; };
stringFilter(0);
function test() {
    return function ok() { return ''; };
}
