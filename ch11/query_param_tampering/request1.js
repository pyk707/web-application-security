/*
 * 질의를 붙이지 않은 새로운 HTTP GET 요청을 생성.
 *
 * 실패해 오류가 반환된다.
 */
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  console.log(xhr.responseText);
}
xhr.open('GET', 'https://www.mega-bank.com/account', true);
xhr.send();
