const exec = require('child_process').exec;
const converter = require('converter');

const defaultOptions = '-s 1280x720';

/*
 * HTTP post를 시작한 사람이 제공한 영상의 업로드를 시도한다.
 *
 * 스트리밍 호환성을 개선하기 위해 영상의 해상도가 감소한다.
 * 이 작업에 `converter`라는 라이브러리를 사용한다.
 */
app.post('/uploadVideo', function(req, res) {
  if (!session.isAuthenticated) { return res.sendStatus(401); }

  // HTTP 요청 몸체로부터 데이터를 수집한다
  const videoData = req.body.video;
  const videoName = req.body.name;
  const options = defaultOptions + req.body.options;

  exec(`convert -d ${videoData} -n ${videoName} -o ${options}`);
});
