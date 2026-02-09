setup_A();
/** THEME: CALM  */
function setup_A() {
  console.log("in a");
  /**************************************************** */
  //get the buttons
  activateButtons(`#TEAM_A`, "ani_canvA", aniA, aniB, aniC, aniD);
  /**************** ANI A ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN A INSIDE HERE */
  /**************** ANI A ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: create a creative, visual pattern using text, divs as shapes, images ...
   * 2: add in mouseclick event listener(s) somewhere to make the sketch interactive
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function  -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  function aniA(parentCanvas) {
    console.log("in ani-A -teamA");
  }

  /****************ANI B ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN B INSIDE HERE */
  /****************ANI B ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:).
   * 1: create a creatve, visual pattern using text, divs as shapes, images ...
   * 2: add in mouseover event listener(s) somewhere to make the sketch interactive
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  function aniB(parentCanvas) {
    console.log("in ani-B -teamA");
  }
  /****************ANI C ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN C INSIDE HERE */
  /****************ANI C************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: use the PROVIDED keyup/down callbacks `windowKeyDownRef` and/or `windowKeyUpnRef` to handle keyboard events
   * 2: create an interactive pattern/sketch based on keyboard input. Anything goes.
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  /* TASK: make an interactive pattern .. colors, shapes, sizes, text, images....
   * using  ONLY key down and/or keyup -- any keys::
   */

  function aniC(parentCanvas) {
    console.log("in ani-C -teamA");

    parentCanvas.style.backgroundColor = "#dcdd9e";

    let counterAC = 0;
    const maxCounter = 8;
    const minCounter = 0;

    const cellSize = 41.5;
    const originX = 20.75;
    const originY = 20.75;

    let circles = [];

    function drawNewCircles() {
      // remove old circles
      circles.forEach((c) => c.remove());
      circles = [];

      // rows
      for (let row = 0; row <= counterAC; row++) {
        // columns
        for (let col = 0; col <= row; col++) {
          let distOrigin = row + col;
          let colors = distOrigin * 20;

          const circle = document.createElement("div");
          circle.className = "TEAM_A_circle";
          circle.style.width = "40px";
          circle.style.height = "40px";
          circle.style.borderRadius = "50%";
          circle.style.position = "absolute";

          circle.style.left = originX + col * cellSize + "px";
          circle.style.top = originY + row * cellSize + "px";

          // color pattern
          if (row == 0 && col == 0) {
            circle.style.backgroundColor = "black"; // origin stays black
          } else {
            circle.style.backgroundColor = `hsl(${colors}, 80%, 50%)`;
            parentCanvas.style.backgroundColor = `hsl(${colors}, 20%, 45%)`;
          }

          parentCanvas.appendChild(circle);
          circles.push(circle);
        }
      }
    }

    // Arrow key logic
    windowKeyDownRef = function (e) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        counterAC = Math.min(counterAC + 1, maxCounter); // move down but stay inside box
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        counterAC = Math.max(counterAC - 1, minCounter);
      }
      drawNewCircles();
      console.log("counterAC =", counterAC);
    };

    windowKeyUpRef = function (e) {
      // optional
    };

    window.addEventListener("keydown", windowKeyDownRef);
    window.addEventListener("keyup", windowKeyUpRef);
  }

  /****************ANI D************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN D INSIDE HERE */
  /****************ANI D************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:).
   * 1: create a creative, visual pattern using text, divs as shapes, images ...
   * 2: add in animation using requestAnimationFrame somewhere to make the sketch animate :)
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/
  function aniD(parentCanvas) {
    console.log("in ani-D -teamA");
  }
}
