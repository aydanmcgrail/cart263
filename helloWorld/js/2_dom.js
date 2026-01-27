window.onload = setup;
function setup() {
  console.log("running setup");

  //if i got this right the console.log shows what i can modify in the html. i can see it through the console
  console.log(document.getElementById("one"));
  console.log(document.querySelector("#one"));
  ///////////
  console.log(document.getElementsByTagName("div").length);
  console.log(document.getElementsByTagName("div")[0]);
  ////////////////
  console.log(document.querySelectorAll("div"));
  console.log(document.querySelectorAll("div").length);
  console.log(document.querySelectorAll("div")[0]);
  ///////////////////
  console.log(document.getElementsByClassName("square_shape"));
  console.log(document.querySelectorAll(".square_shape"));
  console.log(document.querySelectorAll(".square_shape").length);
  console.log(document.querySelectorAll(".square_shape")[0]);

  console.log(document.getElementById("two").innerHTML);
  console.log(document.getElementById("two").textContent);

  console.log(document.querySelector("#six").style);
  console.log(document.querySelector("#six").style.background);
  console.log(document.querySelector("#six").style.width);

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  document.getElementsByClassName("square_shape")[0].style.background = "#0000"; ////this changes the background color of the first square_shape class element to black
  document.querySelector("#two").children[0].innerHTML =
    "<h2> this is now a header</h2>";

  //get the group
  let allSquareShapes = document.querySelectorAll(".square_shape");
  //go through each element
  for (let singleSquareShape of allSquareShapes) {
    //get children
    console.log(singleSquareShape.children[0]);
    singleSquareShape.children[0].textContent += "adding content";
    //if(singleSquareShape.querySelector("p span")!== null){
    //singleSquareShape.querySelector("p span").textContent += " other Content";
  }
  document.querySelector(".square_shape").classList.remove("square_shape"); //first one only
  document.querySelector("p span").classList.add("change_span");

  //add
  document.querySelector("#four").style.background = "cornflowerBlue";
  document.querySelector("#four").style.borderColor = "darkblue";
  //modify
  document.querySelector("#one").style.background = "pink";
  document.querySelector("#one").style.borderColor = "darkblue";

  document.querySelectorAll(".another_class")[0].setAttribute("id", "newTest");
  console.log(document.querySelectorAll(".another_class")[0]);
  //new element have to put it int hte html
  let newDiv = document.createElement("div");
  newDiv.classList.add("square_shape");
  newDiv.innerHTML = " NEW ELEMENT ";
  newDiv.style.backgroundColor = "purple";

  let parentElement = document.querySelector(".wrapper_flex_box");
  parentElement.appendChild(newDiv);

  let newDivTwo = document.createElement("div");
  newDivTwo.classList.add("square_shape");
  newDivTwo.innerHTML = " NEW ELEMENT TWO ";
  newDivTwo.style.backgroundColor = "yellow";
  //newDivTwo.querySelector("p").style.color = "black";
  // access parent element
  let sibling = document.querySelector("#three");
  let parentElementAgain = document.querySelector(".wrapper_flex_box");
  parentElementAgain.insertBefore(newDivTwo, sibling);

  /*let parentElementToRemoveFrom = document.querySelector(".wrapper_flex_box");
  let toRemove = document.getElementById("six");
  parentElementToRemoveFrom.removeChild(toRemove);*/
}
