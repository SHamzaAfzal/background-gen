// Complete the below questions using this array:
const array = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  
  ];
  
  //Create an array using forEach that has all the usernames with a "!" to each of the usernames
  const t1Array = [];
  const funcArray = array.forEach((num) => {
      t1Array.push(num.username+ '!');
  })
  console.log(`Task 1: ${t1Array}`);
  
  //Create an array using map that has all the usernames with a "? to each of the usernames
  const t2MapArray = array.map((num) => 
  {
     return num.username + '?';
  })
  console.log(t2MapArray);
  //Filter the array to only include users who are on team: red

  const filterArray = array.filter(user => {
  	return user.team === "red";
  })
  console.log(filterArray);
  

  //Find out the total score of all users using reduce
  const t3RedArray = array.reduce((acc,num) => {
      return acc + num.score
  },0);

  // (1), what is the value of i?
  // (2), Make this map function pure:
  const arrayNum = [1, 2, 4, 5, 8, 9];
  const newArray = arrayNum.map((num, i) => {
      return num * 2;
  })
  
  //BONUS: create a new list with all user information, but add "!" to the end of each items they own.
  const objNewList = [
    {
      userN: "Hamza",
      passWd: "exatex",
      lapName: "lenovo"
    },
    {
      userN: "Imran",
      passWd: "treehouse",
      lapName: "dell"
    }
  ];

const newListArr = [];
const newList = objNewList.forEach((objList, num) => {
  let {userN, passWd, lapName} = objList;
  userN = userN + `!`; passWd = passWd + `!`; lapName = lapName + `!`;
  newListArr.push({userN, passWd, lapName});
});


const bonusArr = array.map((obj) => {
  obj.items = obj.items.map(objM => (objM + '!') );
  return obj;
});
