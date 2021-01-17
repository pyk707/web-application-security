/*
 * 질의를 붙인 새로운 HTTP GET 요청을 생성.
 *
 * 성공해 질의가 응답에 반영된다.
 */
const xhr = new XMLHttpRequest();
const params = 'id=12345';
xhr.onreadystatechange = function() {
  console.log(xhr.responseText);
}
xhr.open('GET', `https://www.mega-bank.com/account?${params}`, true);
xhr.send();
