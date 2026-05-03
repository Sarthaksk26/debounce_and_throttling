# 🚀 JS Performance: Debounce & Throttle Visualizer

[![Build Verification](https://github.com/Sarthaksk26/debounce_and_throttling/actions/workflows/ci.yml/badge.svg)](https://github.com/Sarthaksk26/debounce_and_throttling/actions/workflows/ci.yml)

An interactive, high-performance dashboard demonstrating how to optimize expensive JavaScript operations using **Debouncing** and **Throttling**. Perfect for understanding web performance at a glance.

![Preview](https://via.placeholder.com/1200x600/0f172a/38bdf8?text=Debounce+and+Throttle+Visualizer)

## ✨ Concepts Learned

- **Debouncing**: Ensures that a function is only executed after a specified period of inactivity. Ideal for search inputs, window resizing, and auto-saving.
- **Throttling**: Limits the execution of a function to at most once in a specified time interval. Essential for scroll events, mouse movements, and heavy UI updates.
- **Visual Feedback**: Real-time counters comparing "Raw Events" vs "Processed Events" to quantify performance gains.
- **Modern Workflow**: Restructured into a **Vite** project for production-ready optimization.

## 🛠️ Tech Stack

- **Core**: Vanilla JavaScript (ES6+)
- **Styling**: Modern CSS3 (Glassmorphism, CSS Variables, Flex/Grid)
- **Tooling**: Vite (Development & Bundling)
- **Typography**: Inter (Google Fonts)

## 🚀 Local Setup

To run this project locally, ensure you have [Node.js](https://nodejs.org/) installed:

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd debounce-throttle-visualizer
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

## 🔄 Automated Deployment (CI/CD)

This project is configured for **fully automated deployments**. Every time you push code to GitHub, the following happens:

1.  **Build Verification**: A GitHub Action automatically runs `npm run build` to ensure no errors were introduced.
2.  **Live Update**: If you've connected your repo to Vercel/Netlify, your live URL will update automatically within seconds.

### How to set up Automation:
1.  **Push your changes**:
    ```bash
    git add .
    git commit -m "feat: modernize project and add CI/CD"
    git push origin main
    ```
2.  **Connect to Vercel**:
    - Go to [Vercel Dashboard](https://vercel.com/new).
    - Select your `debounce_and_throttling` repository.
    - Click **Deploy**.
    - *That's it!* From now on, every `git push` is a live update.

---
*Built as a professional portfolio piece to demonstrate deep understanding of JavaScript performance optimization and modern CI/CD workflows.*
