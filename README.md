# LinkStack Web Application — Frontend

![License: GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=flat&logo=vite&logoColor=FFD62E)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

LinkStack is an enterprise-grade Full-Stack SaaS platform that allows users to centralize their social media presence into a single, customizable public profile. This repository contains the **Frontend Web Application**, built with React, TypeScript, Vite, and Tailwind CSS.

It provides a highly interactive, responsive, and optimized user interface for public profile viewing, user onboarding, and an advanced administrative dashboard.

---

## 🎯 UI / Product Purpose

LinkStack acts as a personal link aggregator. It provides:

1.  **Public Facing App:** A high-conversion landing page and dynamically generated public profile pages for users based on unique handles.
2.  **User Dashboard:** A private environment for users to upload avatars, edit their bios, and manage their social links with interactive live-previews.
3.  **Admin Portal:** A dedicated control panel for system administrators to manage platform users.

---

## ✨ Key Features

- **Seamless Onboarding:** Landing page features an instant "handle availability check". If available, the handle is passed dynamically to the registration form to optimize conversion rates and UX.
- **Interactive Dashboard:**
  - _Links Tab:_ Add, edit, and toggle social links with strict URL validation.
  - _Profile Tab:_ Update profile descriptions, upload avatars (via Cloudinary), and modify handles.
- **Live Preview & Drag-and-Drop:** A real-time preview panel allows users to see exactly how their public profile will look. Integrates `@dnd-kit` for intuitive, drag-and-drop link reordering.
- **Dynamic Data Caching:** Leverages React Query (`@tanstack/react-query`) for advanced server-state management, caching, and background data fetching.
- **Role-Based Routing:** Protected routes for Standard Users, with specialized elevated views only accessible to authenticated Administrators (allowing global user updates and deletion).
- **Graceful 404 Handling:** Custom "User Not Found" error pages for invalid handle queries.

---

## 🛠 Tech Stack

- **Build Tool:** Vite
- **Library:** React
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management (Server):** React Query
- **Routing:** React Router DOM
- **Interactivity:** dnd-kit (Drag and Drop)

---

## 📋 Prerequisites

Before running the frontend, ensure you have:

- **Node.js** (v16.x or higher recommended)
- **npm** or **yarn**
- **LinkStack Backend API** running locally or deployed. ([Backend Repository](https://github.com/manuelalejandrojimeneztorres/linkstack-backend))

---

## ⚙️ Environment Variables

Create a `.env` file in the root of the project (you can use `.env.example` as a template) and configure your variables:

| Variable           | Description                               | Example                 |
| :----------------- | :---------------------------------------- | :---------------------- |
| `VITE_BACKEND_URL` | The base URL of the LinkStack Backend API | `http://localhost:3000` |

---

## 🚀 Installation & Local Development Setup

**1. Clone the repository:**

```bash
git clone https://github.com/manuelalejandrojimeneztorres/linkstack-frontend.git
cd linkstack-frontend
```

**2. Install dependencies:**

```bash
npm install
```

**3. Configure Environment:**
Ensure your `.env` file is properly populated with the backend URL.

**4. Start the development server:**

```bash
npm run dev
```

The application will typically be accessible at `http://localhost:5173`.

_Note: Ensure the backend API is concurrently running to experience full functionality. Creating a script or alias to boot both services simultaneously is recommended for frequent development._

---

## 🏗 Architecture & State Management Notes

- **Server State (React Query):** We avoid using heavy global client-state managers (like Redux) for backend data. Instead, React Query handles data fetching, loading states, error handling, and cache invalidation dynamically.
- **Styling (Tailwind CSS):** The project relies entirely on Tailwind utility classes for styling. No external CSS files are used for component styling to ensure a highly maintainable and predictable UI architecture.
- **Drag & Drop:** `@dnd-kit` is utilized over older HTML5 drag-and-drop APIs to ensure cross-browser compatibility and accessibility.

---

## 📦 Production Build & Deployment

To generate a production-ready optimized build:

```bash
npm run build
```

The output will be placed in the `dist` directory, ready to be deployed to any static hosting service (e.g., Vercel, Netlify, AWS S3, NGINX).

_TODO: Add specific deployment steps for target cloud provider._

---

## 🤝 Contributing

1.  Fork the repository
2.  Create your feature branch (`git checkout -b feature/AmazingUI`)
3.  Commit your changes (`git commit -m 'Add some AmazingUI'`)
4.  Push to the branch (`git push origin feature/AmazingUI`)
5.  Open a Pull Request

---

## 📄 License

This project is licensed under the **GNU General Public License v3.0 (GPLv3)**.

## ✉️ Maintainer

[**Manuel Alejandro Jiménez Torres**](https://github.com/manuelalejandrojimeneztorres)
