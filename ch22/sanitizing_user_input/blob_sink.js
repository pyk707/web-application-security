// 스크립트를 참조하는 블롭을 생성
const blob = new Blob([script], { type: 'text/javascript' });
const url = URL.createObjectURL(blob);

// 실행할 스크립트를 페이지에 주입
const script = document.createElement('script');
script.src = url;

// 페이지에 스크립트를 로딩
document.body.appendChild(script);
