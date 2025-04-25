# 🔐 Nuxt 3 + Appwrite Auth Boilerplate by ABTech

This is a production-ready Nuxt 3 starter project by **ABTech**, featuring complete **Appwrite Authentication**, **middleware-based route protection**, and **Pinia for state management**.

## 💡 Features

- ✅ User registration & login
- ✅ Middleware-protected routes
- ✅ Logout and session persistence
- ✅ Detect current user on page load
- ✅ Organized Pinia store for global auth state
- ✅ Easy environment-based setup

---

## 🛠️ Technologies

- Nuxt 3 (Composition API)
- Appwrite (Cloud or Self-hosted)
- Pinia (State management)
- Client-side Middleware

---

## ⚡ Quick Start

### 1. Clone the Repository

```bash
### 1. Clone Repository
git clone https://github.com/Ex-007/nuxt-appwrite.git
cd nuxt-appwrite

### 2. Install Dependencies
npm install

### 3. Setting Up Appwrite 
▶️ Step 1: Create an Appwrite Account
Visit https://cloud.appwrite.io
Sign up for a free account
Click “Create Project”
Give your project a name (e.g., NuxtAuth)
Copy the Project ID (you’ll need this later)

▶️ Step 2: Add Web Platform
Inside the project dashboard, click “Add Platform”
Choose “Web App”
Set the host to: http://localhost:3000
Click “Register”

▶️ Step 3: Enable Email Auth
Go to Authentication → Users
Enable the Email/Password authentication method

📁 Environment Setup
Create a .env file in your project root and paste: APPWRITE_PROJECT=your_project_id

🚨 Don't commit this file. Keep your credentials secret.

🧠 Project Structure
├── middleware/
│   └── auth.client.js        # Auth middleware
├── plugins/
│   └── appwrite.client.js    # Appwrite SDK setup
├── stores/
│   └── authentication.js               # Pinia store for auth
│   └── userDashboard.js                # Pinia store for user Dashboard
├── pages/
│   ├── index.vue             # home
│   ├── account.vue           # Login/Register page
│   └── dashboard.vue          # User Dashboard page
├── .env                      # Your credentials

🧪 Usage
Run the Dev Server
npm run dev

🧠 How It Works
auth.client.js: Middleware for route protection
authentication.js: Pinia store for login, logout, session tracking
userDashboard.js: Pinia Store for user dashboard
appwrite.client.js: Plugin that Injects Appwrite into Nuxt app
.env: Keeps your credentials secure and dynamic

🧯 Troubleshooting
Project ID Invalid? Make sure your .env is correct.
Appwrite error on load? Ensure auth.client.js is in middleware/ and named correctly.
Session not working? Check if cookies are allowed and APPWRITE_ENDPOINT is valid.

🙌 Contribute
Pull requests and forks are welcome. You can use this as a base for:
Freelancer dashboards
SaaS platforms
Admin control panels
or any Nuxt app needing authentication!

📘 License
MIT — Free to use, remix, or distribute. Credit appreciated.
Built with ❤️ by ABTech.

🌍 Repo
https://github.com/Ex-007/nuxt-appwrite