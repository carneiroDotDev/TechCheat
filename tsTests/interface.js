const buzz = {
    a: 'aaa'
};
const boo = () => { console.log('works'); };
const obj1 = {
    name: 'Luiz',
    shouldWork: () => { console.log(this); }
};
obj1.shouldWork.call(obj1);
