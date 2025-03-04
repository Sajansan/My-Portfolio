document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

let lastScrollY = 0; // Keeps track of the last scroll position

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY + 150) {
    // Scroll down 150px: Hide navbar
    header.classList.add("hidden");
    lastScrollY = currentScrollY; // Update the last scroll position
  } else if (lastScrollY - currentScrollY > 50) {
    // Scroll up 50px: Show navbar
    header.classList.remove("hidden");
    lastScrollY = currentScrollY; // Update the last scroll position
  }
});

const sections = document.querySelectorAll("section"); // Select all sections
const navLinks = document.querySelectorAll(".navbar a"); // Select all navbar links

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const activeId = entry.target.id; // Get the ID of the current section
        navLinks.forEach((link) => {
          link.classList.remove("active"); // Remove 'active' from all links
          if (link.getAttribute("href").includes(activeId)) {
            link.classList.add("active"); // Add 'active' to the current link
          }
        });
      }
    });
  },
  {
    threshold: 0.6, // Trigger when 60% of the section is visible
  }
);

// Observe each section
sections.forEach((section) => observer.observe(section));




// AOS.init({
//   duration: 1000, // Animation duration in milliseconds
//   once: true, // Animation happens only once
// });









