# 🏡 HomiFi – Airbnb Clone

**HomiFi** is a full-stack web application inspired by Airbnb. It allows users to explore, list, and manage rental properties with features like maps, image uploads, and user authentication. Built using **Node.js**, **Express**, **MongoDB**, and **EJS**, it combines functionality with an elegant and responsive UI powered by **Bootstrap 5**.

🌐 **Live Website:** [https://homifi-vv6h.onrender.com/listings](https://homifi-vv6h.onrender.com/listings)

---

## ✨ Features

- 🔐 **Authentication System**
  - User Registration, Login, Logout
  - Secure sessions with `express-session` and `passport.js`
- 🏠 **Property Listings**

  - Create, edit, and delete rental listings
  - Associate listings with authenticated users (ownership)

- 📍 **Location Maps**

  - Mapbox integration for geolocation & interactive maps
  - Reverse geocoding based on user input

- 📸 **Image Uploads**

  - Upload multiple images per listing using Cloudinary
  - Image deletion support

- 🎨 **UI & UX**

  - Mobile-responsive design with Bootstrap 5
  - Elegant image cards, toggle filters, and dynamic layouts

- 🔎 **Search & Filters** _(coming soon)_

  - Filter listings by location, price, or tags

- 💬 **Flash Messaging**
  - Instant feedback for user actions (e.g., login success, form errors)

---

## 🛠 Tech Stack

### 📦 Frontend

- EJS (Templating Engine)
- Bootstrap 5
- Custom JavaScript (Vanilla JS)

### 🧠 Backend

- Node.js
- Express.js
- MongoDB (with Mongoose ODM)

### 🔐 Authentication & Middleware

- Passport.js (Local Strategy)
- Method-Override (for PUT/DELETE support)
- Express-Session & Connect-Flash

### ☁️ Services & APIs

- **Cloudinary** – Image upload and storage
- **Mapbox** – Interactive maps and geocoding
- **Dotenv** – Secure environment variable management
