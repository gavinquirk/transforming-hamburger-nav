const wrapper = document.getElementById('menu-wrapper');
const menuBtn = document.getElementsByClassName('menu-button');

// When menu button is clicked, toggle 'closed' class
wrapper.onclick = () => {
  menuBtn[0].classList.toggle('closed');
};
