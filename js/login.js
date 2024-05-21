//정규식 유효성 검사 및 이름 길이 체크
function emailCheck(email_address) {
  email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  if (!email_regex.test(email_address)) {
    return false;
  } else {
    return true;
  }
}

function pwCheck(password) {
  password_regex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
  if (!password_regex.test(password)) {
    return false;
  } else {
    return true;
  }
}

function nameCheck(name) {
  if (!(name.length >= 2)) {
    return false;
  } else {
    return true;
  }
}

//버튼 플래그
let passName = false;
let passEmail = false;
let passPW = false;
let passCheckbox = false;

//로그인
//유효한 이메일과 비밀번호를 입력했을때만 버튼이 활성화됩니다.
let loginEmail = document.getElementById('loginEmail');
let loginPW = document.getElementById('loginPW');
let loginBtn = document.getElementById('loginBtn');

const checkIdPW = () => {
  emailCheck(loginEmail.value) && pwCheck(loginPW.value) ? (loginBtn.disabled = false) : (loginBtn.disabled = true);
};

loginEmail.addEventListener('keyup', checkIdPW);
loginPW.addEventListener('keyup', checkIdPW);

// email: hello@gmail.com, PW: qwerty123!로 지정하여 검사합니다.
const submitCheck = () => {
  loginEmail.value == 'hello@gmail.com' && loginPW.value == 'qwerty123!'
    ? (location.href = 'index.html')
    : (document.getElementsByClassName('loginError')[0].style.display = 'block');
  event.preventDefault();
};

loginBtn.addEventListener('click', submitCheck);

//회원가입

function validateName() {
  let input_name = document.getElementById('name').value;
  if (nameCheck(input_name)) {
    document.getElementById('name').style.borderColor = '#ccc';
    document.getElementsByClassName('errorText')[0].style.display = 'none';
    passName = true;
  } else {
    document.getElementById('name').style.borderColor = '#E41D12';
    document.getElementsByClassName('errorText')[0].style.display = 'block';
    passName = false;
  }
}

function validateEmail() {
  let input_email = document.getElementById('email').value;
  if (emailCheck(input_email)) {
    document.getElementById('email').style.borderColor = '#ccc';
    document.getElementsByClassName('errorText')[1].style.display = 'none';
    passEmail = true;
  } else {
    document.getElementById('email').style.borderColor = '#E41D12';
    document.getElementsByClassName('errorText')[1].style.display = 'block';
    passEmail = false;
  }
}

function validatePW() {
  let input_pw = document.getElementById('PW').value;
  if (pwCheck(input_pw)) {
    document.getElementById('PW').style.borderColor = '#ccc';
    document.getElementsByClassName('errorText')[2].style.display = 'none';
    passPW = true;
  } else {
    document.getElementById('PW').style.borderColor = '#E41D12';
    document.getElementsByClassName('errorText')[2].style.display = 'block';
    passPW = false;
  }
}

//체크박스 체크
let checkboxAll = document.getElementsByClassName('checkbox_label');

function checkboxVal() {
  let checkbox1 = document.getElementsByName('term')[1];
  let checkbox2 = document.getElementsByName('term')[2];
  let checkbox3 = document.getElementsByName('term')[3];
  checkbox1.checked && checkbox2.checked && checkbox3.checked ? (passCheckbox = true) : (passCheckbox = false);
}

//버튼 활성화
function btnOnOff() {
  let signinBtn = document.getElementById('signinBtn');
  passName && passEmail && passPW && passCheckbox ? (signinBtn.disabled = false) : (signinBtn.disabled = true);
}
