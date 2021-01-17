const session = require('./session');

/*
 * 메시지 객체를 표현한다. 스키마의 역할을 하여 모든 메시지 객체가
 * 같은 필드를 포함하도록 한다.
 */
const Message = function(params) {
    user_from = session.getUser(params.token),
    user_to = params.target,
    message = params.message
};

module.exports = Message;
