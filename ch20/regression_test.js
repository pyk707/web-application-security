const tester = require('tester');
const requester = require('requester');

/*
 * `changeSubscriptionTier` 엔드포인트의 HTTP 옵션을 확인한다.
 *
 * 둘 이상의 동사를 수용하거나, 동사가 'POST'가 아니면 실패한다.
 * 시간제한에 걸리거나 옵션 요청이 성공하지 않으면 실패한다.
 */
const testTierChange = function() {
  requester.options('http://app.com/api/changeSubscriptionTier')
  .on('response', function(res) {
    if (!res.headers) {
      return tester.fail();
    } else {
      const verbs = res.headers['Allow'].split(',');
      if (verbs.length > 1) { return tester.fail(); }
      if (verbs[0] !== 'POST') { return tester.fail(); }
    }
  })
  .on('error', function(err) {
    console.error(err);
    return tester.fail();
  })
};
