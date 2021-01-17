const session = require('./session');
const messageUtils = require('./messageUtils');
/*
 * 유틸을 사용해 HTTP GET을 통해 단일 메시지를 요청한 다음 그것을
 * #message 엘리먼트와 함께 #message-author 엘리먼트에 추가한 작성자에
 * 추가한다.
 *
 * 만약 HTTP 요청이 메시지 조회에 실패하면 콘솔에 오류를 기록한다.
 */
const displayMessage = function(msgId) {
    messageUtils.getMessageById(session.token, msgId)
    .then((msg) => {
        messageUtils.appendToDOM('#message', msg);
        messageUtils.appendToDOM('#message-author', msg.author);
    })
    .catch(() => {console.log('an error occured');});
};
