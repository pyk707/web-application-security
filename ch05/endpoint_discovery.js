/*
 * 어떤 URL(API 엔드포인트와 연관)이 주어졌을 때, 주어진
 * 엔드포인트에 어느 HTTP 동사가 대응되는지 결정하기 위해
 * 다양한 HTTP 동사를 가지고 요청을 시도한다.
 */
const discoverHTTPVerbs = function(url) {
    const verbs = ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'];
    const promises = [];
    
    verbs.forEach((verb) => {
        const promise = new Promise((resolve, reject) => {
            const http = new XMLHttpRequest();
            
            http.open(verb, url, true)
            http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            
            /*
             * 요청이 성공하면 프로미스가 성공하며
             * 결과에 상태 코드가 포함된다.
             */
            http.onreadystatechange = function() {
                if (http.readyState === 4) {
                    return resolve({ verb: verb, status: http.status });
                }
            }
            
            /*
             * 요청이 성공하지 않거나 제한 시간 내에 완료되지 않으면
             * 그 요청을 실패로 표시한다. 평균 응답 시간을 참고하여
             * 제한 시간을 조정한다.
             */
            setTimeout(() => {
                return resolve({ verb: verb, status: -1 });
            }, 1000);
            
            // HTTP 요청을 시작
            http.send({});
        });
        
        // promises 배열에 promise 객체를 추가
        promises.push(promise);
    });
    
    /*
     * HTTP 요청을 시도한 각각의 동사에 대한 
     * 프로미스의 결과를 콘솔에 출력한다.
     */
    Promise.all(promises).then(function(values) {
        console.log(values);
    });
}
