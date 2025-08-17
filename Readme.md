# 🏡 HomiFi - Airbnb Clone

**HomiFi** is a full-stack web application inspired by Airbnb that allows users to explore, list, and manage rental properties. Built with modern web technologies, it features a responsive design, interactive maps, image management, and a robust authentication system.

🌐 **Live Website:** [https://homifi-vv6h.onrender.com/listings](https://homifi-vv6h.onrender.com/listings)

---

## ✨ Features

### 🔐 **User Authentication & Management**
- User registration, login, and logout functionality
- Secure session management with `express-session` and `passport.js`
- User profile management and ownership verification

### 🏠 **Property Listings**
- Create, edit, and delete rental property listings
- Rich property details including title, description, price, location, and country
- Associate listings with authenticated users (ownership system)
- Image upload and management for each listing

### 📍 **Interactive Maps & Geolocation**
- Mapbox integration for interactive property maps
- Reverse geocoding based on user input
- Geographic coordinates storage for precise location tracking

### 📸 **Image Management**
- Cloudinary integration for cloud-based image storage
- Multiple image uploads per listing
- Image deletion and management capabilities

### 💬 **Review System**
- User-generated reviews and ratings (1-5 stars)
- Comment system for detailed feedback
- Review management and moderation

### 🎨 **Modern UI/UX**
- Responsive design using Bootstrap 5
- Elegant image cards and dynamic layouts
- Flash messaging for user feedback
- Mobile-optimized interface

### 🔍 **Search & Navigation**
- Intuitive navigation between listings
- About and contact pages
- Clean and organized listing displays

---

## 🛠 Tech Stack

### **Frontend**
- **EJS** - Server-side templating engine
- **Bootstrap 5** - Responsive CSS framework
- **Vanilla JavaScript** - Custom interactive features
- **CSS3** - Custom styling and animations

### **Backend**
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### **Authentication & Security**
- **Passport.js** - Authentication middleware
- **Passport Local Strategy** - Username/password authentication
- **Express Session** - Session management
- **Connect Flash** - Flash message handling

### **External Services & APIs**
- **Cloudinary** - Cloud image storage and management
- **Mapbox** - Maps, geocoding, and location services
- **MongoDB Atlas** - Cloud database hosting

### **Development Tools**
- **Method Override** - HTTP method support (PUT/DELETE)
- **Multer** - File upload handling
- **Joi** - Data validation
- **Dotenv** - Environment variable management

---

## 📁 Project Structure

```
HomiFi/
├── app.js                 # Main application entry point
├── cloudConfig.js         # Cloudinary configuration
├── middleware.js          # Custom middleware functions
├── schema.js             # Joi validation schemas
├── controllers/          # Business logic handlers
│   ├── listings.js       # Listing operations
│   ├── reviews.js        # Review operations
│   └── user.js          # User operations
├── models/               # Database models
│   ├── listing.js        # Property listing schema
│   ├── review.js         # Review schema
│   └── user.js          # User schema
├── routes/               # API route definitions
│   ├── listings.js       # Listing routes
│   ├── reviews.js        # Review routes
│   └── user.js          # User routes
├── views/                # EJS template files
│   ├── layouts/          # Template layouts
│   ├── listings/         # Listing-related views
│   └── users/           # User-related views
├── public/               # Static assets
│   ├── css/             # Stylesheets
│   └── js/              # Client-side JavaScript
└── utlis/               # Utility functions
    ├── expressError.js   # Error handling
    └── wrapAsync.js     # Async wrapper
```

---

## 🚀 Getting Started

### **Prerequisites**
- Node.js (v22.14.0 or higher)
- MongoDB database (local or Atlas)
- Cloudinary account
- Mapbox account

### **Installation**

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd HomiFi
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   MONGO_URI=your_mongodb_connection_string
   SECRET=your_session_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_KEY=your_cloudinary_key
   CLOUDINARY_SECRET=your_cloudinary_secret
   MAPBOX_TOKEN=your_mapbox_token
   ```

4. **Start the application**
   ```bash
   node app.js
   ```

5. **Access the application**
   Open your browser and navigate to `http://localhost:8080`

---

## 📱 Key Features in Detail

### **Property Management**
- **CRUD Operations**: Full create, read, update, and delete functionality for property listings
- **Image Handling**: Multiple image uploads with Cloudinary integration
- **Location Services**: Geographic coordinates and Mapbox integration
- **Ownership System**: Secure user-listing relationships

### **User Experience**
- **Responsive Design**: Mobile-first approach with Bootstrap 5
- **Interactive Elements**: Dynamic forms, image galleries, and maps
- **Feedback System**: Flash messages for user actions and errors
- **Navigation**: Intuitive routing and breadcrumb navigation

### **Security Features**
- **Session Management**: Secure user sessions with MongoDB storage
- **Authentication**: Passport.js local strategy implementation
- **Input Validation**: Joi schema validation for data integrity
- **CSRF Protection**: Method override for secure form submissions

---

## 🌟 Future Enhancements

- [ ] Advanced search and filtering capabilities
- [ ] User profile customization
- [ ] Booking and reservation system
- [ ] Real-time notifications
- [ ] Payment integration
- [ ] Admin dashboard
- [ ] API documentation
- [ ] Unit and integration tests

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Aditya** - Full Stack Developer

---

## 🙏 Acknowledgments

- **Airbnb** for inspiration
- **Bootstrap** for the responsive framework
- **Mapbox** for mapping services
- **Cloudinary** for image management
- **MongoDB** for the database solution

---

## 📞 Support

If you have any questions or need support, please feel free to:
- Open an issue on GitHub
- Contact through the live website
- Reach out via email

---

**⭐ Star this repository if you find it helpful!**
