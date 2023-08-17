/*50 - Stringify the above students object with only firstName, lastName and skills properties.*/

const student = {
    firstName: 'Asabeneh',
    lastName: 'Yetayehe',
    age: 250,
    isMarried: true,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python',]
}

const txt = JSON.stringify(student,['firstName', 'lastName', 'skills'])
console.log(txt)