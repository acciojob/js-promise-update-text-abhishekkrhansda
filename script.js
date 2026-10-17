//your JS code here. If required.
let output = document.getElementById("output");

function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello, world!");
        }, 1000);
    });
}

getData().then((message) => {
    output.innerText = message;
});