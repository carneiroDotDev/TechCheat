interface Wrap<X, Y> {
  [key: string]: Y | X;
}

let obj: Wrap<string, boolean> = { variable: true, var: "" };

interface FilterFunction<Generic = string> {
  (val: Generic): boolean;
}
interface sayTheName<Generic = string> { //Generic default type
  sayIt: (arg: Generic) => Generic;
}

const saying: sayTheName<number> = {
  sayIt: (arg1) => arg1,
};

// console.log(saying.sayIt(1122));

const stringFilter: FilterFunction<number> = (val) => typeof val === "number";

stringFilter(0);
// stringFilter('abc')

interface Fun {
  (name: string): string;
}

function test(): Fun {
  return function ok() {
    return "";
  };
}
// Generic extended
function arrayToDict<T extends { id: string }>(array: T[]): { [k: string]: T } {
  const out: { [k: string]: T } = {};
  array.forEach((val) => {
    out[val.id] = val;
  });
  return out;
}

const myDict = arrayToDict([
  { id: "a", value: "first", Luiz: "Carneiro" }, // must have the prop ID
  { id: "b", value: "second", Luiz: "Carneiro" },
]);

// console.log(myDict);

function startTuple<T>(a: T) { //Closure is also supported with Generics
  return function finishTuple<U>(b: U) {
    return [a, b] as [T, U];
  };
}

const myTuple = startTuple(["first"])(33);

// console.log(myTuple);

declare function something<S extends { sayIt(): void }>(arg: S[]): void;
declare function something(arg: { sayIt(): void }[]): void;

// Exercise Dict<T> - create a map funciton for dictionaries.

type dict<T> = {
  [key: string]: T | undefined;
};

function mapDict<T, S>(obj: dict<T>, fn: (val: T) => S): dict<S> {
  const returnObj: dict<S> = {};
  Object.keys(obj).forEach((key) => {
    const thisItem = obj[key];
    if (typeof thisItem !== undefined) { //really nice tip when you still want values like '' or 0 to pass through
      returnObj[key] = fn(thisItem);
    }
  });
  return returnObj;
}

const result = mapDict({name: 'Luiz', secondName: 'Paulo'}, (arg) => `*.${arg}`)
const result2 = mapDict({age: 30}, (arg) => arg + 1)
console.log(result2);
