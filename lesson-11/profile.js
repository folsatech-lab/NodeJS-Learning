
const user = {
    name: "Sarah",
    age: 30,

    introduce: function() {
        console.log("Hello, my name is " + this.name);
        console.log("I am " + this.age + " years old.");
    },

    greet: function() {
        console.log("Welcome, " + this.name + "!");
    },
    showAge: function() {
        console.log("My age is " + this.age);
    },
    changeName: function() {
    this.name = "Michael";
    console.log("My new name is " + this.name);
}
};

user.introduce();
user.greet();
user.showAge();
user.changeName();
user.introduce();
user.changeName();