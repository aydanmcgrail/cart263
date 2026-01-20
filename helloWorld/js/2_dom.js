window.onload = setup
function setup() {
    console.log("running setup");
    console.log(document.getElementById("one"));
    console.log(document.querySelector("#one"));
    console.log(document.getElementsByTagName("div").length);
    console.log(document.getElementsByTagName("div")[0]);
    console.log(document.getElementsByClassName("square_shape"));
    document.getElementsByClassName("square_shape")[0].style.background = "#0000";

    //new element have to put it int hte html
    let newDiv = document.createElement("div");
    newDiv.classList.add("square_shape");
    newDiv.innerHTML = " NEW ELEMENT ";
    newDiv.style.backgroundColor = "purple";

    let parentElement = document.querySelector(".wrapper_flex_box")
    parentElement.appendChild(newDiv)
}