export class RevealOnScroll {
  constructor() {
    this.itemsToReveal = document.querySelectorAll(".reveal-item");
    this.hideInitially();
    this.events();
  }
  events() {
    document.addEventListener("scroll", () => {
      this.itemsToReveal.forEach((el) => {
        this.calculateScrollTo(el);
      });
    });
  }
  calculateScrollTo(el) {
    let scrollPercent =
      (el.getBoundingClientRect().y / window.innerHeight) * 100;

    if (scrollPercent < 75) {
      el.classList.remove("hide");
      el.classList.add("fade");
    }
  }
  hideInitially() {
    this.itemsToReveal.forEach((el) => el.classList.add("hide"));
  }
}
