function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    /**/
    let arr = JSON.parse(input);
    let duplicates = [];
    if (arr === [])
        out = "The array is empty and there are no duplicates."
    else {
        let found = false;
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] === arr[j] && !found) {
                    duplicates.push(arr.splice(j, 1));
                    found = true;
                }
                else if (arr[i] === arr[j] && found) {
                    (arr.splice(j, 1));
                }
            }
            found = false;
        }

        if (duplicates.length === 0)
            out = "There are no duplicates.";
        else
            out = "These are all the duplicates: " + duplicates;
    }
    /**/
    output.innerText = out;
}
