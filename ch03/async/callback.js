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
  getUser(function(user) {
    getUserProfile(user, function(profile) {
      setUserProfileConfig(profile, config, function(result) {
        console.log('success!');
      });
    });
  });
  