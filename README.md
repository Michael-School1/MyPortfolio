# MyPortfolio — COMP229 Assignment 2

Portfolio application: **Node.js + Express REST APIs + MongoDB (Mongoose)** backend, with the **Assignment 1 React portfolio** as the frontend in `client/`.

## Folder structure

```
MyPortfolio/
├── server.js                 # Starts Express + connects to MongoDB
├── config/config.js          # Port, JWT secret, MongoDB connection string
├── .env.example              # Copy to .env and fill in your values
├── server/
│   ├── express.js            # Express app, middleware, routes
│   ├── helpers/dbErrorHandler.js
│   ├── models/               # contact, project, qualification, user
│   ├── controllers/          # CRUD logic + auth.controller.js (JWT)
│   └── routes/               # REST API routes + auth.routes.js
├── client/                   # Assignment 1 React app (Vite + TypeScript)
└── postman/                  # Postman collection for testing every API
```

## 1. MongoDB setup

MongoDB **Compass** is only the viewer — it needs a MongoDB server to connect to. Pick one:

**Option A — Local (easiest with Compass)**
1. Install **MongoDB Community Server** (Windows .msi, "Install as a Service" checked): https://www.mongodb.com/try/download/community
2. Open Compass → connect to `mongodb://localhost:27017`.
3. Click **+** next to Databases → Database name `Portfolio`, collection `contacts`.
4. Add the other collections: `projects`, `qualifications`, `users`.
5. Your connection string is `mongodb://127.0.0.1:27017/Portfolio`.

**Option B — MongoDB Atlas (cloud, free M0 cluster)**
1. Create a free cluster at https://www.mongodb.com/cloud/atlas.
2. Database Access → add a database user. Network Access → allow your IP (or `0.0.0.0/0`).
3. Connect → Drivers → copy the `mongodb+srv://...` string and put `/Portfolio` before the `?`.
4. Create the `Portfolio` database and the 4 collections (Atlas "Browse Collections" or Compass).

> The collections are also created automatically the first time you POST to each API.

## 2. Install and run

```bash
# from the MyPortfolio folder
copy .env.example .env        # (Windows)  — then edit .env with your MONGODB_URI
npm install                   # backend packages
cd client
npm install                   # frontend packages (includes concurrently + nodemon)
npm run dev                   # runs Vite (5173) AND the Express server (3000) together
```

- Frontend: http://localhost:5173
- Backend welcome message: http://localhost:3000 → `{"message":"Welcome to My Portfolio application."}`
- Console should print `Server started on port 3000.` and `Connected to the database! (Portfolio)`

Run just the backend: `node server.js` (or `npm run server` for auto-restart) from the root folder.

## 3. REST API

| Method | URL | Action | Auth |
|---|---|---|---|
| GET | /api/contacts | get all contacts | token |
| GET | /api/contacts/:id | get contact by id | token |
| POST | /api/contacts | add new contact | public |
| PUT | /api/contacts/:id | update contact by id | token |
| DELETE | /api/contacts/:id | remove contact by id | token |
| DELETE | /api/contacts | remove all contacts | token |
| GET | /api/projects | get all projects | public |
| GET | /api/projects/:id | get project by id | public |
| POST | /api/projects | add new project | token |
| PUT | /api/projects/:id | update project by id | token |
| DELETE | /api/projects/:id | remove project by id | token |
| DELETE | /api/projects | remove all projects | token |
| GET | /api/qualifications | get all qualifications | public |
| GET | /api/qualifications/:id | get qualification by id | public |
| POST | /api/qualifications | add new qualification | token |
| PUT | /api/qualifications/:id | update qualification by id | token |
| DELETE | /api/qualifications/:id | remove qualification by id | token |
| DELETE | /api/qualifications | remove all qualifications | token |
| GET | /api/users | get all users | public |
| GET | /api/users/:id | get user by id | token |
| POST | /api/users | add new user (sign up) | public |
| PUT | /api/users/:id | update user by id | token (own account) |
| DELETE | /api/users/:id | remove user by id | token (own account) |
| DELETE | /api/users | remove all users | token |
| POST | /auth/signin | sign in, returns JWT | public |
| GET | /auth/signout | sign out (clears cookie) | public |

"token" = protected route. Send the JWT from `/auth/signin` as a header: `Authorization: Bearer <token>`.
Without it you get `401 UnauthorizedError: No authorization token was found`.

## 4. Testing (Part 5)

Import `postman/MyPortfolio.postman_collection.json` into Postman (or Thunder Client → Collections → Import).
Run the requests in order — **Sign in** saves the token automatically, and each POST saves the new id so the GET/PUT/DELETE-by-id requests just work.

Suggested order: Users → Create user → Auth → Sign in → then Contacts, Projects, Qualifications, and finally the remaining Users requests and Sign out.

### Example bodies

```json
// POST /api/users
{ "name": "Michael Kendrick", "email": "michael@example.com", "password": "secret123" }

// POST /auth/signin
{ "email": "michael@example.com", "password": "secret123" }

// POST /api/contacts
{ "firstname": "Jane", "lastname": "Doe", "email": "jane@example.com" }

// POST /api/projects
{ "title": "Keyboard Kickers", "firstname": "Michael", "lastname": "Kendrick",
  "email": "michael@example.com", "completion": "2026-04-30",
  "description": "Cartoon soccer game with shared keyboard controls" }

// POST /api/qualifications
{ "title": "Game Programming Advanced Diploma", "firstname": "Michael", "lastname": "Kendrick",
  "email": "michael@example.com", "completion": "2028-04-30",
  "description": "Centennial College, 2025 - 2028" }
```
