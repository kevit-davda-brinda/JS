const timeoutPromise = (interval, intervalName) => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(`Executed ${intervalName} at: ${new Date().toString()} with interval of ${interval}`);
            resolve();
        }, interval);
    });
};
let main = async() => {
    console.log('Starting at:', new Date().toString());
    // Insert your code here
    await timeoutPromise(1000,"IN1");
    await timeoutPromise(3000,"iN2");
    await timeoutPromise(2000,"iN3");
    await timeoutPromise(4000,"IN4");
    await timeoutPromise(2000,"iN5");
    console.log('Completed at:', new Date().toString());
};

main()