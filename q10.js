function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    /**/
    let arr = JSON.parse(input);
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += "Row: " + i + " is: ";
        for (let j = 0; j < arr[i].length-1; j++) {
            str += arr[i][j] + ", ";
        }
        str += arr[i][arr[i].length-1];
        if (i !== arr.length - 1){}
            str += "\n";
    }
    out = str;
    /**/
    output.innerText = out;
}
