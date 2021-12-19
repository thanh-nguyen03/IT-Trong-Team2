// Check mobile user
/* Storing user's device details in a variable*/
let details = navigator.userAgent;

/* Creating a regular expression 
containing some mobile devices keywords 
to search it in details string*/
let regexp = /android|iphone|kindle|ipad/i;

/* Using test() method to search regexp in details
it returns boolean value*/
let isMobileDevice = regexp.test(details);

if (isMobileDevice) {
  alert('Vui lòng xem bằng trình duyệt máy tính để có trải nghiệm tốt nhất <3');
}
// alert('Vui lòng xem bằng trình duyệt máy tính để có trải nghiệm tốt nhất <3');

// Animation
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

upTop();
