// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".counter__button");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("button__decrease")) {
      count--;
    } else if (styles.contains("button__increase")) {
      count++;
    } else {
      count = 0;
    }

    value.textContent = count;
  });
});