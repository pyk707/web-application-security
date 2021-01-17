const func = function() {
  this.age = 25;
  
  // 25를 반환
  console.log(this.age);
};

// undefined를 반환
console.log(this.age);
