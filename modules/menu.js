export function menu() {
  const menu = document.querySelector("#bar");
  const toggle = document.querySelector("#menuToggle");
  menu.addEventListener("click", () => {
    if (toggle.style.display === "block") {
      toggle.style.display = "none";
    } else {
      toggle.style.display = "block";
    }
  });
}
