const currentUser = require('../currentUser');
const modifySubscription = require('../../modifySubscription');

const tiers = ['individual', 'business', 'corporation'];

/*
 * 현재 인증된 사용자를 대신해 HTTP GET을 받는다.
 *
 * `newTier` 매개변수를 받아서 해당 티어에 대한 사용자 구독의 업데이트를
 *  시도한다.
 */
app.get('/changeSubscriptionTier', function(req, res) {
  if (!currentUser.isAuthenticated) { return res.sendStatus(401); }
  if (!req.params.newTier) { return res.sendStatus(400); }
  if (!tiers.includes(req.params.newTier)) { return res.sendStatus(400); }
  
  modifySubscription(currentUser, req.params.newTier)
  .then(() => {
    return res.sendStatus(200);
  })
  .catch(() => {
    return res.sendStatus(400);
  });
});
