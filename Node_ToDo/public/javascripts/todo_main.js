/*
바닐라 JS 코딩 
Jquery등 front 라이브러리, 프레임워크를 사용하지 않고
순수 JS를 활용한 코딩 
*/
function btn_click() {
  // alert("버튼이 클릭됨");

  // id가 todo로 되어있는 input tag에 사용자가 입력한 문자열을 추출하여
  // todo라는 변수에 담아라
  // input tag가 아닐 경우에는 innerHTML이라는 속성을 통해서 값을 추출한다.
  let todo = document.getElementById("todo").value;
  // alert(todo);
}

function main_title_click() {
  // id가 main_title로 되어있는(일반적인 tag)의 text문자열을 추출하여
  // innerHTML, innerText 속성을 사용하여 문자열 추출
  // 간혹 일부 브라우저에서 innerText속성이 안되는 경우도 있다.
  // 또한 innerText는 대소문자를 잘 봐야한다. innerTEXT로 작성하면 안된다
  // text변수에 저장
  let text = document.getElementById("main_title").innerHTML;
  alert(text);
}

// html DOM(Document Object Model)전체에 이벤트를 설정하는 함수
// $(document.ready())
// 이 이벤트 핸들러를 사용하게 되면
// DOM 문서가 모두 화면에 그려지기 전에
// JS 코드가 실행되는 것을 방지할 수 있다.
// 즉 DOM 문서가 모두 화면에 그려진 후 JS 코드가 작동되도록 하기 위한 방법
// $(function(){})이 코드와 같다.
document.addEventListener("DOMContentLoaded", function () {
  // id가 todo인 tag를 todo라는 변수에 저장하라
  // todo는 id가 todo인 document object가 된다.
  let todo = document.getElementById("todo");

  // id가 todo인 input박스에 반갑습니다. 라는 문자열을 세팅하라
  // todo.value = "반갑습니다";

  // tag에 id값을 지정했을 때 사용하는 코드
  // id가 btn-save인 tag(button)에 click event 핸들러 설정

  document.getElementById("btn-save").addEventListener("click", function () {
    // alert(todo.value);
    let todo_value = todo.value;

    if (todo_value == "") {
      alert("할일을 입력해주세요!");
      todo.focus();
      return false;
    }

    if (confirm("저장할까요??")) {
      // 서버로 데이터를 전송하라
      document.getElementsByTagName("form")[0].submit();
    }
  });

  // id가 지정되지 않았을 때
  // tag이름으로 찾을경우는 같은 이름의 tag가 여러개 있을 수 있기 때문에
  // 무조건 배열로 값이 추출된다.
  // tag이름으로 getElements를 수행한 다음에는 배열요소를 지정하여
  // 어떤 tag를 선택할지 지정을 해 주어야 한다.
  /*
  let btn_save = document.getElementsByTagName("button")[0];
  btn_save.addEventListener("click", function () {
    let inputs = document.getElementsByName("input");
    let todo_input = inputs[0];
    let todo_value = todo.value;

    if (todo_value === "") {
      alert("할일을 반드시 입력해주세요");
      document.getElementsByName("todo")[0].focus();
      return false;
    }

    if (confirm("저장할까요")) {
      document.getElementsByName("form")[0].submit();
    }

    alert("todo_value");
  });
*/
});
