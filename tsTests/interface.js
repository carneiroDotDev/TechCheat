const buzz = {
    a: 'aaa'
};
const boo = () => { console.log('works'); };
const foo = {
    'Luiz': 'Paulo'
};
const obj1 = {
    shouldWork: () => {
        console.log('hello', this);
    },
    paulo: true
};
if (typeof obj1.shouldWork === 'function') {
    obj1.shouldWork.call(obj1);
}
