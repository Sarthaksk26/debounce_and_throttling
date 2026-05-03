# 🚀 JS Performance: Debounce & Throttle Visualizer

[![Build Verification](https://github.com/Sarthaksk26/debounce_and_throttling/actions/workflows/ci.yml/badge.svg)](https://github.com/Sarthaksk26/debounce_and_throttling/actions/workflows/ci.yml)

An interactive dashboard designed to demonstrate and visualize JavaScript performance optimizations. This project quantifies the efficiency gains of Debouncing and Throttling through real-time event tracking.

---

## 💡 The Concept: Analogies for the Real World

### 1. Debounce: The "Wait-for-the-Last-Person" Elevator
Imagine an elevator door. A person walks in, and the door starts to close. But then another person walks in, so the door resets and waits again. As long as people keep coming every few seconds, the elevator **never leaves**. It only starts moving once there is a **pause** in the arrivals.
- **In Code**: Useful for search bars. You don't want to call the API on every single keystroke. You wait until the user *stops* typing for 500ms, then you fetch the results.

### 2. Throttle: The "One-Drink-Every-Minute" Soda Fountain
Imagine a soda fountain that has a strict timer. You can press the button 100 times, but it will only release soda **once every 60 seconds**. No matter how fast you click, it respects the interval.
- **In Code**: Useful for scrolling or resizing. The browser fires scroll events dozens of times per second. Throttling ensures your expensive UI update logic only runs once every 100ms, keeping the animation smooth.

---

## 🧠 Behind the Scenes: How it Works

### Debounce (The Pause-Based Trigger)
The core logic involves a `timer` variable. Every time the function is called, we **kill the previous timer** and start a new one. The function only executes if the timer actually reaches its end without being killed.

```javascript
function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer); // Reset the clock on every call
        timer = setTimeout(() => {
            fn.apply(this, args); // Only runs after the 'delay' pause
        }, delay);
    };
}
```

### Throttle (The Rate-Limiter)
The core logic uses a "lock" (flag). When the function runs, it **locks the door**. Any subsequent calls while the door is locked are simply ignored. After the specified time, the door is unlocked again.

```javascript
function throttle(fn, limit) {
    let inThrottle = false;
    return function (...args) {
        if (!inThrottle) {
            fn.apply(this, args); // Run the function
            inThrottle = true;    // Lock the door
            setTimeout(() => {
                inThrottle = false; // Unlock after 'limit' ms
            }, limit);
        }
    };
}
```

---

## 🛠️ Tech Stack
- **Core**: Vanilla JavaScript (ES6+)
- **Styling**: Modern CSS3 (Glassmorphism, CSS Variables, Flex/Grid)
- **Tooling**: Vite (Development & Bundling)
- **CI/CD**: GitHub Actions (Automated Build Verification)

---

## 🏃‍♂️ Running Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Sarthaksk26/debounce_and_throttling.git
   cd debounce_and_throttling
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run in development mode**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

---
*Built as a professional portfolio piece to demonstrate deep understanding of JavaScript performance optimization and modern CI/CD workflows.*
