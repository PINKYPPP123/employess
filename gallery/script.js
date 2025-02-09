// 获取检索框和所有图片元素
const searchInput = document.getElementById("search");
const images = document.querySelectorAll("#gallery img");

// 监听检索框的输入
searchInput.addEventListener("input", function () {
  const searchText = searchInput.value.toLowerCase();

  // 遍历所有图片
  images.forEach(img => {
    // 获取每张图片的 data-tags 属性，作为关键字
    const tags = img.getAttribute("data-tags").toLowerCase();

    // 如果图片的标签包含输入的关键字，则显示；否则隐藏
    if (tags.includes(searchText)) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
});