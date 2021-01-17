const saveMessage = require('./saveMessage');

/*
 * 클라이언트의 send.js로부터 데이터를 수신하고, 사용자의 퍼미션을
 * 검증하고, 모든 검증이 완료되면 제공된 메시지를 데이터베이스에
 * 저장한다.
 *
 * 성공하면 HTTP 상태 코드 200을 반환한다.
 */
const postMessage = function(req, res) {
    if (!req.body.token || !req.body.target || !req.body.message) {
        return res.sendStatus(400);
    }
    
    saveMessage(req.body.token, req.body.target, req.body.message)
    .then(() => {
        return res.sendStatus(200);
    })
    .catch((err) => {
        return res.sendStatus(400);
    });
};
