<?php if ($_SERVER['REQUEST_METHOD'] != 'POST') {
  echo'
    <div class="row">
      <div class="small-12 columns">
        <form method="post" action="">
          <fieldset class="panel">
            <center>
              <h1>Sign In</h1><br>
            </center>
            <label>
              <input type="text" id="username" name="username"
              placeholder="Username">
            </label>
            <label>
              <input type="password" id="password" name="password"
              placeholder="Password">
            </label>
            <center>
              <input type="submit" class="button" value="Sign In">
            </center>
          </fieldset>
        </form>
      </div>
    </div>';
} else {
  // 사용자는 이미 로그인 폼을 채웠다.
  // config.php에서 데이터베이스 정보를 끄집어낸다.
  $servername = getenv('IP');
  $username = $mysqlUsername;
  $password = $mysqlPassword;
  $database = $mysqlDB;
  $dbport = $mysqlPort;
  $database = new mysqli($servername, $username, $password, $database,$dbport);
  if ($database->connect_error) {
    echo "ERROR: Failed to connect to MySQL";
    die;
  }
  $sql = "SELECT userId, username, admin, moderator FROM users WHERE username =
    '".$_POST['username']."' AND password = '".sha1($_POST['password'])."';";
  $result = mysqli_query($database, $sql);
}
