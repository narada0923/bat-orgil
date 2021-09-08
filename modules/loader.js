const loader = document.querySelector(".loader");

export function hide() {
  setTimeout((e) => {
    loader.style.display = "none";
  }, 1000);
}
