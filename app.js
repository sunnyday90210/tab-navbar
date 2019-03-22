function toggleItem(buttons) {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (e) {
      let current = this;
      for (let i = 0; i < buttons.length; i++) {
        if (current != buttons[i]) {
          buttons[i].classList.remove("active");
        } else if (current.classList.contains("active") === true) {
          current.classList.remove("active");
        } else {
          current.classList.add("active");
        }
      }
      e.preventDefault();
    });
  }
}
toggleItem(document.querySelectorAll(".btn"));