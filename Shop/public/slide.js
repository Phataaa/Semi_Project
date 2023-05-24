var slides = document.querySelectorAll('.slide');
var currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function previousSlide() {
  showSlide(currentSlide - 1);
}

// Tự động chuyển slide sau một khoảng thời gian
setInterval(nextSlide, 5000);

// Đăng ký sự kiện cho các nút next và previous
document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', previousSlide);

// Hiển thị slide đầu tiên khi trang được tải
showSlide(currentSlide);