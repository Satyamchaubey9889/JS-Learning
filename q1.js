const arrayAverage = (arr) => {
    let total =0;
    for (let i of arr) {
        total = total+i;

    }
    return total/arr.length;

}
const arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arrayAverage(arr));