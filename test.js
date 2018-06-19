//find common elements in SORTED unique arrays
let array1 = [1,3,6,7,9,10,12,13,14,16,19];
let array2 = [2,3,7,8,9,11,13,15,16,20];

//brute force
function brute(array1, array2) {
    //for every element in array 1 look through every element in array 2 and add to output when they match
    let output = [];
    for (let x = 0; x < array1.length; x++) {
        for (let y = 0; y < array2.length; y++) {
            if (array1[x] === array2[y]) {
                output.push(array1[x]);
            }
        }
    }
    return output;
}
console.log(`matching pairs=${JSON.stringify(brute(array1, array2))}`);

//OK, I could make this faster by not searching further once I have a match, but this is an appalling algorythm
// it scales at O(N²).  The ssecond array is sorted, so I could do a binary seach, 
// but the first array is sorted too, so why not just ladder by way though both sets (like we used to good ol' C programming days)
function ladder(sorted1, sorted2) {
    let output = [];
    let y = 0;
    let x = 0;
    while ((x < sorted1.length) && (y < sorted2.length)) {
        let value1 = sorted1[x];
        let value2 = sorted2[y];
        if (value2 > value1) {
            x++;
        } else if (value1 > value2) {
            y++;
        } else if (value1 === value2) {
            output.push(value1);
            x++;
            y++;
        }
    }
    return output;
}
console.log(`matching pairs=${JSON.stringify(ladder(array1, array2))}`);
//worst case this touches every element in both arrays and so scales at O(A+B), or O(N)