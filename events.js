document.getElementById("cbutton").addEventListener("click", closePopUp);
document.getElementById("d1wg").addEventListener("click", function () {
  popupText(1);
});
document.getElementById("d2wg").addEventListener("click", function () {
  popupText(1);
});
document.getElementById("d1ur").addEventListener("click", function () {
  popupText(2);
});
document.getElementById("d2ur").addEventListener("click", function () {
  popupText(2);
});
document.getElementById("d1mc").addEventListener("click", function () {
  popupText(3);
});
document.getElementById("d2mc").addEventListener("click", function () {
  popupText(3);
});
document.getElementById("d1emg").addEventListener("click", function () {
  popupText(4);
});
document.getElementById("d2emg").addEventListener("click", function () {
  popupText(4);
});

document.getElementById("d3ms").addEventListener("click", function () {
  popupText(5);
});
document.getElementById("d3gr").addEventListener("click", function () {
  popupText(6);
});

function display() {
  document.getElementById("popup").style.display = "block";
}

function closePopUp() {
  document.getElementById("popup").style.display = "none";
}

function popupText(num) {
  if (num == 1) {
    document.getElementById("popuptext").innerHTML =
      "Wang Gang will be holding a meet and greet. Fans can come and interact with Wang Gang.";
  } else if (num == 2) {
    document.getElementById("popuptext").innerHTML =
      "Uncle Roger will be holding a meet and greet. Fans can come and interact with Uncle Roger. Uncle Roger will also review your cooking live!";
  } else if (num == 3) {
    document.getElementById("popuptext").innerHTML =
      "Mike Chen aka StrictlyDumping will be holding a meet and greet. Fans can come and interact with him.";
  } else if (num == 4) {
    document.getElementById("popuptext").innerHTML =
      "Elias will be holding a meet and greet. Fans can come and interact with him.";
  } else if (num == 5) {
    document.getElementById("popuptext").innerHTML =
      "Matt Stonie will be holding an eating contest. Fans can join and compete against Matt Stonie.";
  } else {
    document.getElementById("popuptext").innerHTML =
      "Gordon Ramsay will be delivering a speech about his experiences with learning Asian cuisine.";
  }
  display();
}
