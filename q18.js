function run() {
    const input = document.getElementById("input").value;
    const input2 = document.getElementById("input2").value;
    const output = document.getElementById("output");
    let out = "";
    /**/
    let arr = JSON.parse(input);
    let num = Number(input2);
    let indexFound = search(arr, num, 0, arr.length - 1);
    out = "The number is in the- " + indexFound + "th index (Starting at zero).";
    /**/
    output.innerText = out;
}

function search(arr, num, startIndex, endIndex) {
    let mid = Math.floor((startIndex + endIndex) / 2);
    if (arr[mid] === num)
        return mid;
    if (arr[mid] > num)
        return search(arr, num, startIndex, mid - 1);
    return search(arr, num, mid + 1, endIndex);
}
