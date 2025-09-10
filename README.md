# 🚨 Edusafe - Frontend

This is the **frontend repository** for the Web Application: *Pelaporan Kekerasan Terhadap Wanita di Kampus*.  
Built using **Vue.js**, the frontend provides the user interface for students, kaprodi, admins, and users.

---

## 👥 Roles & Permissions

- **Mahasiswa**
  - 📝 Register account  
  - 📢 Report incidents of violence  
- **Kaprodi**
  - 📂 Process and manage incident reports  
  - ✅ Registered by Admin only  
- **Admin**
  - 🔐 Manage system users  
  - ➕➖✏️ CRUD **Berita** (News)  
  - ➕➖✏️ CRUD **Edukasi** (Educational Content)  
  - ➕➖✏️ CRUD **Mahasiswa & Kaprodi**  
- **User (Guest)**
  - 📖 Read **Berita & Edukasi** only  

---

## 🛠️ Tech Stack

- [Vue.js](https://vuejs.org/) – Frontend framework  
- [Vue Router](https://router.vuejs.org/) – Client-side routing  
- [Axios](https://axios-http.com/) – API requests  
- [Bootstrap](https://getbootstrap.com/) – UI styling  
- [FontAwesome](https://fontawesome.com/) – Icons  

---

## 🚀 Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/Keshinryan/Edusafe-Frontend.git
cd Edusafe-Frontend
```

2. Install dependencies:

```bash
npm install
```

3. Run development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

---

## 📂 Project Structure

```
pelaporan-frontend/
│── public/              # Static files
│── src/
│   ├── assets/          # Images, CSS
│   ├── components/      # Vue components
│   ├── views/           # Pages (Login, Register, Dashboard, Reports, Berita, Edukasi)
│   ├── router/          # Vue Router config
│   ├── App.vue          # Root component
│   └── main.js          # Entry point
│── package.json         # Dependencies & scripts
│── vite.config.js       # Build config
│── README.md
```

---

## 🔗 Backend API

This project connects to the backend built with **Laravel**:  
👉 [Edusafe Backend](https://github.com/Keshinryan/Edusafe-BackEnd)

---

## 👨‍💻 Author

Developed for **Edusafe** by Jason Patrick  
Frontend: Vue.js | Backend: Laravel
