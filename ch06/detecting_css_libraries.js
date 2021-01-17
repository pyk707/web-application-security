/*
 * 브라우저에 내장된 DOM 순회를 사용해 `stylesheet`
 * 값을 가진 `rel` 어트리뷰트를 포함하는 모든 `<link>`
 * 엘리먼트를 재빨리 집계한다.
 */
const getStyles = function() {
    const scripts = document.querySelectorAll('link');
    
    /*
     * 각 스크립트에서 `link` 엘리먼트의 `rel` 어트리뷰트가
     * `stylesheet` 값을 갖는지 확인한다.
     *
     * link는 CSS의 로딩, 프리로딩, 아이콘, 검색 등에 사용되는 다목적 엘리먼트다.
     */
    scripts.forEach((link) => {
        if (link.rel === 'stylesheet') {
            console.log(`i: ${link.getAttribute('href')}`);
        }
    });
};
