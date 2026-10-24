
const users = [
    { name: "James", age: 25 },
    { name: "Michael", age: 30 },
    { name: "Sarah", age: 28 },
    { name: "David", age: 22 },
    { name: "Mary", age: 26 }
];

users.forEach(function(user) {
    if (user.age >=28) {
    console.log("Name: " + user.name);
    console.log("Age: " + user.age);
    console.log("----------------");
    }
});