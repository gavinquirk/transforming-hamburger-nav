const wrapper = document.getElementById('hamburger-wrapper');
const menuBtn = document.getElementsByClassName('hamburger-button');
// const navOverlay = document.getElementById('nav-overlay');
const navOverlay = document.getElementsByClassName('nav-overlay');

// When menu button is clicked
wrapper.onclick = () => {
  // Toggle closed class on hamburger
  menuBtn[0].classList.toggle('hamburger-closed');
  // Toggle open overlay
  navOverlay[0].classList.toggle('nav-open');
};
