const sections = document.querySelectorAll(".company");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    if(sec.getBoundingClientRect().top < window.innerHeight - 120){
      sec.classList.add("show");
    }
  });
});
