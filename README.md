# 💼 Pragun Karande - AXS Dashboard Assignment

A full-stack MERN application featuring user authentication and a modern financial dashboard. Built with modular backend architecture and a responsive frontend using React and TailwindCSS.

---

## 📚 Table of Contents

- [🛠 Tech Stack](#-tech-stack)
- [⚙️ Setup Instructions](#️-setup-instructions)
- [📁 Project Structure](#-project-structure)
- [📌 Assumptions](#-assumptions)
- [👨‍💻 Author](#-author)

---

## 🛠 Tech Stack

### 🔹 Frontend
- React.js
- React Router DOM
- Context API
- TailwindCSS
- React Toasts
- Axios
- Lazy Loading & Suspense

### 🔹 Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- Modular Repository & Service Pattern

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/pragun-axs.git
cd pragun-axs
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in `/backend` and add:

```env
PORT=8080
MONGODB_URL=mongodb://localhost:27017/pragunaxs
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm start
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

Create a `.env` file in `/frontend` and add:

```env
VITE_API_BASE_URL=http://localhost:8080/api/v1
```

Run frontend:

```bash
npm run dev
```

---

## 📁 Project Structure

### 🧩 Frontend (`/frontend`)

```
src/
├── api/                 → Axios HTTP client
├── assets/              → Static assets (e.g., SVGs)
├── components/          → Reusable components (charts, cards, sidebar, etc.)
├── constants/           → UI constants (colors, styles)
├── context/             → AuthContext
├── layout/              → Route definitions
├── pages/               → Page views (Login, SignUp, Home)
├── App.jsx              → Main app component
├── main.jsx             → Entry point
```

### ⚙️ Backend (`/backend`)

```
src/
├── controller/          → Request handlers (user, auth)
├── middleware/          → Authentication middleware
├── model/               → Mongoose schemas
├── repository/          → DB layer abstraction
├── routes/
│   └── v1/              → Versioned API routes
├── service/             → Business logic
├── index.js             → Server entry point
```

---

## 📌 Assumptions

- The app assumes a single type of authenticated user (no roles).
- JWT token is stored on the frontend (likely in localStorage).
- Protected routes are handled using context and a ProtectedRoute component.
- Form validation is basic and done on the client side.
- Chart and card data is mock/static unless otherwise connected to live data.
- No mobile responsiveness assumed in the first version.

---

## 👨‍💻 Author

**Pragun Karande**
