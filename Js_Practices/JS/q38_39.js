/* 38 - Add name, legs, color, age and bark properties for the dog object. 
The bark property is a method which return woof woof*/

/*39 - Get name, legs, color, age and bark value from the dog object */

const dog = {};

dog.name = "dog1";
dog.legs = 2;
dog.color = "white";
dog.age = 3;
dog.bark = ()=>{
    return "woof woof";
};

console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark())