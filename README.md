# Full Stack Development Experiments

**Name:** Sujal Gulati  
**UID:** 24BDA70318

---

## Exp 3.1.1 – React Login Form with Validation

A React login form built using `react-hook-form` and Material UI (MUI).

**Features:**
- Email and password validation using `react-hook-form`
- Simulated async authentication with loading state
- Success/error alerts using MUI `Alert` component

**Tech Stack:** React, react-hook-form, Material UI

**How to Run:**
```bash
cd "Exp 3.1.1"
npm install
npm start
```

**Test Credentials:** `admin@test.com` / `password123`

---

## Exp 3.1.2 – JWT Authentication (Full Stack)

A full-stack JWT-based authentication system with a React frontend and Express backend.

**Features:**
- User login with JWT token generation (1hr expiry)
- Protected API route using Bearer token middleware
- Axios-based API client on the frontend
- Dashboard and ProtectedRoute components

**Tech Stack:** React, Axios, Node.js, Express, jsonwebtoken, CORS

**How to Run:**
```bash
# Backend
cd "Exp 3.1.2/jwt-auth-app/server"
npm install
node server.js

# Frontend
cd "Exp 3.1.2/jwt-auth-app/client"
npm install
npm start
```

**API Endpoints:**
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/login` | Returns JWT token |
| GET | `/api/protected` | Protected route (requires Bearer token) |

---

## Exp 3.1.3 – MERN CRUD App (User Management)

A MERN stack application to add and retrieve users from a MongoDB database.

**Features:**
- Add users via POST request
- Fetch all users via GET request
- Mongoose schema for user data (name, email)
- React frontend with CSS styling

**Tech Stack:** React, Node.js, Express, MongoDB, Mongoose, CORS

**How to Run:**
```bash
# Start MongoDB locally first
mongod

# Backend
cd "Exp 3.1.3/server"
npm install
node server.js

# Frontend
cd "Exp 3.1.3/client"
npm install
npm start
```

**API Endpoints:**
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/add` | Add a new user |
| GET | `/users` | Get all users |

---

## Repository Structure

```
EXP 3.1/
├── Exp 3.1.1/          # React Login Form with Validation
├── Exp 3.1.2/          # JWT Authentication (Full Stack)
└── Exp 3.1.3/          # MERN CRUD App
```
