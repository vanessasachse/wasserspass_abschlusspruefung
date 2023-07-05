const navToggle = document.querySelector(".mobile-nav");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener('click', () => {
    primaryNav.hasAttribute("data-visible") ? navToggle.setAttribute('aria-expanded', false) : navToggle.setAttribute('aria-expanded', true)
    primaryNav.toggleAttribute("data-visible");
})

const slider = new A11YSlider(document.querySelector(".slider"), {
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    infinite: true,
    autoplayHoverPause: false
});