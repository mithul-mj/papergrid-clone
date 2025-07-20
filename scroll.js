window.addEventListener('scroll', function () {
  const mytext = document.getElementsByClassName('large-name')[0];

  if (window.scrollY > 50) {
    console.log("scroll");
    mytext.classList.add('small-header');
    
  } else {
    mytext.classList.remove('small-header');
  }
});
