document
  .querySelectorAll("button")
  .forEach((button) => button.setAttribute("data-title", button.innerText));

function toggleMenu() {
  const menu = document.querySelector(".menu");
  const burgerImage = document.querySelector(".burger img");
  const menuOpen = !menu.classList.contains("hidden");
  if (menuOpen) {
    burgerImage.setAttribute("src", "img/burger.svg");
    menu.classList.add("hidden");
  } else {
    window.scrollTo(0, 0);
    burgerImage.setAttribute("src", "img/Close-Icon.svg");
    menu.classList.remove("hidden");
  }
}

document.querySelector(".burger").addEventListener("click", toggleMenu);
