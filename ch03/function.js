// 익명 함수
function () {};

// 글로벌하게 선언된 명명된 함수
a = function() {};

// 함수 스코프의 명명된 함수
var a = function() { };

// 블록 스코프의 명명된 함수
let a = function () {};

// 블록 스코프의 명명된 함수, 재할당 불가
const a = function () {};

// 부모 콘텍스트를 상속하는 익명 함수
() => {};

// 즉시 호출 함수 표현식(IIFE)
(function() { })();
