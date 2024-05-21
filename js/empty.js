//정규식 유효성 검사
function emailCheck(email_address){     
	email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
	if(!email_regex.test(email_address)){ 
		return false; 
	}else{
		return true;
	}
}

function pwCheck(password){     
	password_regex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
	if(!password_regex.test(password)){ 
		return false; 
	}else{
		return true;
	}
}




/*로그인*/
//유효한 이메일과 비밀번호를 입력했을때만 버튼이 활성화됩니다.
let loginEmail = document.getElementById("loginEmail");
let loginPW = document.getElementById("loginPW");
let loginBtn = document.getElementById("loginBtn");

const checkIdPW = () => {    
	emailCheck(loginEmail.value) && pwCheck(loginPW.value)
    	? loginBtn.disabled = false
    	: loginBtn.disabled = true
}					

loginEmail.addEventListener('keyup', checkIdPW);
loginPW.addEventListener('keyup', checkIdPW);

// email: hello@googl.com, PW: qwerty123!로 지정하여 검사합니다.


/*회원가입*/


function validateName() {
	let input_name = document.getElementById("name").value;
	if(input_name.length >= 2) {
		document.getElementById("name").style.borderColor = "#ccc";
		document.getElementsByClassName("errorText")[0].style.display = "none";
	} else {
		document.getElementById("name").style.borderColor = "#E41D12";
		document.getElementsByClassName("errorText")[0].style.display = "block";
	}
}

function validateEmail() {
	let input_email = document.getElementById('email').value;
	
	if (emailCheck(input_email)) {
		document.getElementById("email").style.borderColor = "#ccc";
		document.getElementsByClassName("errorText")[1].style.display = "none";
	} else {
		document.getElementById("email").style.borderColor = "#E41D12";
		document.getElementsByClassName("errorText")[1].style.display = "block";
	}
}

function validatePW() {
	let input_pw = document.getElementById('PW').value;
	
	if (pwCheck(input_pw)) {
		document.getElementById("PW").style.borderColor = "#ccc";
		document.getElementsByClassName("errorText")[2].style.display = "none";
	} else {
		document.getElementById("PW").style.borderColor = "#E41D12";
		document.getElementsByClassName("errorText")[2].style.display = "block";
	}
}

//24.05.16 16:52