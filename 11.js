var database = [
    {
        username: "Joe",
        password: "SuperSecret"
    },
    {
        username: "Hamza",
        password: "Hamza"
    },
    {
        username: "Ubaid",
        password: "Lodhi"
    }
];

var newsFeed = [
    {
        username: "bobby",
        timeline: "kaam karo naa"
    }
    ,
    {
        username: "sally",
        timeline: "kaam krrin me"
    }
]

var usernamePrompt = prompt("Enter Username");
var passwordPrompt = prompt("Enter Password");
// signIn(usernamePrompt,passwordPrompt);
// debugger;

var boolwa = false;
database.forEach(signIn);

function signIn(user,incrm) {
    if (boolwa === true) {
        // debugger;
        return;
    }
    else if((usernamePrompt === user.username) && (passwordPrompt === user.password)) {
        console.log(newsFeed);
        boolwa = true;
    }
    else if(incrm === database.length-1) {
        console.log("fail");
    }
}
