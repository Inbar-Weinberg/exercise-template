function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    /**/
    let temp = JSON.parse (temp);
    out = Array.isArray(temp);
    /**/
    output.innerText = out;
}