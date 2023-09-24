export function navigation() {
  const navMenu = document.querySelector(".navlinks");
  navMenu.getAttribute("aria-expanded") == "false"
    ? handleOpen()
    : handleClose();
}

export function handleOpen() {
  document.querySelector(".navlinks").setAttribute("aria-expanded", "true");
}

export function handleClose() {
  document.querySelector(".navlinks").setAttribute("aria-expanded", "false");
}
