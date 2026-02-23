# HackReg - Hackathon Team Registration System

A robust backend system built to manage hackathon team registrations, featuring a structured API and database integration.

---

## 🚀 Features

- **Team Registration:** Securely register teams with member details.
- **Data Validation:** Ensures team names are unique and member counts meet hackathon requirements.
- **Structured API:** Clean RESTful endpoints for creating and retrieving team data.
- **Scalable Architecture:** Built with a modular folder structure (Models, Controllers, Routes).

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (via Mongoose)
- **Testing:** Postman

## 📂 Project Structure

**Plaintext**

```
├── config/         # Database connection settings
├── controllers/    # Request handling logic
├── models/         # MongoDB schemas (Team, User)
├── routes/         # API endpoint definitions
├── .env            # Environment variables (DB URI, Port)
└── server.js       # Entry point of the application
```

## ⚙️ Installation & Setup

1. **Clone the repository:**
   **Bash**

   ```
   git clone https://github.com/AJ-401/HackReg.git
   ```

2. **Install dependencies:**
   **Bash**

   ```
   npm install
   ```

3. **Environment Setup:**
   Create a `.env` file in the root directory and add:
   **Code snippet**

   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Run the server:**
   **Bash**

   ```
   npm start
   ```
