/* 40 . Set new properties the dog object: breed, getDogInfo */

const dog = {};

dog.name = "dog1";
dog.legs = 2;
dog.color = "white";
dog.age = 3;
dog.bark = ()=>{
    return "woof woof";
};
dog.breed = "";
dog.getDogInfo = ()=>{
    return dog;
}


console.log(dog.getDogInfo()) // is this correct or not ??