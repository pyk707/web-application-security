/*
 * 라우트 예제.
 *
 * HTTP 요청에 의해 제공된 질의를 요청자에게 반환한다.
 * 질의가 제공되지 않으면 오류를 반환한다.
 */
app.get('/account', function(req, res) {
    if (!req.query) { return res.sendStatus(400); }
      return res.json(req.query);
  });
  