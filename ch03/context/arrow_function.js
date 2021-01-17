// 글로벌 콘텍스트
this.garlic = false;

// soup 요리법
const soup = { garlic: true };

// soup 객체에 붙은 표준 함수
soup.hasGarlic1 = function() { console.log(this.garlic); } // true

// 글로벌 콘텍스트에 붙은 화살표 함수
soup.hasGarlic2 = () => { console.log(this.garlic); } // false