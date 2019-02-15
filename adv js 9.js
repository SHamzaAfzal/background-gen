const array = [1,2,10,16];

const double = [];
const newArray = array.forEach((num) => {
    double.push(num*2);
})

console.log(double);

// const myFunc = (num) => {
//     double.push(num*2);
// }


const mapArray = array.map((num) => {
    return num*2;
})
console.log('Filter',mapArray);

const filterArray = array.filter((num) => {
    return num > 5;
})
console.log('Filter',filterArray);

const redArray = array.reduce((accumulator,num) => {
    return accumulator+num;
},0);
console.log('reduce',redArray);