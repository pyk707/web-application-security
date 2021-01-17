const crypto = require('../util/crypto');
const dateTime = require('../util/dateTime');
const session = require('../util/session');
const logger = require('../util/logger');

const validLocations = [
 'https://www.mega-bank.com',
 'https://api.mega-bank.com',
 'https://portal.mega-bank.com'
];

const validateHeaders = function(headers, method) {
  const origin = headers.origin;
  const referer = headers.referer;
  let isValid = false;
  
  if (method === 'POST') {
    isValid = validLocations.includes(referer) && validLocations.includes(origin);
  } else {
    isValid = validLocations.includes(referer);
  }
  
  return isValid;
};

const validateCSRFToken = function(token, user) {
  // CSRF 토큰으로부터 데이터를 얻음
  const text_token = crypto.decrypt(token);
  const user_id = text_token.split(':')[0];
  const date = text_token.split(':')[1];
  const nonce = text_token.split(':')[2];
  
  // 데이터의 유효성을 검사
  let validUser = false;
  let validDate = false;
  let validNonce = false;
  if (user_id === user.id) { validUser = true; }
  if (dateTime.lessThan(1, 'week', date)) { validDate = true; }
  if (crypto.validateNonce(user_id, date, nonce)) { validNonce = true; }
  
  return validUser && validDate && validNonce;
};

const CSRFShield = function(req, res, next) {
  if (!validateHeaders(req.headers, req.method) ||
     !validateCSRFToken(req.csrf, session.currentUser)) {
     logger.log(req);
    return res.sendStatus(401);
  }
  
  return next();
};
