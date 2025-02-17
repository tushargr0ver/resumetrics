# Resumetrics

Resumetrics is an AI-powered resume analysis tool that evaluates resumes and provides a score, feedback, and improvement suggestions using OpenAI's API.

## 🚀 Project URL
[Live Deployment](https://resumetrics.tushr.tech/)

## 📂 Project Structure
```
resumetrics/
│-- client/   # Frontend (React + Vite)
│   ├── .env  # Contains VITE_API_URL
│-- server/   # Backend (Node.js + Express.js + OpenAI API)
│   ├── .env  # Contains OPENAI_API_KEY
```

## 🛠 Tech Stack
### Frontend:
- React (Vite)
- Chakra UI (Component Library)

### Backend:
- Node.js
- Express.js
- OpenAI API

## 🛠 Installation

### 1️⃣ Clone the repository
```sh
git clone https://github.com/tushargr0ver/resumetrics.git
cd resumetrics
```

### 2️⃣ Setup Backend (Server)
```sh
cd server
npm install
```
Create a `.env` file in the `server` directory and add:
```sh
OPENAI_API_KEY=your_openai_api_key
```
Run the server:
```sh
npm start
```

### 3️⃣ Setup Frontend (Client)
```sh
cd ../client
npm install
```
Create a `.env` file in the `client` directory and add:
```sh
VITE_API_URL=http://localhost:3000
```
Run the client:
```sh
npm run dev
```

## 🎯 Features
- Upload your resume
- AI-powered resume analysis
- Get a score and feedback
- Receive suggestions for improvement

## 🤝 Contributing
Feel free to fork the repository and open a pull request!

## 📜 License
This project is licensed under the MIT License.

---
Developed by [tushargr0ver](https://github.com/tushargr0ver)

