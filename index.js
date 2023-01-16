/* /* const nav = document.querySelector("nav");

const topSection = document.querySelector(".search-main-container");

const navObserver = new IntersectionObserver((entries, observer) => {
  const entry = entries[0];
  if (!entry.isIntersecting) {
    nav.classList.add("on-scroll");
  }
}, {});

navObserver.observe(topSection);


const navbar = document.querySelector(".navbar");

window.onscroll = () => {
  this.scrollY > 20
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky");
};
 */
