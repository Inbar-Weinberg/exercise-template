function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    /**/
    let arr = eval(input);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === null || arr[i] === "" || arr[i] === 0 || arr[i] === NaN || arr[i] === undefined || !arr[i]) {
            arr.splice(i, 1);
            i--;
        }
    }
    out = arr;

    /**/
    output.innerText = out;
}


