<button onclick="goToLink()">클릭하세요</button>

const userLink = "<script>alert('hi')</script>";

const goToLink = function() {
  window.location.href = `https://mywebsite.com/${userLink}`;
  
  // https://my-website.com/<script>alert('hi')</script>로 이동
};
