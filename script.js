document.getElementById("b1").addEventListener("click", display());
document.getElementById("b2").addEventListener("click", popupText());

function display(){
    document.getElementById('popup').style.display = "none";
}

function popupText(){
    document.getElementById('popupcontent').innerHTML = "content2";
    display();

}