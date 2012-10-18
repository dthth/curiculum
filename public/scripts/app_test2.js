
function check_name(name) {    //checkname
if (name =="gabriel") {
return"Win";
} else if(name == "Clement"){
	return "We've found Clement";
//console.log("on a trouvé clement")
}
//else {#ScriptTests.write("example")}
//else {("#ScriptTests").html("TESTTTT")}
//document.getElementById("ffff").innerHTML=("oh yes")
else {
return "try again";
}

}


$(document).ready(function(){       // wait for rest of page to charge then charge function automatically

// stuff here

alert(check_name("dannn"));

$("div").html("<span class='red'>Hello <b>Again</b></span>")

});