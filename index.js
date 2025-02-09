const translations = {
	zh: {1: "狂攻",2: "酷哥",4: "天然黑",5: "邦邦",6: "美1",7: "康纳",8: "霍斯",9: "女同",10: "光头",11:"萝莉",12:"绿茶",13:"P主管"},
    en: {1: "Angel",2: "Tiffany",4: "Jacob",5: "Bambang",6: "Nox",7: "Conor",8: "Hawes",9: "Audrey",10: "River",11:"Tasha",12:"Eden",13:"Manager\nPP"},
    jp: {1: "ジャイアン",2: "イケメン",4: "天然黒",5: "ガキ",6: "美人攻め",7: "メガネ",8: "ビューティ",9: "レズ",10: "ハゲ",11:"ロリ",12:"ぶりっ子",13:"管理人\nPP"}
	};

function setLanguage(divider) {
    document.querySelectorAll('[class^="divider"]').forEach(element => {
      const key = element.dataset.key;
      if (translations[divider][key]) {
        element.textContent = translations[divider][key];
      }
    });
  }
  
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

