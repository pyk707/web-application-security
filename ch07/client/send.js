const session = require('./session');
const messageUtils = require('./messageUtils');

/*
 * DOM을 순회하며 전송할  메시지 내용과 대상 메시지 수신자의 사용자명
 * 또는 고유 식별자(id)를 수집한다.
 *
 * messgeUtils를 호출해 제공된 데이터(메시지, 사용자)를 서버의 API에
 * 전송하기 위해 인증된 HTTP 요청을 생성한다.
 */
const send = function() {
    const message = document.querySelector('#send').value;
    const target = document.querySelector('#target').value;
    
    messageUtils.sendMessageToServer(session.token, target, message);
};
