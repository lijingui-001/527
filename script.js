// 轮播图自动切换
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
function showSlide(n) {
    slides.forEach(slide => slide.classList.remove("active"));
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
}
function nextSlide() {
    showSlide(currentSlide + 1);
}
// 初始化显示第一张并设置自动切换
showSlide(0);
setInterval(nextSlide, 3000); // 修正此处的函数调用位置

// 配置弹窗逻辑
function showConfig(text) {
    const modal = document.getElementById('configModal');
    const detail = document.getElementById('configDetail');
    detail.innerHTML = text;
    modal.style.display = 'flex';
}
function closeConfig() {
    const modal = document.getElementById('configModal');
    modal.style.display = 'none';
}