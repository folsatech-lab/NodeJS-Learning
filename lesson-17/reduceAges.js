
const users = [
    { name: "James", age: 25 },
    { name: "Michael", age: 30 },
    { name: "Sarah", age: 28 },
    { name: "David", age: 22 },
    { name: "Mary", age: 26 }
];

const totalAge = users.reduce(function(total, user) {
    return total + user.age;
}, 0);

console.log("Total age: " + totalAge);
