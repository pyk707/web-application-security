const sql = require('mssql');

/*
 * /user에 대해 POST 요청을 받으며, 요청 몸체에 user_id 매개변수를 포함한다.
 *
 * SQL 조회가 수행되어, 주어진 `user_id` 매개변수와 `id`가 같은 사용자를
 * 데이터베이스에서 찾으려고 시도한다.
 *
 * 데이터베이스 질의 결과를 응답으로 반환한다.
 */
app.post('/users', function(req, res) {
  const user_id = req.params.user_id;
  
  /*
   * SQL 데이터베이스(서버 측)에 연결한다.
   */
  await sql.connect('mssql://username:password@localhost/database');
  
  /*
   * HTTP 요청 몸체로 받은 `user_id` 매개변수를 가지고 데이터베이스에
   * 질의한다.
   */
  const result = await sql.query('SELECT * FROM users WHERE USER = ' + user_id);
  
  /*
   * 요청자에게 HTTP 응답을 통해 SQL 질의 결과를 반환한다.
   */
  return res.json(result);
});
