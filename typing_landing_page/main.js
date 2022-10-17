//dynamic이라는 id값을 가진 문서 객체를 target에 할당
let target = document.querySelector('#dynamic');

function randomString() {
  let stringArr = [
    'Learn to HTML',
    'Learn to CSS',
    'Learn to Javascript',
    'Learn to TypeScript',
    'Learn to React',
  ];
  // 내장 객체함수 Math.random을 사용하여 무작위의 정수 받기
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  //단어 하나하나가 쪼개져서 배열로 변경
  let selectStringArr = selectString.split('');

  return selectStringArr;
}

//타이핑 리셋
function resetTyping() {
  target.textContent = '';
  dynamic(randomString());
}

//한글자씩 텍스트 출력 함수
function dynamic(randomArr) {
  //randomArr의 길이가 0보다 크면
  if (randomArr.length > 0) {
    //randomArr의 한글자씩 빼서 textContent에 더한다
    target.textContent += randomArr.shift();
    setTimeout(function () {
      dynamic(randomArr);
    }, 80);
  } else {
    setTimeout(resetTyping, 3000);
  }
}

dynamic(randomString());
//커서가 깜빡거리는 함수 active라는 함수 추가/삭제를 반복적으로
function blink() {
  target.classList.toggle('active');
}
setInterval(blink, 500);
