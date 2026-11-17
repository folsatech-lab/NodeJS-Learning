function loginUser(username) {
    return new Promise((resolve, reject) => {
        console.log("Checking login details...");

        setTimeout(() => {
            if (username === "Olumide") {
                resolve(`Welcome back, ${username}!`);
            } else {
                reject("User not found!");
            }
        }, 2000);
    });
}

loginUser("Michael")
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });

console.log("Login request submitted...");