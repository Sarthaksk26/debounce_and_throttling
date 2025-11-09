// Throttle function
function throttle(fn, limit) {
  let inThrottle = false;
  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args); // run the function
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit); // reset throttle after delay
    }
  };
}

// Function to update scroll position
function updateScrollPosition() {
  const scrollPos = window.scrollY;
  document.getElementById('pos').textContent = scrollPos.toFixed(0);
  console.log('Scroll event fired at:', new Date().toLocaleTimeString());
}

// Attach throttled scroll listener
window.addEventListener('scroll', throttle(updateScrollPosition, 3000));
