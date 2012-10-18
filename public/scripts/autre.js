
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

function scrollAway()
{
window.scrollTo(100,500);
}



$(document).ready(function(){
	//alert(check_name("gabriel"));
	$("#ScriptTests").html("<span class='red'>Hello <b>Again</b></span>");
	$("h1").html("not dan");	
	$(".useless").remove();
	$("h1").append("-END");
	$("h1").prepend("Start- ");
	$(".FormationsJobs").toggle();

	
	//$("#use2").html("Make it disappear").click(function(){
	//$("#use2").remove();
	//});
	
	
	$("#Formation").click(function(){
	$("#CelsaMisc").toggle();
	
	});
	
	

	
});
