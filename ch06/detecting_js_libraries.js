/*
 * 내장된 DOM 순회 함수를 사용해 현재 페이지에 임포트된
 * <script> 태그 목록을 빠르게 생성한다.
 */
const getScripts = function() {

    /*
     * 질의 선택자는 CSS 클래스를 참조할 경우 "."로 시작하며,
     * `id` 어트리뷰트를 참조할 경우 "#"로 시작한다.
     * HTML 엘리먼트를 참조할 경우 그러한 기호가 붙지 않는다.
     *
     * 이 경우, 'script'로 <script>의 전체 인스턴스를 찾는다.
     */
    const scripts = document.querySelectorAll('script');
    
    /*
     * 각 `<script>` 엘리먼트가 비어 있지 않은 소스(src)
     * 어트리뷰트를 포함하는지 확인한다.
     */
    scripts.forEach((script) => {
        if (script.src) {
            console.log(`i: ${script.src}`);
        }
    });
};
