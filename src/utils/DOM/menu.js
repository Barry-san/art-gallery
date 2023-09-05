export function navigation() {
  const navMenu = document.querySelector(".navlinks");

  let open = navMenu.getAttribute("aria-expanded");
  open === "false"
    ? navMenu.setAttribute("aria-expanded", "true")
    : navMenu.setAttribute("aria-expanded", "false");
}
