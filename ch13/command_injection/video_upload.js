const exec = require('child_process').exec;
const fs = require('fs');
const safe_converter = require('safe_converter');

/*
 * 서버에 저장할 영상을 업로드한다.
 *
 * `safe_converter` 라이브러리를 사용해 원시 영상을 변환한 다음 디스크에서
 * 원본을 삭제하고 요청자에게 HTTP 200 상태 코드를 반환한다.
 */
app.post('/uploadVideo', function(req, res) {
  if (!session.isAuthenticated) { return res.sendStatus(401); }

  /*
   * 원시 영상 데이터를 디스크에 기록한다. 기록된 파일은 나중에
   * 압축된 다음 디스크에서 삭제된다.
   */
  fs.writeFileSync(`/videos/raw/${req.body.name}`, req.body.video);
  
  /*
   * 최적화되지 않은 원시 영상을 변환해 최적화된 영상을 생성한다.
   */
  safe_converter.convert(`/videos/raw/${req.body.name}`,
  `'/videos/converted/${req.body.name}`)
  .then(() => {
    
    /*
     * 원시 영상 파일이 필요없어지면 제거하고 최적화된 영상
     * 파일만 남긴다.
     */
    exec(`rm /videos/raw/${req.body.name}`);
    return res.sendStatus(200);
  });
});
