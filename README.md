# VECTO.DIGITAL task

## 🕹 Demo

> Play it locally or deploy with Docker. See instructions below.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/BrownEdgar/Vecto_app.git
cd Vecto_app
```

📦 Install Dependencies and run

```bash
npm install
npm run dev
```

📦 Build for Production

```bash
npm run build
npm run preview
```

### 🐳 Run with Docker

Build Docker Image and run Container

```bash
docker build -t vecto_movie .
docker run -p '5173:5173' vecto_movie
or
docker-compose up --build
```

---

📜 Scripts

| Command           | Description                   |
| ----------------- | ----------------------------- |
| `npm run dev`     | Start Vite development server |
| `npm run build`   | Build static production files |
| `npm run preview` | Preview the production build  |
