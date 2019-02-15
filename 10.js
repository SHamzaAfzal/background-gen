toDoList = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
];

console.log(toDoList);
// debugger;
var todoLength = toDoList.length;
for(var i = 0; i< todoLength; i++)
{
    console.log(toDoList[i], i);
}

var counterOne = 0;
while (counterOne < 10)
{
    counterOne++;
    console.log(counterOne + " While");
}

var counterTwo =0;
do
{
    counterTwo++
    console.log(counterTwo + " Do While")
}while (counterTwo < 10)

toDoList.forEach(function(i,d) {
    console.log(i,d);
});

function logTo(i,j) {
    console.log(i + "^",j);
}

toDoList.forEach(logTo);