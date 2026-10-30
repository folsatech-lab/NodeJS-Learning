function processStudent(name, score, callback) {
    console.log(`Student: ${name}`);
    console.log(`Score: ${score}`);
    callback(score);
}

function checkResult(score) {
    if (score >= 50) {
        console.log("Result: Passed!");
    } else {
        console.log("Result: Failed!");
    }

    console.log("--------------------");
}

processStudent("Olumide", 85, checkResult);
processStudent("Michael", 45, checkResult);
processStudent("Sarah", 70, checkResult);