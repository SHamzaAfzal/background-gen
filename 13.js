$(document).ready(function() {
    $("#btnClick").click(function(){
        varBool = prompt("true/false");
        debugger;
        if (varBool === "true")
        { var vbool = true }
        else
        { vbool = false }
        answer(vbool);
    })
})



function isUserValid(bool) {
    return bool;
}

function answer(bool) { isUserValid(bool) ? alert("Ghus jao"):alert("Denied"); }
