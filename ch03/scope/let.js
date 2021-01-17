const func = function() {
  if (true) {
    // if 블록에서 age를 정의
    let age = 25;
  }
  
  /*
   * console.log(age)는 `undefined`를 반환한다.
   *
   * `let`은 `var`와 달리 가장 가까운 블록에 바인딩하기 때문이다.
   * 가장 가까운 함수가 아니라 가장 가까운 블록에 바인딩하는 스코프가
   * 일반적으로 가독성이 더 좋고 스코프 관련 버그도 적게 일으킨다.
   */
  console.log(age);
};