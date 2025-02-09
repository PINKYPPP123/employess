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
        cursorImg.src = '1.1.png';  // Change to left-click image
    } else if (cursorState === 'right-clicked') {
        cursorImg.src = '1.1.png';  // Change to right-click image
    } else {
        cursorImg.src = '1.png';  // Default image
    }
}

// Prevent right-click menu from appearing
document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});