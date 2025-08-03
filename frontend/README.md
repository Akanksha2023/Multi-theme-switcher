# 🎨 Multi-Theme Switcher App

This is a React-based single-page application built as a technical assessment. It features a theme switcher with three visually distinct themes. The app highlights responsive design, structured layout changes, and smooth user experience across multiple pages.

---

## ✨ Objective

Implement a **theme switcher** that allows users to toggle between:

- **Theme 1 (Default):** Minimalist layout with light background and simple sans-serif font
- **Theme 2:** Dark mode with sidebar layout and bold serif font
- **Theme 3:** Colorful card-based grid layout using playful fonts like *Pacifico*

> Each theme modifies not just colors but also structure, spacing, font, and layout — as per the assignment.
>> ⚠️ Note: All themes are fully responsive and tested across screen sizes. However, on select physical mobile devices, Theme 2 may render differently when deployed via Vercel due to environment-specific CSS behavior. The layout performs as expected in local builds and mobile simulators.

---

## 🚀 Features

- 🖼️ **Three complete UI themes** with distinct structure & font styles
- 📱 **Mobile-first design** tested on DevTools and standard breakpoints
- 💡 **Theme switcher in header dropdown** with persistent state using `localStorage`
- 🌐 Multi-page routing using **React Router** (`Home`, `About`, `Contact`)
- ⚛️ **Context API** for global theme state management
- 🎨 Styling with **Tailwind CSS** (utility-first + responsive)
- 🛍️ Dynamic **product list** fetched from [Fake Store API](https://fakestoreapi.com/products)
- 🔄 Subtle **animations when switching themes**
- 🔒 Basic project structure secured for deployment
- 🌍 Deployed using **Vercel**

---

## 🖼️ Theme Previews

| Theme | Description | Mobile Support |
|-------|-------------|----------------|
| **Theme 1** | Light, clean layout, minimalist sans-serif | ✅ Fully responsive |
| **Theme 2** | Dark sidebar layout with serif fonts | ✅ Works on Chrome DevTools; some display variation on real devices (see below) |
| **Theme 3** | Colorful, grid-based layout with playful font | ✅ Fully responsive |

> 📱 *Note: Theme 2 is fully functional in all browsers, including mobile simulators. On select real mobile devices, the layout may appear slightly different due to environment-specific rendering behavior on Vercel. This is unrelated to the responsiveness logic.*

---

## 🔧 Tech Stack

- **React (with Vite)**
- **Tailwind CSS**
- **React Router**
- **Context API**
- **LocalStorage**
- **Fake Store API**

---

## 🧱 Folder Structure

frontend/
├── src/
│   ├── components/
│   │   ├── Theme1Context.tsx
│   │   ├── Theme2/
│   │   │   ├── pages/
│   │   │   │   ├── About.tsx
│   │   │   │   ├── Contact.tsx
│   │   │   │   ├── FAQ.tsx
│   │   │   │   └── Home.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Topbar.tsx
│   │   │   ├── Theme2Content.tsx
│   │   ├── Theme3Content.tsx
│   │   ├── footer.tsx
│   │   ├── theme_dropdown.tsx
│   │   ├── theme_navbar.tsx
│
│   ├── contexts/
│   │   └── ThemeContext.tsx
│
│   ├── App.tsx
│   ├── App.css
│   ├── index.tsx
│   ├── index.css
│   ├── main.tsx
│
│   └── vite-env.d.ts
│
├── .gitignore
├── eslint.config.js
├── index.html


## ✅ Requirements Checklist 

| Feature | Status |
|--------|--------|
| 3 Distinct Themes with layout/font changes | ✅ |
| Theme Switcher Dropdown in Header | ✅ |
| Default Theme = Theme 1 | ✅ |
| Product List from FakeStoreAPI | ✅ |
| Theme state persists via localStorage | ✅ |
| Global Theme State using Context API | ✅ |
| Tailwind CSS for styling | ✅ |
| Animations on theme switch | ✅ |
| Routing with Home, About, Contact | ✅ |
| Responsive across desktop and mobile | ✅ |
| Deployed & tested on Vercel | ✅ |

---

## 🛠️ Getting Started — Run Locally in VS Code

Follow the steps below to set up and run this project on your local machine using **Node.js**, **VS Code**, and **npm**.

### 📋 Prerequisites

Make sure you have the following installed on your system:

- ✅ [Node.js (v18 or higher)](https://nodejs.org/)
- ✅ [Git](https://git-scm.com/)
- ✅ [Visual Studio Code](https://code.visualstudio.com/)

### 🚀 Steps to Set Up and Run the Project

🛠️ Project Setup & Run Instructions (Multi-Theme Switcher)

1. Clone the Repository
-----------------------
Windows (CMD/PowerShell):
    git clone https://github.com/Akanksha2023/multi-theme-switcher.git
    cd multi-theme-switcher\frontend

Mac/Linux (Bash):
    git clone https://github.com/Akanksha2023/Multi-theme-switcher.git
    cd multi-theme-switcher/frontend

2. Install Dependencies
-----------------------
    npm install

3. Run the App Locally
----------------------
    npm run dev
Then open: http://localhost:5173

4. Build for Production (Optional)
----------------------------------
    npm run build
    npx serve dist

5. Deploy to Vercel (Optional)
------------------------------
    1. Push code to GitHub
    2. Visit https://vercel.com
    3. Import GitHub repo
    4. Set build command: npm run build
    5. Output directory: dist
    6. Click 'Deploy'

✅ You’re ready to go!

---

## 📬 Submission Details

This project was submitted as part of the technical assessment for Hipster Inc.

- 👩‍💻 **Candidate Name:** Akanksha Jha
- 💼 **Role Applied For:** React Frontend Developer
- 🔗 **Live Demo:** https://multi-theme-switcher-ochre.vercel.app/theme3
- 📁 **GitHub Repo:** https://github.com/Akanksha2023/Multi-theme-switcher.git


## 🙋‍♀️ Author

**Akanksha Jha**  
Full-Stack Developer 
📧 akankshajha397@gmail.com 