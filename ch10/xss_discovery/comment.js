/*
 * div 유형의 DOM 노드를 생성한다.
 * 이 div에 추가하는 문자열은 텍스트가 아닌 DOM으로 해석된다.
 */
const comment = '내 <strong>의견</strong>';
const div = document.createElement('div');
div.innerHTML = comment;

/*
 * comment의 innerHTML DOM을 가지고 div를 DOM에 추가한다.
 * comment는 DOM으로 해석되므로, 로딩될 때 DOM 엘리먼트로 파싱 및 번역된다.
 */
const wrapper = document.querySelector('#commentArea');
wrapper.appendChild(div);
