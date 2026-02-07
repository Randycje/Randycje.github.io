# 🚀 Portfolio Website - Randy Chong

A modern, high-performance personal portfolio website built with **React**, **Vite**, and **Framer Motion**.  
Designed with a "Cyber/Tech" aesthetic to showcase expertise in **Robotics**, **Systems Engineering**, and **Data Analytics**.

🔗 **Live Site:** [https://randycje.github.io/](https://randycje.github.io/)

---

## ✨ Features

- **🎨 Modern Design:** Dark/Light mode support with a custom "Cyber" color palette (Deep Navy, Electric Cyan, Industrial Orange).
- **⚡ High Performance:** Built on Vite for lightning-fast loading and HMR.
- **📱 Fully Responsive:** Optimized for all devices, from large desktops to mobile phones.
- **🔄 Interactive:**
    - Custom particle network background animation.
    - Project image carousels.
    - Smooth scroll navigation.
    - Animated entrance effects (Framer Motion).
- **🛠️ Tech Stack:** React, Vanilla CSS (Variables), Lucide Icons.

---

## 🛠️ Installation & Local Development

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Randycje/Randycje.github.io.git
    cd Randycje.github.io
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    Open `http://localhost:5173` in your browser.

---

## 🌐 Deployment

This project uses a split-branch workflow for GitHub Pages:

- **`master` branch:** Contains the **Source Code**.
- **`gh-pages` branch:** Contains the **Built Website** (generated automatically).

**To deploy changes:**

1.  Commit your changes to `master`:
    ```bash
    git add .
    git commit -m "Update portfolio"
    git push origin master
    ```

2.  Run the deploy script:
    ```bash
    npm run deploy
    ```
    *This script automatically builds the project (`vite build`) and pushes the `dist` folder to the `gh-pages` branch.*

---

## 📂 Project Structure

```
├── public/              # Static assets (Resume, Images)
├── src/
│   ├── components/      # React Components (Hero, Navbar, etc.)
│   ├── App.jsx          # Main Layout
│   ├── main.jsx         # Entry Point
│   └── index.css        # Global Styles & Variables
├── package.json         # Dependencies & Scripts
└── vite.config.js       # Vite Configuration
```

---

## 📝 License
This project is open source and available under the [MIT License](LICENSE).
