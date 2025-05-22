# 📘 NotesSnippet

**NotesSnippet** is a responsive, user-friendly web application built with **React** and **Vite**, designed to help users create, update, and manage code snippets or notes efficiently. The application leverages **Firebase Authentication** for secure user login and registration, ensuring that each user's notes are kept private and accessible only to them.

🔗 **Live Demo**: [https://notes-snippet.netlify.app](https://notes-snippet.netlify.app)

---

## 🚀 Features

### 🧾 Notes Management
- 📝 Create and edit notes or code snippets with ease.
- 🗃️ Organized layout for easy browsing and management of notes.
- 🧹 Clean and distraction-free user interface.

### 🔐 Firebase Authentication
- 🔑 Secure login and signup using Firebase Authentication.
- ✅ Email and password-based authentication.
- 🔒 Authentication state persistence across sessions.

### 📱 Responsive Design
- Mobile-first design ensuring seamless experience across devices.

### ⚡ Vite-Powered Frontend
- Fast development environment with hot module replacement.
- Optimized build for production deployment.

---

## 🛠️ Tech Stack

| Layer       | Technology               |
|-------------|---------------------------|
| Frontend    | React, Vite               |
| Styling     | CSS / Tailwind CSS        |
| Authentication | Firebase Authentication |
| Deployment  | Netlify                   |


## 📁 Project Structure

NotesSnippet/
├── public/ # Static public files
├── src/
│ ├── components/ # Reusable UI components
│ ├── pages/ # Page components (e.g., Home, Login, Signup)
│ ├── firebase-config.js # Firebase configuration and initialization
│ ├── App.jsx # Main application component
│ └── main.jsx # Entry point for React
├── .gitignore
├── index.html # HTML template
├── package.json # Project metadata and dependencies
├── README.md # Project documentation
├── vite.config.js # Vite configuration
└── ...
