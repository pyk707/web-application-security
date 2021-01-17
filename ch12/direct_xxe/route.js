import xmltojpg from './xmltojpg';

/*
 * XML 객체를 JPG 이미지로 변환한다.
 *
 * 요청자에게 이미지 데이터를 반환한다.
 */
app.post('/screenshot', function(req, res) {
  if (!req.body.dom) { return res.sendStatus(400); }
  xmltojpg.convert(req.body.dom)
  .then((err, jpg) => {
    if (err) { return res.sendStatus(400); }
    return res.send(jpg);
  });
});
