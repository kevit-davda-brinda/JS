const timeoutPromise = (letter, interval) => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(`Executed ${letter} at: ${new Date().toString()} with interval of ${interval}`);
            resolve();
        }, interval);
    });
}

let main = async () => {
    console.log('Starting at:', new Date().toString());
    // Insert your code here
    timeoutPromise('A', 1000)
    timeoutPromise("D", 1000);
    timeoutPromise("B", 1000);
    await timeoutPromise("C", 1000);
    console.log('Completed at:', new Date().toString());
}

main()