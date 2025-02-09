// ��ȡ�����������ͼƬԪ��
const searchInput = document.getElementById("search");
const images = document.querySelectorAll("#gallery img");

// ���������������
searchInput.addEventListener("input", function () {
  const searchText = searchInput.value.toLowerCase();

  // ��������ͼƬ
  images.forEach(img => {
    // ��ȡÿ��ͼƬ�� data-tags ���ԣ���Ϊ�ؼ���
    const tags = img.getAttribute("data-tags").toLowerCase();

    // ���ͼƬ�ı�ǩ��������Ĺؼ��֣�����ʾ����������
    if (tags.includes(searchText)) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
});