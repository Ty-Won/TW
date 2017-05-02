/*checks if it prints in log and alerts to know if the script file 
is linked to the html file successfully*/
console.log("hello");


function main(){
 
  $("#Greeting,#topmenu").hide();
  $("#Greeting").fadeIn(2000);
  $("#topmenu").fadeIn(4000);
  console.log("made it");
};

$(document).ready(main);
