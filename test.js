const images = document.querySelectorAll('.image');
const popups = document.querySelectorAll('.popup');

images.forEach(image => {
  const popup = image.querySelector('.popup');
  
  image.addEventListener('click', function() {
    if (popup.style.display === 'none') {
      popup.style.display = 'block';
    } else {
      popup.style.display = 'none';
    }
  });
});
