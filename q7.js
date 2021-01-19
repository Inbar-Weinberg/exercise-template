function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    /**/
    let arr = JSON.parse(input);

    let i = 0;
    let j = arr.length - 1;
    let max = j;
    let min = i;
    let temp;
    while (i <= j) {
        for (let h = i; h <= j; h++) {
            if (arr[h] < arr[min]) {
                min = h;
            }
            else if (arr[h] > max) {
                max = h;
            }
            temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;

            temp = arr[j];
            arr[j] = arr[max];
            arr[max] = temp;
        }
        i++;
        j--;
    }
    out = arr;
    /**/
    output.innerText = out;
}
