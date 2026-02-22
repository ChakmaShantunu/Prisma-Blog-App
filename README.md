# 📘 Blog Application (Prisma + Node.js)

A full-stack **Blog Application** built with **Node.js, Express, Prisma ORM, and PostgreSQL**.

This project focuses on:

- Clean backend architecture
- Scalable database design
- Modern, type-safe ORM practices using **Prisma**

---

## 🚀 Features

- 🔐 **JWT-based Authentication & Authorization**
- 📝 **Create, Read, Update, and Delete (CRUD) Blog Posts**
- 💬 **Comment System**
  - Supports **nested comments**
- 👤 **User Roles**
  - Admin
  - User
- 🔑 **Protected Routes**
- 🧾 **Prisma ORM**
  - Type-safe queries
- 🗄️ **PostgreSQL Database**
- ⏱️ **Automatic timestamps**
  - `createdAt`
  - `updatedAt`
- 📦 **Clean controller-based architecture**
  - MVC-inspired structure

---

## 🛠️ Tech Stack

### Backend

- Node.js
- Express.js
- Prisma ORM
- PostgreSQL
- JWT Authentication

### Tools & Libraries

- Prisma Studio
- dotenv
- bcrypt

---

## 📌 Project Goal

To build a **scalable, secure, and maintainable backend** using Prisma ORM  
while following **industry-standard backend development practices**.

---

🌐 Cross-Origin Resource Sharing (CORS)
📖 Overview

This project uses CORS (Cross-Origin Resource Sharing) to securely enable communication between the frontend and backend when running on different origins.

In development:

Frontend → http://localhost:5173

Backend → http://localhost:5000

Since these are different origins, the browser enforces security restrictions through the Same-Origin Policy.

🔐 What is Same-Origin Policy?

Modern browsers such as Google Chrome and Mozilla Firefox restrict web applications from accessing resources across different origins unless explicitly permitted.

An origin consists of:

Protocol + Domain + Port

If any one of these differs, the request becomes cross-origin.

⚙️ How CORS Works

When the frontend sends a request to the backend:

Origin: http://localhost:5173

The backend must respond with:

Access-Control-Allow-Origin: http://localhost:5173

If this header is not present, the browser blocks the request and throws a CORS error.

🚀 CORS Configuration (Development)

This project enables CORS using the Express cors middleware:

import cors from "cors";

app.use(
cors({
origin: ["http://localhost:5173"],
credentials: true,
})
);
🌍 CORS Configuration (Production)

In production, replace the development origin with your deployed frontend domain:

app.use(
cors({
origin: ["https://your-frontend-domain.com"],
credentials: true,
})
);
🔄 Simple vs Preflight Requests
✅ Simple Requests

GET

POST (with standard headers)

🚀 Preflight Requests

For:

PUT

DELETE

Custom headers

The browser first sends an OPTIONS request to verify permissions before sending the actual request.

🛡️ Why CORS Matters

Without CORS:

Malicious websites could send unauthorized API requests

User session data could be exploited

Protected resources could be accessed illegally

CORS ensures only trusted origins can communicate with this API.

## 🧪 How to Run Locally

### 1️⃣ Clone the repository

```bash
git clone <repository-url>
cd blog-application
```
