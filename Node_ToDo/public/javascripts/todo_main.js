/*
바닐라 JS 코딩 
Jquery등 front 라이브러리, 프레임워크를 사용하지 않고
순수 JS를 활용한 코딩 
*/
var todo_list = [];
document.addEventListener("DOMContentLoaded", function () {
  const btn_new = document.querySelector("#btn-new");
  btn_new.addEventListener("click", function () {
    alert(JSON.parse(todo_data).todo);
    localStorage.setItem("todo_data", todo_data);
  });
  document.querySelector("#btn-save").addEventListener("click", function () {
    let todo_input = document.querySelector("input");
    todo_input = document.querySelector(
      "section.todo_main form input[name='todo']"
    );
    let todo_value = todo_input.value;
    if (todo_value === "") {
      alert("할일을 입력해 주세요");
      document.querySelectorAll("input")[0].focus();
      document
        .querySelector("section.todo_main form input[name='todo']")
        .focus();
      return false;
    }
    if (confirm("저장할깝쇼")) {
      document.querySelector("form").submit();
    }
  });
});
