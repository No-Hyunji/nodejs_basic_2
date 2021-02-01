console.log("===========================================");
console.log("JS에서 eq 비교 연산자");
/*
JS에서 같은 값을 비교할 때 사용하는 연산자가 2가지 있다. 
동등연산자 : ==
평등연산자 : ===
*/
let b = 0 == "";
console.log("0 == '' : ", b);
b = 0 === "";
console.log("0 == '' : ", b);

// JS에서는 false인 경우가 몇가지 있는데
// 비교연산자, 관계연산자와 연결했을 때 false값을 갖는 친구들
b = "" || null || undefined || NaN || 0 || "없음";
console.log(b);

// 어떤(변수에 저장된) 값을 비교하여 정확히 일치하는지 알고싶을 때는
// 동등연산자가 아닌 평등연산자를 사용하는 것이 정확한 결과를 낼 수 있다.
// 문자열 "1"을 숫자형으로 또는 숫자1을 문자열형 "1"로 자동 형변환을 하여 비교해버린다.
// 어떤 값을 DB등에서 읽어왔을 때 순수하게 내용으로만 비교하고자 할 때는 필요
// 하지만 정확한 값을 비교하고자 할 때는 원하지 않는 결과를 내놓기도 한다.
b = "1" == 1;
console.log(b);
b = "1" === 1;
console.log(b);

b = null == undefined;
console.log(b);

/*
(==) 동등연산자는 값을 자동형변환하거나 하여 내용물이 같은지만 비교하는 연산자
(===) 평등연산자는 먼저 형(type)을 비교하고 다르면 false 같으면 내용을 비교한다. 
*/
console.log(0 == false);
console.log(0 === false);

let num = 0;
// if의 조건문 안에 들어있는게 true여야만 중괄호 안에것들이 실행된다.

// And Also(기본값)
if (num && ++num) {
}
console.log("num && ++num : ", num);

// Or Else
if (num || ++num) {
}
console.log("num || ++num : ", num);
