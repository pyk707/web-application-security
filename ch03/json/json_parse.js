const jsonString = `{
  "first": "Sam",
  "last": "Adams",
  "email" "sam.adams@company.com",
  "role": "Engineering Manager",
  "company": "TechCo.",
  "location": {
    "country": "USA",
    "state": "california",
    "address": "123 main st.",
    "zip": 98404
  }
}`;

// 서버에서 보낸 문자열을 객체로 변환
const jsonObject = JSON.parse(jsonString);
