interface test1 {
    shouldWork: () => void;
    name: string
}
interface test2 {
    (): void;
}

const boo: test2 = () => { console.log('works')}
const obj1: test1 = {
    name: 'Luiz',
    shouldWork: () => { console.log(this) }
}

obj1.shouldWork.call(obj1)

boo()