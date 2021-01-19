function run() {
    const input = document.getElementById("input").value;
    const input2 = document.getElementById("input2").value; // for relevant questions. 
    const output = document.getElementById("output");
    let out = "";
    /**/
    let arr = JSON.parse(input);
    let num = JSON.parse(input2);

    if (!Array.isArray(arr)) {
        out = "[]";
    } else if (typeof num !== "number" || num < 0) {
        out = arr[0];
    }
    else if (num > arr.length) {
        out = arr;
    }
    else {
        out = arr.slice(0, num);
    }
    /**/
    output.innerText = out;
}