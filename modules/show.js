export function show() {
  const heroContentTitle = document.querySelector("#hero-content-title");
  const heroContentJobs = document.querySelector("#hero-content-jobs");
  const heroContentJobsTwo = document.querySelector("#hero-content-jobs-two");
  const floatIconOne = document.querySelector(".float-one");
  const floatIconTwo = document.querySelector(".float-two");
  const floatIconThree = document.querySelector(".float-three");
  setTimeout((e) => {
    floatIconOne.classList.remove("hide");
  }, 1200);
  setTimeout((e) => {
    floatIconTwo.classList.remove("hide");
  }, 1400);
  setTimeout((e) => {
    floatIconThree.classList.remove("hide");
  }, 1600);
  setTimeout((e) => {
    heroContentTitle.classList.remove("hide");
    heroContentTitle.classList.add("fade");
  }, 1800);
  setTimeout((e) => {
    heroContentJobs.classList.remove("hide");
    heroContentJobs.classList.add("fade");
  }, 2000);
  setTimeout((e) => {
    heroContentJobsTwo.classList.remove("hide");
    heroContentJobsTwo.classList.add("fade");
  }, 2200);
}
