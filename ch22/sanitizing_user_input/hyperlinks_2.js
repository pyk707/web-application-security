const userLink = "<script>alert('hi')</script>";

const goToLink = function() {
  const dummy = document.createElement('a');
  dummy.href = userLink;
  window.location.href = `https://mywebsite.com/${dummy.a}`;
  
  // https://my-website.com/%3Cstrong%3Etest%3C/strong으로 이동
};

goToLink();
