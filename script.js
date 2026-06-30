
const text = "I turn data into insights through analysis, dashboards, and simple web applications.";
let i = 0;

function typingEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 30);
  }
}

const counters = document.querySelectorAll(".counter");

function runCounters() {
  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let count = 0;

    function update() {
      const increment = target / 40;

      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count);
        setTimeout(update, 30);
      } else {
        counter.innerText = target + "+";
      }
    }

    update();
  });
}

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

window.onload = () => {
  typingEffect();
  runCounters();
};



