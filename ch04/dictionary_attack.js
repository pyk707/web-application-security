const dns = require('dns');
const csv = require('csv-parser');
const fs = require('fs');

const promises = [];

/*
 * 디스크의 서브도메인 데이터를 읽는 스트리밍(큰 파일을 메모리에 한번에
 * 올리지 않고 조금씩 처리)을 시작한다.
 *
 * 각 행에서 서브도메인을 질의하는 `dns.resolve`를 호출해 서브도메인이
 * 존재하는지 확인한다. 이 프로미스들을 `promises` 배열에 저장한다.
 *
 * 모든 행을 읽어 모든 프로미스가 처리(resolved)되면, 찾아낸 서브도메인을
 * 콘솔에 출력한다.
 *
 * 성능 개선: 서브도메인 리스트가 매우 큰 경우, 별도 출력 파일을 열고
 * 프로미스가 처리될 때마다 결과를 스트리밍한다.
 */
fs.createReadStream('subdomains-10000.txt')
    .pipe(csv())
    .on('data', (subdomain) => {
        promises.push(new Promise((resolve, reject) => {
            dns.resolve(`${subdomain}.mega-bank.com`, function (err, ip) {
                return resolve({ subdomain: subdomain, ip: ip });
            });
        }));
    })
    .on('end', () => {
    
    // 모든 DNS 질의가 완료되면 결과를 출력한다
    Promise.all(promises).then(function(results) {
        results.forEach((result) => {
            if (!!result.ip) {
                console.log(result);
            }
        });
    });
});
