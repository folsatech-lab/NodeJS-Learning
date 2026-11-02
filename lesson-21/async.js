function showMessage(message) {
    console.log(message);
}

console.log("Starting application...");

setTimeout(showMessage, 2000, "Loading user profile...");

setTimeout(showMessage, 4000, "User profile loaded!");

console.log("Application is running...");