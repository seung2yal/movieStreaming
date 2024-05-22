let premium = document.getElementById('premium');
let basic = document.getElementById('basic');

function select() {
  premium.classList.remove('select');
  basic.classList.remove('select');
  this.classList += ' select';
}

premium.addEventListener('click', select);
basic.addEventListener('click', select);
