
const buzz: buildAString = {
    a: 'aaa'
}

// console.log(buzz)

type buildAString = {
    a: string
}


const boo: test2 = () => { console.log('works') }
type test2 = {
    (): void;
}
interface test1 {
    [key: string]: (() => void) | boolean;
}

const foo = {
    'Luiz': 'Paulo'
}

const obj1: test1 = {
    shouldWork: () => {
        console.log('hello', this)
    },
    paulo: true
}

if (typeof obj1.shouldWork === 'function') {
    obj1.shouldWork.call(obj1)
}

// boo()

type myType = 1 | 2 | sayMyName
interface sayMyName { name: 'Luiz' }