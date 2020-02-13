interface test1 {
    shouldWork: () => void;
    name: string
}

const buzz: buildAString = {
    a: 'aaa'
}

// console.log(buzz)

type buildAString = {
    a: string
}


const boo: test2 = () => { console.log('works')}
interface test2 {
    (): void;
}

const obj1: test1 = {
    name: 'Luiz',
    shouldWork: () => { console.log(this) }
}

obj1.shouldWork.call(obj1)

// boo()

type myType = 1 | 2 | sayMyName
interface sayMyName{ name: 'Luiz'}