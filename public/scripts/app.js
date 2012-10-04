

function check_name(name) {    //checkname
if (name =="gabriel") {
console.log("Win");
} else if(name == "Clement"){
	return "We've found Clement";
//console.log("on a trouvé clement")
}
else {console.log("oh no")}
}


$(document).ready(function(){       // wait for rest of page to charge then charge function automatically

// stuff here

alert(check_name("Clement"));

});