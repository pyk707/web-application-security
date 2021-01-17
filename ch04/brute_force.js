const dns = require('dns');
/*
 * 각 서브도메인의 최대 길이를 받아 서브도메인의 
 * 목록을 브루트 포싱하는 함수.
 */
const generateSubdomains = function(length) {
    
    /*
     * 생성할 서브도메인을 구성하는 문자의 목록.
     *
     * 많이 사용되지 않는 '-' 문자 등을 포함하도록 바꿔도 된다.
     *
     * 브라우저에 따라 중국어, 아랍어, 라틴 문자열 등을 지원하는
     * 경우도 있다.
     */
    const charset = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let subdomains = charset;
    let subdomain;
    let letter;
    let temp;
    
    /*
     * 시간 복잡도: o(n*m)
     * n = 문자열 길이
     * m = 유효한 문자의 개수
     */
    for (let i = 1; i < length; i++) {
        temp = [];
        for (let k = 0; k < subdomains.length; k++) {
            subdomain = subdomains[k];
            for (let m = 0; m < charset.length; m++) {
                letter = charset[m];
                temp.push(subdomain + letter);
            }
        }
        subdomains = temp
    }
    
    return subdomains;
}

const subdomains = generateSubdomains(4);
const promises = [];

/*
 * 각 서브도메인에 대해 비동기 DNS 질의를 수행한다.
 *
 * 이것은 일반적인 `dns.lookup()`보다 성능이 높다.
 * 자바스크립트에서는 `dns.lookup()`이 비동기인 것처럼 보여도 내부적으로
 * 사용하는 운영 체제의 getaddrinfo(3)은 동기식으로 구현되었기 때문이다.
 */
subdomains.forEach((subdomain) => {
    promises.push(new Promise((resolve, reject) => {
        dns.resolve(`${subdomain}.mega-bank.com`, function (err, ip) {
            return resolve({ subdomain: subdomain, ip: ip });
        });
    }));
});

// DNS 질의가 모두 완료되면 결과를 로깅
Promise.all(promises).then(function(results) {
    results.forEach((result) => {
        if (!!result.ip) {
            console.log(result);
        }
    });
});
