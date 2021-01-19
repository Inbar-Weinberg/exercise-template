let arr = []
let counter = 0;
function display() {
    const output = document.getElementById("output");
    output.innerText = "[" + arr + "]";
}

function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    /**/
    arr.push(input);
    counter++;
    out = "Added: " + input + " to the " + counter + " index."
    /**/
    output.innerText = out;
}
