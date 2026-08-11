let contacts = ["James", "Michael", "Sarah", "David"];

// Print original contacts
for (let i = 0; i < contacts.length; i++) {
    console.log(contacts[i]);
}

// Add Mary
contacts.push("Mary");

console.log("After adding Mary:");

for (let i = 0; i < contacts.length; i++) {
    console.log(contacts[i]);
}

// Remove the last contact
contacts.pop();

console.log("After removing the last contact:");

for (let i = 0; i < contacts.length; i++) {
    console.log(contacts[i]);
}
