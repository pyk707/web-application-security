const func1 = function() {
  if (true) {
    // if 블록 내에 age를 정의
    var age = 25;
  }
  /*
  * age를 로깅하면 25가 반환된다.
  *
  * 이것은 var 식별자가 가장 가까운 블록이 아니라
  * 가장 가까운 함수에 바인딩하기 때문이다.
  */
  console.log(age);
};