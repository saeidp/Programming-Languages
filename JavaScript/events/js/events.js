// -----------Event Handler Properties-----------
// // Function to modify the text content of the paragraph
// const changeText = () => {
//   const p = document.querySelector(".findMe");

//   p.textContent = "I changed because of an inline event handler.";
// };

// const p = document.querySelector("p");
// const button = document.querySelector("button");

// const changeText = () => {
//   p.textContent = "Will I change?";
// };

// const alertText = () => {
//   alert("Will I alert?");
// };

// // Events can be overwritten
// button.onclick = changeText;
// button.onclick = alertText; // only this works

// // -----------Event Listeners-----------
// // Function to modify the text content of the paragraph
// const changeText = () => {
//   const p = document.querySelector("p");

//   p.textContent = "I changed because of an event listener.";
// };

// // Listen for click event
// const button = document.querySelector("button");
// button.addEventListener("click", changeText);

// // multiple ones can be added, unlike onclick
// const p = document.querySelector("p");
// const button = document.querySelector("button");

// const changeText = () => {
//   p.textContent = "Will I change?";
// };

// const alertText = () => {
//   alert("Will I alert?");
// };

// // Multiple listeners can be added to the same event and element
// button.addEventListener("click", changeText);
// button.addEventListener("click", alertText);

// // An anonymous function on an event listener
// button.addEventListener('click', () => {
//     p.textContent = "Will I change?";
// });

// // Remove alert function from button element
// button.removeEventListener('click', alertText);

// ------------Common Events------------
// ----Mouse Events----
// click:	    Fires when the mouse is pressed and released on an element
// dblclick:	Fires when an element is clicked twice
// mouseenter:	Fires when a pointer enters an element
// mouseleave:	Fires when a pointer leaves an element
// mousemove:	Fires every time a pointer moves inside an element

// ---Form Events----
// submit:	Fires when a form is submitted
// focus:	Fires when an element (such as an input) receives focus
// blur:   	Fires when an element loses focus

// ---Keyboard Events---
// keydown	Fires once when a key is pressed
// keyup	Fires once when a key is released
// keypress	Fires continuously while a key is pressed

// // Test the keyCode, key, and code properties
// document.addEventListener("keydown", event => {
//   console.log("key: " + event.keyCode);
//   console.log("key: " + event.key);
//   console.log("code: " + event.code);
// });

// ------------event obejects---------------
// Pass an event through to a listener
document.addEventListener("keydown", event => {
  var element = document.querySelector("p");

  // Set variables for keydown codes
  var a = "KeyA";
  var s = "KeyS";
  var d = "KeyD";
  var w = "KeyW";

  // Set a direction for each code
  switch (event.code) {
    case a:
      element.textContent = "Left";
      break;
    case s:
      element.textContent = "Down";
      break;
    case d:
      element.textContent = "Right";
      break;
    case w:
      element.textContent = "Up";
      break;
  }
});
