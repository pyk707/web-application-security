/*
* 탈것(vehicle)을 나타내는 클래스와 유사한 것(pseudoclass)을 자바스크립트로 작성.
*
* 이 예제는 프로토타입 상속의 기초를 시연하기 위한 것이다.
*/
const Vehicle = function(make, model) {
  this.make = make;
  this.model = model;
  
  this.print = function() {
    return `${this.make}: ${this.model}`;
  };
};

const prius = new Vehicle('Toyota', 'Prius');
console.log(prius.print());

const charger = new Vehicle('Dodge', 'Charger');
console.log(charger.print());

/*
 * "Prius"와 "Charger" 객체 둘 다 "Vehicle"을 기본으로 하여
 * 생성된 것을 볼 수 있다.
 */
console.log(prius.__proto__ === charger.__proto__);

/*
 * Vehicle 객체에는 "getMaxSpeed" 함수가 없으므로 실패한다.
 *
 * Vehicle을 상속한 객체에는 getMaxSpeed 함수가 없다.
 */
//console.log(prius.getMaxSpeed()); // Error: getMaxSpeed is not a function 오류가 발생

/*
 * 이제 Vehicle의 프로토타입에 getMaxSpeed() 함수를 추가하면
 * Vehicle 객체의 프로토타입이 자식으로 전파되어
 * Vehicle을 상속한 모든 객체가 실시간으로 업데이트된다.
 */
Vehicle.prototype.getMaxSpeed = function() {
  return 100; // 시속(mph)
};

/*
 * Vehicle의 프로토타입이 업데이트되었으므로 이제 자식 객체에서도
 * getMaxSpeed 함수가 작동한다.
 */
console.log(prius.getMaxSpeed()); // 100
console.log(charger.getMaxSpeed()); // 100