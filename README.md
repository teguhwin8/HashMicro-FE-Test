# HashMicro FE Test - User Management Application

A simple yet elegant user management application built with Vue 3 and Pinia for state management. This application demonstrates CRUD (Create, Read, Update, Delete) operations with a modern, responsive UI.

## 🚀 Features

- **User List Display** - View all users in a clean, organized table
- **Create User** - Add new users with name and email
- **Edit User** - Update existing user information
- **Delete User** - Remove users with confirmation modal
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Modern UI** - Clean interface with smooth animations and transitions
- **State Management** - Powered by Pinia for reactive data handling

## 🛠️ Tech Stack

- **Vue 3** - Progressive JavaScript framework
- **Pinia** - State management library for Vue
- **Vanilla CSS** - Custom styling with CSS variables
- **Google Fonts (Roboto)** - Modern typography

## 📁 Project Structure

```
hashmicro-fe-test/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Application styles
├── js/
│   ├── app.js          # Vue application setup and component logic
│   └── store.js        # Pinia store for user management
├── assets/
│   └── hashmicro.svg   # HashMicro logo
└── README.md           # Project documentation
```

## 🎨 Design Features

- **Color Scheme**:
  - Primary Red: `#d32f2f`
  - Navy Blue: `#0a1f44`
  - Orange: `#f57c00`
  - Background: `#f5f6f8`

- **Animations**:
  - Smooth fade-in effects
  - Slide-up modal animations
  - Hover transitions on interactive elements

- **Responsive**:
  - Mobile-friendly layout
  - Adaptive navigation
  - Optimized for screens 768px and below

## 🚦 Getting Started

### Prerequisites

- A web server (e.g., MAMP, XAMPP, Live Server, or any HTTP server)
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. **Clone or download the project**:
   ```bash
   git clone https://github.com/teguhwin8/HashMicro-FE-Test.git
   cd hashmicro-fe-test
   ```

2. **Serve the application**:
   
   **Option A: Using MAMP/XAMPP**
   - Place the project folder in your `htdocs` directory
   - Start your server
   - Navigate to `http://localhost/hashmicro-fe-test`

   **Option B: Using Python**
   ```bash
   python -m http.server 8000
   ```
   Then open `http://localhost:8000`

   **Option C: Using Node.js (http-server)**
   ```bash
   npx http-server -p 8000
   ```
   Then open `http://localhost:8000`

   **Option D: Using VS Code Live Server**
   - Install the Live Server extension
   - Right-click on `index.html`
   - Select "Open with Live Server"

## 📖 Usage

### Viewing Users
- The main page displays all users in a table format
- Each row shows the user's ID, name, and email

### Creating a User
1. Click the **"Create User"** button in the header
2. Fill in the name and email fields
3. Click **"Create"** to add the user
4. The new user will appear in the table

### Editing a User
1. Click the **"Edit"** button next to the user you want to modify
2. Update the name and/or email in the modal
3. Click **"Update"** to save changes
4. The table will reflect the updated information

### Deleting a User
1. Click the **"Delete"** button next to the user you want to remove
2. Confirm the deletion in the modal dialog
3. Click **"Hapus"** to permanently delete the user
4. The user will be removed from the table

## 🔧 Code Structure

### Store (Pinia)

The `store.js` file contains the Pinia store with:

- **State**: Array of users with default data
- **Actions**:
  - `getUserById(userId)` - Retrieve a specific user
  - `createUser(userData)` - Add a new user
  - `updateUser(userId, updatedData)` - Update user information
  - `deleteUser(userId)` - Remove a user

### Application Logic

The `app.js` file contains:

- Vue 3 Composition API setup
- Modal state management
- Form handling for create/edit operations
- Delete confirmation logic

## 🎯 Key Components

### Navbar
- HashMicro logo
- Navigation menu (Dashboard, Users, Products)

### User Table
- Displays all users with ID, name, and email
- Action buttons for edit and delete operations
- Hover effects for better UX

### Modals
- **Delete Confirmation Modal**: Confirms user deletion
- **Form Modal**: Handles both create and edit operations

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Notes

- User data is stored in memory (Pinia store) and will reset on page reload
- No backend API integration - all operations are client-side
- IDs are auto-generated based on the highest existing ID + 1

## 🔮 Future Enhancements

Potential improvements for this application:

- [ ] Add backend API integration
- [ ] Implement persistent storage (localStorage/database)
- [ ] Add search and filter functionality
- [ ] Implement pagination for large datasets
- [ ] Add form validation with error messages
- [ ] Include user avatars
- [ ] Add sorting capabilities to table columns
- [ ] Implement dark mode toggle
- [ ] Add export functionality (CSV/PDF)
- [ ] Include unit tests

## 📄 License

This project is created for HashMicro Frontend Test purposes.

## 👤 Author

Created as part of HashMicro Frontend Developer assessment.

---

**Happy Coding! 🚀**
