/*
 * `content` 엘리먼트에서 HTML DOM을 수집하고 XML 파서를 호출해
 * DOM 텍스트를 XML로 변환한다.
 *
 * HTTP를 통해 XML을 function()에 보내면 주어진 XML을 가지고
 * 스크린숏을 생성한다.
 *
 * 스크린숏을 분석할 수 있게 지원 인력에게 보낸다.
 */
const screenshot = function() {
  try {
    /*
     * `content` 엘리먼트를 XML로 변환한다.
     * HTML은 XML의 부분집합이므로 대체로 성공한다.
     * 실패하면 예외를 처리한다.
     */
    const div = document.getElementById('content').innerHTML;
    const serializer = new XMLSerializer();
    const dom = serializer.serializeToString(div);
    
    /*
     * DOM이 XML로 변환되면, XML을 이미지로 변환하도록 엔드포인트에
     * 요청한다. 결과는 스크린샷이 된다.
     */
    const xhr = new XMLHttpRequest();
    const url = 'https://util.mega-bank.com/screenshot';
    const data = new FormData();
    data.append('dom', dom);
    
    /*
     * XML을 이미지로 변환하는 데 성공하면, 분석을 위해 스크린숏을
     * 지원부서에 보낸다.
     *
     * 실패하면 사용자에게 경고한다.
     */
    xhr.onreadystatechange = function() {
      sendScreenshotToSupport(xhr.responseText, (err) => {
        if (err) { alert('스크린숏을 전송할 수 없습니다.') }
        else { alert('스크린숏을 지원 부서에 전송했습니다!'); }
      });
    }
    
    xhr.send(data);
  } catch (e) {
    
    /*
     * 브라우저가 이 기능을 지원하지 않으면 사용자에게 경고한다.
     */
    alert('브라우저가 이 기능을 지원하지 않습니다. 업그레이드를 고려하세요.');
  }
};
