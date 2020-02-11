interface test1 {
    shouldWork: () => void;
    name: string
}

const obj1: test1 = {
    name: 'Luiz',
    shouldWork: () => { console.log(this) }
}

obj1.shouldWork.call(obj1)