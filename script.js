let isCardMoving = false;

function startCardMovement() {
  isCardMoving = true;
}

function stopCardMovement() {
  isCardMoving = false;
}

document.addEventListener('mousemove', function(event) {
  if (isCardMoving) {
    let card_x = getTransformValue(event.clientX, window.innerWidth, 56);
    let card_y = getTransformValue(event.clientY, window.innerHeight, 56);
    let shadow_x = getTransformValue(event.clientX, window.innerWidth, 20);
    let shadow_y = getTransformValue(event.clientY, window.innerHeight, 20);
    let text_shadow_x = getTransformValue(event.clientX, window.innerWidth, 28);
    let text_shadow_y = getTransformValue(event.clientY, window.innerHeight, 28);

    document.querySelector(".floating").style.transform = "rotateX(" + card_y/1 + "deg) rotateY(" + card_x + "deg)";
    document.querySelector(".floating").style.boxShadow = -card_x + "px " + card_y/1 + "px 55px rgba(0, 0, 0, .55)";
    document.querySelector(".svg").style.filter = "drop-shadow(" + -shadow_x + "px " + shadow_y/1 + "px 4px rgba(0, 0, 0, .6))";
    document.querySelector(".text").style.textShadow = -text_shadow_x + "px " + text_shadow_y/1 + "px 6px rgba(0, 0, 0, .8)";
  }
});

function getTransformValue(v1, v2, value) {
  return ((v1 / v2 * value - value / 2) * 3).toFixed(1);
}

window.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    document.body.classList.remove("active");
  }, 2200);
});
