document.getElementById("b1").addEventListener("click", popupText1);
document.getElementById("b2").addEventListener("click", popupText2);
document.getElementById("b3").addEventListener("click", popupText3);
document.getElementById("b4").addEventListener("click", popupText4);
document.getElementById("b5").addEventListener("click", popupText5);
document.getElementById("b6").addEventListener("click", popupText6);
document.getElementById("cbutton").addEventListener("click", closePopUp);

function display() {
  document.getElementById("popup").style.display = "block";
}

function closePopUp() {
  document.getElementById("popup").style.display = "none";
}

function popupText1() {
  document.getElementById("popuptext").innerHTML =
    "Wang Gang will be meeting fans during the first 2 days, 6/7 and 6/8. He will be demonstrating one of his recipes at 4:30PM on 6/7 and 4:00PM at 6/8. ";
  display();
}
function popupText2() {
  document.getElementById("popuptext").innerHTML =
    "Gordon Ramsay will be meeting fans on the last day, 6/9. He will be speaking at 4:00PM that day.";
  display();
}
function popupText3() {
  document.getElementById("popuptext").innerHTML =
    "Uncle Roger will be at Booth 1 meeting fans and reviewing food on all three days, 12:00PM - 5:00PM";
  display();
}
function popupText4() {
  document.getElementById("popuptext").innerHTML =
    "Mike Chen will be at Booth 2 meeting fans on 6/7 and 6/9, at 1:00PM - 5:00PM";
  display();
}
function popupText5() {
  document.getElementById("popuptext").innerHTML =
    "Matt Stonie will be at Booth 3 holding an eating contest on 6/8 at 2:00PM";
  display();
}
function popupText6() {
  document.getElementById("popuptext").innerHTML =
    "Elias Wu Feng will be at Booth 4 during the entire event.";
  display();
}
