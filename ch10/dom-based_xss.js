/*
 * URL의 해시 객체 #<x>를 찾는다.
 * findNumberOfMatches() 함수를 가지고 입력된 해시값과
 * 일치하는 것을 모두 찾는다.
 */
const hash = document.location.hash;
const funds = [];
const nMatches = findNumberOfMatches(funds, hash);

/*
 * 사용자 경험을 향상하기 위해, 일치하는 개수와 DOM에 대한
 * 해시값을 기록한다.
 */
document.write(nMatches + ' matches found for ' + hash);
