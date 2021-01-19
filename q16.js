function run() {
    const input = document.getElementById("input").value;
    const input2 = document.getElementById("input2").value;
    const output = document.getElementById("output");
    let out = "";
    /**/
    let late = Number(input);
    let early = Number(input2);

    if (late < early) {
        let temp = early;
        early = late;
        late = temp;
    }

    for (let i = early; i <= late - 4; i++) {
        out += (i % 4 === 0) ? i + " is a gap year, " : "";
    }
    for (let i = late - 3; i <= late; i++) {
        out += (i % 4 === 0) ? i + " is a gap year." : "";
    }
    /**/
    output.innerText = out;
}
