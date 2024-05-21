//메인 페이지 모달

function modal_on() {
  document.getElementById('modal').style.display = 'block';
  document.body.classList.add('stop-scroll');
}

function modal_off() {
  document.getElementById('modal').style.display = 'none';
  document.body.classList.remove('stop-scroll');
}


setTimeout(modal_on, 1000);


//체크박스
function checkSelectAll() {
  // 전체 체크박스
  const checkboxes = document.querySelectorAll('input[name="term"]');
  // 선택된 체크박스
  const checked = document.querySelectorAll('input[name="term"]:checked');
  // select all 체크박스
  const selectAll = document.querySelector('input[name="selectall"]');

  if (checkboxes.length === checked.length) {
    selectAll.checked = true;
  } else {
    selectAll.checked = false;
  }
}

function selectAll(selectAll) {
  const checkboxes = document.getElementsByName('term');

  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked;
  });
}

//찾기 페이지 reset
function reset() {
  document.getElementById('search').value = null;
}

//입력창 엔터
function enter(e) {
  if (e.keyCode == 13) {
    let link = 'result.html';
    let link_error = 'result_error.html';
    let txt = document.getElementById('search').value;

    if (txt == '스파이더맨') {
      location.href = link;
      return;
    } else {
      location.href = link_error;
      return;
    }
  }
}
