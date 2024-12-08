console.log("Hello from client");

const url = "http://127.0.0.1:3000/";
fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
