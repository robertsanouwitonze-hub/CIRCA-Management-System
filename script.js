const menuButton = document.getElementById("menuButton");
const portalMenu = document.getElementById("portalMenu");

menuButton.addEventListener("click", () => {
  const open = portalMenu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", open);
});

document.addEventListener("click", (event) => {
  if (!portalMenu.contains(event.target) && !menuButton.contains(event.target)) {
    portalMenu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});
