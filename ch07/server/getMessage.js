const session = require('./session');

/*
 * 서버에 메시지를 요청하고 퍼미션을 검증해, 만약 성공적이면
 * 데이터베이스에서 메시지를 꺼낸 다음 클라이언트를 통해 요청한 사용자에게
 * 메시지를 반환한다.
 */
const getMessage = function(req, res) {
    if (!req.body.token) { return res.sendStatus(401); }
    if (!req.body.messageId) { return res.sendStatus(400); }
    
    session.requestMessage(req.body.token, req.body.messageId)
    .then((msg) => {
        return res.send(msg);
    })
    .catch((err) => {
        return res.sendStatus(400);
    });
};
