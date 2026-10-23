const users = [
    { name: "James", age: 25 },
    { name: "Michael", age: 30 },
    { name: "Sarah", age: 28 },
    { name: "David", age: 22 },
    { name: "Mary", age: 26 }
];
const user = users.find(function(user) {
    return user.name === "Peter";
});

console.log(user);