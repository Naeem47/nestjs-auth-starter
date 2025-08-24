# 🚀 NestJS Boilerplate

<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="NestJS Logo" />
</p>

<p align="center">
  <b>A complete, production-ready NestJS Authentication System with TypeORM, JWT, OTP Verification & Secure Password Reset</b>
</p>

<p align="center">
  <a href="https://github.com/nestjs/nest"><img src="https://img.shields.io/badge/NestJS-v10-red?logo=nestjs" /></a>
  <a href="https://www.postgresql.org/"><img src="https://img.shields.io/badge/PostgreSQL-Database-blue?logo=postgresql" /></a>
  <a href="https://typeorm.io/"><img src="https://img.shields.io/badge/TypeORM-ORM-orange" /></a>
  <a href="https://jwt.io/"><img src="https://img.shields.io/badge/JWT-Auth-green?logo=jsonwebtokens" /></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow" /></a>
</p>

---

## ✨ Features

* 🔐 Authentication (JWT)
* 📲 OTP Verification (Email ready)
* 🔑 Forgot & Reset Password
* 👤 User Module (Signup / Login / Profile)
* 🎭 Role-based Access Control (Admin/User)
* ⚙️ Environment Config with `.env`
* 🛡️ Exception Filters & Guards
* 📖 Swagger API Documentation
* 🐘 PostgreSQL + TypeORM

---

## 📂 Project Structure
```
src/
 ┣ 📜 main.ts                 # 🚀 App entry point
 ┣ 📜 app.module.ts           # 📦 Root application module
 ┣ 📂 modules/                # 🧩 Feature-based modules
 ┃ ┣ 📂 auth/                 # 🔐 Authentication & Authorization
 ┃ ┃ ┣ 📜 auth.controller.ts
 ┃ ┃ ┣ 📜 auth.service.ts
 ┃ ┃ ┣ 📂 strategies/         # 🔑 JWT / Refresh / OTP strategies
 ┃ ┃ ┣ 📂 dto/                # 📄 Data Transfer Objects
 ┃ ┣ 📂 users/                # 👤 User Management
 ┃ ┃ ┣ 📜 users.controller.ts
 ┃ ┃ ┣ 📜 users.service.ts
 ┃ ┃ ┣ 📂 entities/           # 🗄️ User entity
 ┃ ┃ ┣ 📂 dto/                # 📄 User DTOs
 ┃ ┣ 📂 mail/                 # ✉️ Mailing & OTP
 ┃ ┃ ┣ 📜 mail.service.ts
 ┃ ┃ ┣ 📂 templates/          # 📝 Email templates (HTML/Text)
 ┣ 📂 common/                 # ⚙️ Shared utilities
 ┃ ┣ 📂 guards/               # 🛡️ Role & Auth guards
 ┃ ┣ 📂 interceptors/         # 🎭 Logging, Transform, Timeout
 ┃ ┣ 📂 filters/              # 🚨 Exception filters
 ┃ ┣ 📂 decorators/           # 🏷️ Custom decorators
 ┃ ┗ 📂 utils/                # 🛠️ Helper functions
 ┣ 📂 config/                 # ⚡ Configurations
 ┃ ┣ 📜 database.config.ts
 ┃ ┣ 📜 jwt.config.ts
 ┃ ┗ 📜 mail.config.ts
 ```


---

## 🛠 Tech Stack

* ⚡ [NestJS](https://nestjs.com/) – Scalable Node.js framework
* 🗄️ [TypeORM](https://typeorm.io/) – ORM for TypeScript
* 🐘 [PostgreSQL](https://www.postgresql.org/) – Relational Database
* 🔑 [Passport.js](http://www.passportjs.org/) – Authentication middleware
* 🛡️ [JWT](https://jwt.io/) – Secure token-based auth
* 📖 [Swagger](https://swagger.io/) – API Documentation
* 📧 [Nodemailer](https://nodemailer.com/) – Email service for OTP & reset password

---

## ⚡ Quick Start

### 1️⃣ Clone & Install

```bash
git clone https://github.com/your-username/nestjs-boilerplate.git
cd nestjs-boilerplate
npm install
```

### 2️⃣ Setup Environment

Create a `.env` file in the root:

```env
# ------------------------
# App Config
# ------------------------
PORT=3000
NODE_ENV=development

# ------------------------
# Database (Postgres)
# ------------------------
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_NAME=myapp

# ------------------------
# JWT Config
# ------------------------
JWT_SECRET=supersecretkey123   # change in production
JWT_EXPIRES_IN=15m
JWT_REFRESH_SECRET=refreshsecretkey456
JWT_REFRESH_EXPIRES_IN=7d

# ------------------------
# Mail Config (Nodemailer / SMTP)
# ------------------------
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USER=your_email@gmail.com
MAIL_PASS=your_gmail_app_password
MAIL_FROM="My App <your_email@gmail.com>"

# ------------------------
# OTP Config
# ------------------------
OTP_EXPIRES_IN=300  # 5 minutes in seconds
```

### 3️⃣ Run the Project

```bash
npm run start:dev
```

---

## 🧪 Testing

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

---

## 📖 API Docs

Swagger UI → [http://localhost:3000/api](http://localhost:3000/api)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open a PR ⭐

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more info.

---

<p align="center">
  Made with ❤️ using <a href="https://nestjs.com/">NestJS</a>
</p>

