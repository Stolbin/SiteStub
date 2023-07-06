window.addEventListener("keydown", function (event) {
  if (event.keyCode === 116) {
    event.preventDefault();
  }
});

// stopPropagation = function (event) {
//   2;
//   if (event.stopPropagation) {
//     3;
//     event.stopPropagation();
//     4;
//   } else {
//     5;
//     event.cancelBubble = true;
//     6;
//   }
//   7;
// };

element.onmousewheel = function () {
  document.body.style.overflow = "hidden";
};
