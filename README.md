# 🚀 QuickPaste

QuickPaste is a fullstack web application that allows users to quickly share text or code through unique, temporary links.

Users can create a paste, receive a shareable URL, and optionally set an expiration time after which the paste becomes inaccessible.

---

## 🌐 Live Demo

*(Coming soon — will be added after deployment)*

---

## ✨ Features

* 🔗 Generate unique shareable links using nanoid
* ⏳ Set expiration time (1 hour, 24 hours, 7 days, or no expiration)
* 📄 View shared pastes through a dedicated URL
* ❌ Automatic expiration handling
* 📋 Copy-to-clipboard functionality
* ⚡ Fast and simple user experience

---

## 🎨 UI Components

This project uses a custom UI component library built by me to improve consistency and reusability.

It includes:

* ⏳ Loading spinner component
* ⚠️ Error/alert component

🔗 NPM Package: https://www.npmjs.com/package/@mkhalfadel/modoui-core

🔗 GitHub Repo: https://github.com/MkhalFadel/ModoUI

🌐 Demo: https://mkhalfadel.github.io/ModoUI/

---

## 🧱 Tech Stack

### Frontend

* React
* React Router
* Fetch API
* Custom UI Component Library

### Backend

* Node.js
* Express.js
* MySQL (mysql2)

---

## 📁 Project Structure

```id="n1a7m9"
QuickPaste/
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── db/
│   └── server.js
│
├── frontend/
│   ├── components/
│   ├── pages/
│   └── API/
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```id="tqg4s3"
git clone https://github.com/your-username/quickpaste.git
cd quickpaste
```

---

### 2. Backend Setup

```id="z2qf9c"
cd backend
npm install
```

Create a `.env` file:

```id="5h2sdl"
DB_HOST=localhost
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=your_database
```

Start the backend server:

```id="o3qkz7"
npm run dev
```

---

### 3. Frontend Setup

```id="7p4ywd"
cd frontend
npm install
npm run dev
```

---

## 🔌 API Endpoints

### Create Paste

```id="u0r3zb"
POST /api/pastes
```

**Body:**

```json id="y5rm9x"
{
  "content": "Your text here",
  "expiresIn": "1h"
}
```

---

### Get Paste

```id="3k7r2d"
GET /api/pastes/:id
```

**Response:**

```json id="xq1t9v"
{
  "content": "Your text here",
  "createdAt": "timestamp"
}
```

---

## 🧠 How It Works

1. User submits text through the frontend
2. Backend generates a unique ID using nanoid
3. Paste is stored in MySQL with an optional expiration timestamp
4. A shareable link is returned (`/p/:id`)
5. When accessed, the frontend fetches the paste from the backend
6. If expired, the paste is no longer accessible

---

## 📌 Future Improvements

* 🔒 Password-protected pastes
* 🎨 Syntax highlighting
* 📊 View count tracking
* ☁️ Cloud storage integration

---

## 💼 Built by MkhalFadel

Built as a fullstack project to practice real-world backend development, API design, and reusable UI component architecture.

---
