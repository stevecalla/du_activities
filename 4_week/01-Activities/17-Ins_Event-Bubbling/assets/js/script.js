var outer = document.querySelector(".outer-div");
var inner = document.querySelector(".inner-div");
var button = document.querySelector(".button");
    
outer.addEventListener("click", changePurple);
inner.addEventListener("click", changeOrange);
button.addEventListener("click", changeBlue);

function changePurple(event) {
  event.stopPropagation();
  console.log(event.currentTarget)
  event.currentTarget.setAttribute(
    "style",
    "background-color: #601A4A"
    );
  }
  
  function changeOrange(event) {
    // event.stopPropagation();
    console.log(event.currentTarget)
    event.currentTarget.setAttribute(
      "style",
      "background-color: #EE442F; color: white;"
      );
    }
    
    function changeBlue(event) {
      // event.stopPropagation();
      console.log(event.currentTarget)
      event.currentTarget.setAttribute(
        "style",
        "background-color: blue"
      );
    }
