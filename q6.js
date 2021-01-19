function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    /**/
    let str = input;
    let x, y;
    for (let i = 0; i < str.length - 1; i++) {
        x = Number(str[i]);
        y = Number(str[i + 1]);
        if (x % 2 === 0 && y % 2 === 0) {
            str = str.slice(0, i + 1) + "-" + str.slice(i + 1);
            i++;
        }
    }
    out = str;
    /**/
    output.innerText = out;
}