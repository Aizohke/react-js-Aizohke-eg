# 🎨 PLP Task Manager

### React.js + JSX + Tailwind CSS – Week 3 Assignment

---

## 🚀 Overview

**PLP Task Manager** is a responsive front-end React application built with **Vite**, **JSX**, and **Tailwind CSS**.
It demonstrates mastery of component-based architecture, state management using hooks, dark/light mode theming, and API integration.

---

## 🧩 Features

✅ **React Components** – Modular structure for scalability and readability
✅ **Dark / Light Mode Toggle** – Dynamic theme switching with persistent local storage
✅ **Task Manager** – Add, view, and delete tasks with state management
✅ **API Integration** – Fetches and displays posts from an external API
✅ **Responsive UI** – Tailwind CSS ensures the layout works beautifully on mobile and desktop
✅ **Smooth Transitions** – Includes color and theme transitions for better user experience

---

## 🛠️ Tech Stack

| Tool                       | Purpose                |
| -------------------------- | ---------------------- |
| **React.js (Vite)**        | Front-end framework    |
| **Tailwind CSS**           | Styling and layout     |
| **JavaScript (ES6+)**      | Logic and interaction  |
| **PostCSS + Autoprefixer** | Tailwind build support |
| **Fetch API**              | Data retrieval         |

---

## 📂 Project Structure

```
plp-task-manager/
│
├── public/
│   └── favicon.ico
│
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── TaskManager.jsx
│   │   └── PostsSection.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── utils/
│   │   └── api.js
│   ├── assets/
│   └── index.css
│
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

---

## ⚙️ Setup & Installation

1. **Clone this repository**

   ```bash
   git clone https://github.com/<your-username>/plp-task-manager.git
   cd plp-task-manager
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. Open your browser and go to
   👉 `http://localhost:5173/`

---

## 🌐 Live Demo

> 🎯 **Deployed Version:**
> 🔗 [View Live Demo](https://plpreactapp.netlify.app/)

---

## 🌗 Dark / Light Mode

- Click the **“Dark Mode / Light Mode”** button in the header to switch themes.
- The preference is automatically saved, so it persists after refreshing the page.

---

## 🧠 Learning Objectives

- Understand component-based architecture in React
- Use Tailwind CSS for efficient UI styling
- Implement React Hooks (`useState`, `useEffect`)
- Manage dynamic themes (dark/light)
- Integrate an external API with Fetch

---

## 🖼️ Screenshot of the Working App

Deployment on localhost
(<Screenshot 2025-10-23 182803.png>)
<img width="1362" height="766" alt="image" src="https://github.com/user-attachments/assets/957fae80-bb91-4c6a-8e39-a88bafa19e23" />


Deployment on netlify

<img width="1365" height="767" alt="image" src="https://github.com/user-attachments/assets/502aecee-e1d1-4930-8c80-e051d3d35896" />


---

## 📜 License

This project was created as part of the **Power Learn Project (PLP) Software Development Specialization** coursework.
Feel free to modify or reuse with proper credit.
