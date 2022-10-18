//id값 dynamic을 가진 문서 객체를 target에 할당
let target = document.querySelector('#dynamic');

function randomString() {
  let stringArr = [
    '안녕하세요',
    '어서오세요',
    '반갑습니다',
    'hyocho 입니다',
    'html css js를 배우고 있습니다',
  ];
  // 내장 객체함수 Math.random을 사용하여 무작위의 정수 받기
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  //단어 하나하나를 쪼개서 배열로 변환한 것을 selectStringArr에 할당
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
  //Element.classList.toggle
  //toggle, 전등 스위치를 껐다 켰다 하는 행위 처럼, 0과 1이 반복되는 행위를 의미.
  //즉, 기존 값이 0이었다면 1로 바뀌고 기존 값이 1이었다면, 0으로 바뀌게 된다
  //그래서 toggle 메서드는 클래스가 존재한다면 클래스를 제거하고, 클래스가 존재하지 않는다면 클래스를 추가하는 메서드
  target.classList.toggle('active');
}
setInterval(blink, 500);
