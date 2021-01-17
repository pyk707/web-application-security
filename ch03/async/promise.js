const config = {
    privacy: public,
    acceptRequests: true
  };
  
  /*
   * 먼저 사용자 객체를 서버에 요청한다.
   * 완료되면 사용자 프로필을 서버에 요청한다.
   * 완료되면 사용자 프로필을 config를 설정한다.
   * 완료되면 "success!"를 로그에 출력한다.
   */
  const promise = new Promise((resolve, reject) => {
    getUser(function(user) {
      if (user) { return resolve(user); }
      return reject();
    });
  }).then((user) => {
    getUserProfile(user, function(profile) {
      if (profile) { return resolve(profile); }
      return reject();
    });
  }).then((profile) => {
    setUserProfile(profile, config, function(result) {
      if (result) { return resolve(result); }
      return reject();
    });
  }).catch((err) => {
    console.log('an error occured!');
  });
  