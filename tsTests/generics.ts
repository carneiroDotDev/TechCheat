interface Wrap<X, Y>{
    [ key: string ]: Y | X
}

let obj: Wrap<string, boolean> = { variable: true, var: '' }

interface FilterFunction<T = string>{
    (val: T): boolean;
}

const stringFilter: FilterFunction<number> = (val) => typeof val === 'number'

stringFilter(0)
// stringFilter('abc')

interface Fun{
    (name: string): string
}

function test (): Fun{
    return function ok(){ return '' }
}