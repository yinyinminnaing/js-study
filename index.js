console.log('Happy developing ✨')

let people =['mario','luris','hazel','john','luie','james'];

const logPerson = (person,index) => {
    console.log( `${index} - hello ${person}`);
}

//people.includes(logPerson);

//object literals
let user={
    name:'crystal',
    email:'crystal@gmail.com',
    age:33,
    address:'no.33,Rose lane,33 ward',
    blogs:['mama','about something','travel ']
};

console.log(user);
console.log(user.name);
console.log(typeof user);
console.log(typeof user.email);
console.log(typeof user.age);
console.log(typeof user.blogs);