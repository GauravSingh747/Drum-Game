// detecing button press.

let Button = document.querySelectorAll(".drum").length;

for (i = 0; i < Button; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function() {

    let buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML); // to make sound when button get cliked, and function to do this written below.
    buttonAnimation(buttonInnerHTML); // to make animation for the button, and function to do this written at bottom.

  });
}

// detecing keyboard press.

document.addEventListener("keypress", function(event) {

  makeSound(event.key); // to make sound when keyboard key get pressed.
  buttonAnimation(event.key) // to make animation when keyboard key get pressed.
})



function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}



function buttonAnimation(currentkey) {
  let activeButton = document.querySelector("." + currentkey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
