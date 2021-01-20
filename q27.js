function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    /**/

    // Find which input is the array and save it in array format.
    // the other input stays as a string.

    // This code runs by getting the property as the inputted value and using the exampled array from the web site.
    // I was not successful at parsing a string representation of array of objects into an array of objects

    const arr = [{author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254}, {author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264}, {author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}]
    const property = input;
    let propertyArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].hasOwnProperty(property)) {
            propertyArray.push(arr[i][property]);
        }
    }
    out = propertyArray;
    /**/
    output.innerText = out;
}

// [{author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254}, {author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264}, {author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}]
