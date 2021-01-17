import session from '../authentication/session';
import transferFunds from '../banking/transfers';

/*
 * 인증된 사용자의 은행 계좌로부터, 인증된 사용자가 선택한
 * 다른 은행 계좌로 송금한다.
 *
 * 인증된 사용자는 송금할 금액을 선택할 수 있다.
 */
app.get('/transfer', function(req, res) {
  if (!session.isAuthenticated) { return res.sendStatus(401); }
  if (!req.query.to_user) { return res.sendStatus(400); }
  if (!req.query.amount) { return res.sendStatus(400); }

  transferFunds(session.currentUser, req.query.to_user, req.query.amount,
  (error) => {
              if (error) { return res.sendStatus(400); }
                return res.json({
                  operation: 'transfer',
                  amount: req.query.amount,
                  from: session.currentUser,
                  to: req.query.to_user,
                  status: 'complete'
    });
  });
});
