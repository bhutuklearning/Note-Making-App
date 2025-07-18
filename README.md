# 📝 Note Making Application

A modern, full-stack note-taking application built with **React** and **Node.js**. Effortlessly create, view, and manage your notes with a beautiful UI and robust backend.

<p align="center">
  <img src="./frontend/public/image.png" alt="Demo Screenshot" width="600"/>
  <!-- Replace with your screenshot path -->
</p>

---

<p align="center">
  <a href="https://www.linkedin.com/in/amritanshu-goutam-015bab248/"><img src="https://img.shields.io/badge/LinkedIn-Connect-blue" alt="LinkedIn"></a>
</p>

---

## 📑 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Folder Structure](#-folder-structure)
- [Getting Started](#-getting-started)
- [API Documentation](#-api-documentation)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🚀 Features

- ✍️ Create, read, update, and delete notes
- 💡 Responsive and intuitive UI
- 🛡️ Rate limiting to prevent abuse
- 🗄️ MongoDB for persistent storage
- 🔗 RESTful API backend
- 🎨 Modern React frontend with Tailwind CSS
- ⚡ Fast, real-time updates (if applicable)
- 🛠️ Error handling and user feedback

---

## 📦 Tech Stack

**Frontend:**

- React
- Vite
- Tailwind CSS
- Axios

**Backend:**

- Node.js
- Express
- MongoDB & Mongoose
- Upstash Rate Limiting
- CORS, dotenv

---

## 📂 Folder Structure

```
Note-making Application/
  ├── backend/
  │   ├── src/
  │   │   ├── config/
  │   │   ├── controllers/
  │   │   ├── middlewares/
  │   │   ├── models/
  │   │   ├── routes/
  │   │   └── server.js
  │   └── package.json
  ├── frontend/
  │   ├── src/
  │   │   ├── components/
  │   │   ├── lib/
  │   │   ├── pages/
  │   │   └── main.jsx
  │   └── package.json
  └── README.md
```

---

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- MongoDB instance (local or cloud)

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/note-making-application.git
cd note-making-application
```

### 2. Setup Backend

```bash
cd backend
npm install
# Create a .env file with your MongoDB URI and other secrets
npm run backend
```

### 3. Setup Frontend

```bash
cd ../frontend
npm install
npm run dev
```

### 4. Open in Browser

Visit [http://localhost:5173](http://localhost:5173) to use the app.

---

## 📖 API Documentation

| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| GET    | /api/notes     | Get all notes     |
| POST   | /api/notes     | Create a new note |
| GET    | /api/notes/:id | Get note by ID    |
| PUT    | /api/notes/:id | Update a note     |
| DELETE | /api/notes/:id | Delete a note     |

_See `backend/src/routes/notesRoutes.js` for details._

---

## 📸 Screenshots

<!-- Add screenshots or GIFs here -->
<p align="center">
  <img src="./frontend/public/homepage.png" alt="Home Page" width="400"/>
  <img src="./frontend/public/create-note.png" alt="Create Note" width="400"/>
</p>

---

## 🤝 Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [ISC License](LICENSE).

---

## 👤 Contact

- **Author:** [Amritanshu Goutam](https://github.com/bhutuklearning)
- **LinkedIn:** [Amritanshu Goutam](https://www.linkedin.com/in/amritanshu-goutam-015bab248/)
- **Email:** amritanshugoutam@gmail.com

---

## ⭐️ Show your support

Give a ⭐️ if you like this project and want to see more!
