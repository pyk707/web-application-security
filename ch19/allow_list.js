const allowlist = ['https://happy-site.com', 'https://www.my-friends.com'];

/*
 * 도메인이 통합하도록 허용되었는지 판별한다.
 */
const isDomainAccepted = function(domain) {
  return allowlist.includes(domain);
};
