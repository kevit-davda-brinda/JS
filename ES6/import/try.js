"use strict"

export const obj = {
    a: 1,
    b: 2,
    fun() {
        let a = 1;
        console.log(a);
        const u = () => console.log(this);

        return u();
    }
}

obj.prop = console.log(this);
let obj2 = {};
obj2.prop2 = "hi";


console.log(obj2);
console.log(obj);

