
const cursorImg = document.getElementById('cursor-img');
const imageContainer = document.getElementById('image-container');

let cursorState = 'default';  // Default state


// Track mouse movements and update the position of the cursor image
document.addEventListener('mousemove', (event) => {
    cursorImg.style.left = event.pageX - cursorImg.width / 2 + 'px';
    cursorImg.style.top = event.pageY - cursorImg.height / 2 + 'px';
});

// Change cursor image on left or right mouse click
document.addEventListener('mousedown', (event) => {
    if (event.button === 0) {  // Left click
        cursorState = 'left-clicked';
    } else if (event.button === 2) {  // Right click
        cursorState = 'right-clicked';
    }
    updateCursorImage();
});

// Reset to default on mouse up
document.addEventListener('mouseup', () => {
    cursorState = 'default';
    updateCursorImage();
});

// Update the cursor image based on state
function updateCursorImage() {
    if (cursorState === 'left-clicked') {
        cursorImg.src = 'left-clicked-cursor.png';  // Change to left-click image
    } else if (cursorState === 'right-clicked') {
        cursorImg.src = 'right-clicked-cursor.png';  // Change to right-click image
    } else {
        cursorImg.src = 'default-cursor.png';  // Default image
    }
}

// Prevent right-click menu from appearing
document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

//画廊模块
const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

// 点击图片打开大图
galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.classList.remove("hidden");
  });
});

// 点击关闭按钮关闭大图弹窗
closeBtn.addEventListener("click", () => {
  lightbox.classList.add("hidden");
});

// 点击弹窗背景关闭大图
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {  // 点击的是背景而不是图片区域
    lightbox.classList.add("hidden");
  }
});

// 按下 Esc 键关闭大图弹窗
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {  // 如果按下的是 Esc 键
    lightbox.classList.add("hidden");
  }
});

  // 筛选模块
const buttons = document.querySelectorAll('.filter-button');
  const searchInput = document.getElementById('search-input');
  const images = document.querySelectorAll('.image');
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const filter = this.dataset.filter;

      images.forEach(image => {
        image.classList.toggle('hidden', !image.classList.contains(filter));
      });
    });
  });
  // 监听搜索输入框内容变化
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().split(' ').map(tag => tag.trim());

    images.forEach(image => {
      const tags = image.dataset.tags.toLowerCase().split(' ').map(tag => tag.trim());

      // 检查 query 是否完全匹配 tags 的任意排列组合
      const matches = query.every(tag => tags.includes(tag));

      image.classList.toggle('hidden', !matches);
    });
  });
