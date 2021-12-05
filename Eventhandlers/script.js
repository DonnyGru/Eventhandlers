//Part 1:
/*
const giveAlert = document.getElementById("mybutton");
giveAlert.addEventListener("click", function () {
  alert("button clicked!");
});
*/
//Part 2:


/*
const changeClass = function () {
    const bodyElement = document.body;
    bodyElement.classList.add("red-background");
  };
  const colorButton = function () {
    const changeColorButton = document.getElementById("background-change");
    changeColorButton.addEventListener("click", function () {
      changeClass();
    });
  };
    const buttonAlert = function () {
    const alertButton = document.getElementById("alert-button");
    alertButton.addEventListener("click", function () {
      alert("button clicked");
    });
  };
  
buttonAlert();
colorButton();
*/
//Part 3: 

const buttonAlert = function() {
    const alertButton = document.getElementById("alert-button");
    alertButton.addEventListener("click", function() {
        alert("button clicked");
    });
};

const toggleColor = function() {
    const bodyElement = document.body;
    bodyElement.classList.toggle("red-background");
};

const colorButton = function() {
    const changeColorButton = document.getElementById("background-change");
    changeColorButton.addEventListener("click", function() {
        toggleColor();
    });
};

buttonAlert();
colorButton();