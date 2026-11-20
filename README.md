# MyPortfolio — COMP229 Full Stack Portfolio

Full stack portfolio application: **Node.js + Express REST APIs + MongoDB (Mongoose)** backend with JWT authentication, and a **React (Vite + TypeScript)** frontend in `client/`.

Assignment 3 / Lab 3 adds:

- **Sign Up** and **Sign In** pages, and Sign Out in the navbar
- **Contact**, **Education (Qualification)** and **Project** forms built with **react-hook-form** and **Material UI**
- The frontend calls the backend APIs, so everything entered is saved in MongoDB
- **User roles:** the **admin** can add, edit and delete projects, qualifications and contact messages. **Users** can only view them.
- The Express server also serves the built React site, so the whole app runs as one service in the cloud

## Admin account

The admin is created in the database automatically when the server starts. The credentials are set in `.env` (defaults shown):

| Setting | Default |
|---|---|
| ADMIN_EMAIL | admin@portfolio.com |
| ADMIN_PASSWORD | admin123 |

Anyone else can sign up on the Sign Up page and gets the **user** role. You can also run `npm run seed:admin` to create the admin without starting the server.

## Folder structure

```
MyPortfolio/
├── server.js                 # Starts Express + connects to MongoDB
├── config/config.js          # Port, JWT secret, MongoDB connection string
├── .env.example              # Copy to .env and fill in your values
├── server/
│   ├── express.js            # Express app, middleware, routes
│   ├── helpers/              # dbErrorHandler.js, seedAdmin.js
│   ├── seed-admin.js         # npm run seed:admin
│   ├── models/               # contact, project, qualification, user
│   ├── controllers/          # CRUD logic + auth.controller.js (JWT)
│   └── routes/               # REST API routes + auth.routes.js
├── client/                   # React app (Vite + TypeScript + Material UI)
│   └── src/
│       ├── lib/              # api.ts (fetch calls), auth-helper.ts, auth context
│       ├── components/       # Navbar, EntryManager, ContactMessages, forms/
│       └── pages/            # Home, About, Projects, Education, Services, Contact, Signin, Signup
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
- Backend welcome message: http://localhost:3000/api → `{"message":"Welcome to My Portfolio application."}`
- Console should print `Server started on port 3000.` and `Connected to the database! (Portfolio)`

Run just the backend: `node server.js` (or `npm run server` for auto-restart) from the root folder.

### Production build (what the cloud server runs)

```bash
npm install
npm run build     # builds the React site into client/dist
npm start         # Express serves the API and the React site on one port
```

## Deploying (Render + MongoDB Atlas)

1. Create a free MongoDB Atlas cluster and copy its `mongodb+srv://...` connection string (with `/Portfolio` before the `?`).
2. On Render, create a **Web Service** from this GitHub repo:
   - Build command: `npm install && npm run build`
   - Start command: `npm start`
3. Add the environment variables `MONGODB_URI`, `JWT_SECRET`, `ADMIN_EMAIL` and `ADMIN_PASSWORD`.

## 3. REST API

| Method | URL | Action | Auth |
|---|---|---|---|
| GET | /api/contacts | get all contacts | admin |
| GET | /api/contacts/:id | get contact by id | admin |
| POST | /api/contacts | add new contact | public |
| PUT | /api/contacts/:id | update contact by id | admin |
| DELETE | /api/contacts/:id | remove contact by id | admin |
| DELETE | /api/contacts | remove all contacts | admin |
| GET | /api/projects | get all projects | public |
| GET | /api/projects/:id | get project by id | public |
| POST | /api/projects | add new project | admin |
| PUT | /api/projects/:id | update project by id | admin |
| DELETE | /api/projects/:id | remove project by id | admin |
| DELETE | /api/projects | remove all projects | admin |
| GET | /api/qualifications | get all qualifications | public |
| GET | /api/qualifications/:id | get qualification by id | public |
| POST | /api/qualifications | add new qualification | admin |
| PUT | /api/qualifications/:id | update qualification by id | admin |
| DELETE | /api/qualifications/:id | remove qualification by id | admin |
| DELETE | /api/qualifications | remove all qualifications | admin |
| GET | /api/users | get all users | admin |
| GET | /api/users/:id | get user by id | token |
| POST | /api/users | add new user (sign up) | public |
| PUT | /api/users/:id | update user by id | token (own account) |
| DELETE | /api/users/:id | remove user by id | token (own account) |
| DELETE | /api/users | remove all users | admin |
| POST | /auth/signin | sign in, returns JWT | public |
| GET | /auth/signout | sign out (clears cookie) | public |

"token" = any signed-in user. "admin" = signed in as the admin. Send the JWT from `/auth/signin` as a header: `Authorization: Bearer <token>`.
Without a token you get `401 UnauthorizedError: No authorization token was found`. A signed-in user who is not the admin gets `403 Admin access required`.

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
{ "firstname": "Jane", "lastname": "Doe", "email": "jane@example.com",
  "contactNumber": "(416) 555-0199", "message": "Hi Michael!" }

// POST /api/projects
{ "title": "Keyboard Kickers", "firstname": "Michael", "lastname": "Kendrick",
  "email": "michael@example.com", "completion": "2026-04-30",
  "description": "Cartoon soccer game with shared keyboard controls" }

// POST /api/qualifications
{ "title": "Game Programming Advanced Diploma", "firstname": "Michael", "lastname": "Kendrick",
  "email": "michael@example.com", "completion": "2028-04-30",
  "description": "Centennial College, 2025 - 2028" }
```
