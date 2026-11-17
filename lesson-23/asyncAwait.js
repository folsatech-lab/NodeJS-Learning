function loginUser(username, password) {
    return new Promise((resolve, reject) => {
        console.log("Checking login details...");

        setTimeout(() => {
            if (username === "Olumide" && password === "12345") {
                resolve("Login successful! Welcome back, Olumide.");
            } else {
                reject("Invalid username or password!");
            }
        }, 2000);
    });
}

async function startLogin() {
    try {
        const result = await loginUser("Olumide", "wrong123");
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

startLogin();

console.log("Application is running...");