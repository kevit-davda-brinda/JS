/* 35 - 
Write a function which filter users who has scores > 85, 
Write a function which addUser to the user array only if the user does not exist. 
Write a function which addUserSkill which can add skill to a user only if the user exist. 
Write a function which editUser if the 	user exist in the users array.
*/


const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTM'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
];


function checkUser(user,users){
    for(let item of users){
        if(item.name === user){
            return true;
        }
    }

    return false;
}


//1. filtering the users whose score > 85
function filter(users) {

    let result_array = [];

    for(let item of users){
        if(item.scores > 85){
            result_array.push(item);
        }
    }

    return result_array;
}

// console.log(filter(users))

// 2. Write a function which addUser to the user array only if the user does not exist.
function addUser(user , users){
    
    if(!checkUser(user,users)){
        users.push({name:user});

        return users;
    }

    return "user already exist";
}


// console.log(addUser('Ale',users))

//3. Write a function which addUserSkill which can add skill to a user only if the user exist. 
function addUserSkill(user,skills,users){
    if(checkUser(user,users)){
        for(let item of users){
            if(item.name === user){
                item.skills = skills;
            }
        }

        return users;
    }


    return "User dosn't exist"
    
}

// console.log(addUserSkill('Thomas',['Android','JAVA'],users));


//4. Write a function which editUser if the user exist in the users array.
function editUser(user,users){
    if(checkUser(user,users)){
        return "You can edit the user";
    }

    return "You can't edit the user"
}

console.log(editUser('Thomas',users))