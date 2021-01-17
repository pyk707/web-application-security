const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const fs = require('fs');

/*
 * 사용자가 제공한 이미지를 서버에 업로드한다.
 *
 * 서버 드라이브 공간을 절약하기 위해 imagemin을 사용해 이미지를 압축한다.
 */
app.post('/uploadImage', function(req, res) {
  if (!session.isAuthenticated) { return res.sendStatus(401); }

  /*
   * 원시 이미지를 디스크에 기록한다.
   */
  fs.writeFileSync(`/images/raw/${req.body.name}.png`, req.body.image);
  
  /*
   * 원시 이미지를 압축해 디스크 용량을 적게 차지하는 최적화된 이미지를 얻는다.
   */
  const compressImage = async function() {
    const res = await imagemin([`/images/raw/${req.body.name}.png`],
    `/images/compressed/${req.body.name}.jpg`);
    
    return res;
  };
  
  /*
   * 요청자가 제공한 이미지를 압축하고, 압축이 완료되면 스크립트를
   * 이어서 실행한다.
   */
  const res = await compressImage();
  
  /*
   * 압축된 이미지에 대한 링크를 클라이언트에게 반환한다.
   */
  return res.status(200)
  .json({url: `https://media.mega-bank.com/images/${req.body.name}.jpg` });
});
