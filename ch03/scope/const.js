const func = function() {
  const age = 25;
  
  /*
   * 다음과 같은 오류가 발생한다. TypeError: invalid assignment to const `age`
   *
   * `const`는 `let`과 마찬가지로 블록 스코프가 적용된다.
   * 주된 차이점은 `const` 변수는 인스턴스화된 이후에 재할당을
   * 지원하지 않는다는 점이다.
   *
   * 객체가 const로 선언되면 그것의 프로퍼티는 여전히 변경 가능하다.
   * 그 결과 `const`는 `age`에 대한 포인터가 변하지 않음을 보증하지만
   * `age`의 값이나 `age`의 프로퍼티가 변하는지는 신경 쓰지 않는다.
   */
  age = 35;
};
