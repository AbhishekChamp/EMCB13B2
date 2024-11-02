// A Promise is a JavaScript object that represents the eventual completion or failure of an asynchronous operation.
// It can be in one of three states:
// 1. Pending: The initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully.
// 3. Rejected: The operation failed.

// Creating a new Promise
const myPromise = new Promise((resolve, reject) => {
    const success = true; // Change this to false to simulate a failure

    setTimeout(() => {
        if (success) {
            resolve("Operation was successful!");
        } else {
            reject("Operation failed.");
        }
    }, 2000); // Simulating an async operation
});

// Using the Promise
myPromise
    .then((result) => {
        console.log(result); // This will run if the promise is fulfilled
    })
    .catch((error) => {
        console.error(error); // This will run if the promise is rejected
    })
    .finally(() => {
        console.log("Promise has been settled (either fulfilled or rejected).");
    });
