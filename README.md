# 🏕️ Hilink — Camping & Outdoor Adventure App

A modern, responsive camping and outdoor travel landing page built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**. Designed to help hikers and travelers discover trails, use offline maps, and schedule outdoor adventures with friends.

🔗 **Live Demo:** [hilinkcampapp.netlify.app](https://hilinkcampapp.netlify.app)

![Hilink Camp App Preview](./homeCampApp.png)

---

## 🛠️ Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-Deployed-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

---

## ✨ Key Features

- **Appealing Hero & Camp Showcase:** Engaging visual presentation with scrollable camp cards and community ratings.
- **Step-by-Step Guide:** Clear walkthrough explaining how Hilink guides hikers without an internet connection.
- **Core Features Grid:** Highlights offline maps, adventure scheduling, augmented reality navigation, and monthly new locations.
- **Mobile App Download CTA:** Dedicated call-to-action section for iOS and Android users.
- **Responsive Navigation:** Desktop menu and mobile menu with smooth scrolling to each section.
- **Fully Responsive & Performance Optimized:** Built mobile-first with Tailwind CSS and self-hosted fonts via `next/font/google`.

---

## 📂 Project Structure

```text
├── app/
│   ├── globals.css       # Custom Tailwind utility classes & global styles
│   ├── layout.tsx        # Root layout with Next.js Font optimization, Navbar & Footer
│   └── page.tsx          # Main landing page assembling all sections
├── components/           # Reusable UI components (Hero, Camp, Guide, Features, GetApp, Navbar, MobileMenu, Footer, Button)
├── constants/            # Centralized data for navigation links, features, and footer links
└── public/               # Static assets, SVG icons, and illustrations
```

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine:

### 1. Clone the repository

```bash
git clone https://github.com/Yelle-stack/Camp-App.git
cd Camp-App
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📜 Available Scripts

- `npm run dev` — Starts the local development server.
- `npm run build` — Creates an optimized production build.
- `npm run start` — Runs the built application in production mode.
