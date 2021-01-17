const denylist = ['http://www.evil.com', 'http://www.badguys.net'];

/*
 * 도메인이 통합하도록 허락되었는지 판별한다.
 */
const isDomainAccepted = function(domain) {
  return !denylist.includes(domain);
};
