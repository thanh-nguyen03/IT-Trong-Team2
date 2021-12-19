let sub = document.getElementById('sub_hover');
const hover = () => {
  sub.classList.toggle('sub_hover');
};

setInterval(hover, 400);

// Auto uptop on reload
let topButton = document.getElementById('top');
const upTop = () => {
  topButton.click();
};
