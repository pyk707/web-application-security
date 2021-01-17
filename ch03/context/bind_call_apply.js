// ageData로부터 콘텍스트를 가지고 새로운 getAge() 함수 클론을 생성한 다음
// 'joe' 매개변수를 가지고 호출
const getBoundAge = getAge.bind(ageData)('joe');

// ageData 콘텍스트와 joe 매개변수를 가지고 getAge()를 호출
const boundAge = getAge.call(ageData, 'joe');

// ageData 콘텍스트와 joe 매개변수를 가지고 getAge()를 호출
const boundAge = getAge.apply(ageData, ['joe']);



// 배열을 리스트로 구조 변경
const boundAge = getAge.call(ageData, ...['joe']);