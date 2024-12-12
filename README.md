# Peregrine Falcon Pvt Ltd Live

Welcome to the Peregrine Falcon Pharmaceuticals Pvt Ltd project! This is an advanced web application designed for seamless management of administrative and marketing processes within the pharmaceutical industry. Built using MERN stack, Next.js, and TypeScript, the platform provides robust features and a modern user experience styled with Tailwind CSS and Shadcn UI.

This project serves as the **Reporting System and Admin Panel/Dashboard** for Peregrine Falcon Pharmaceuticals Pvt Ltd, streamlining operations for Admins, Managers, and Medical Representatives.

## Features

- **Authentication and Role Management**:
  - Secure login system with role-based permissions.
  - Separate access levels for Admin, Managers, and Medical Representatives (MRs).

- **Live Location Tracking**:
  - Real-time map-based tracking for MRs.

- **Daily Activity Logs**:
  - Log visits, tasks, and interactions with healthcare professionals.

- **Attendance System**:
  - Check-in and check-out system to manage attendance effectively.

- **Reports and Analytics**:
  - Generate comprehensive reports on attendance, task performance, and location tracking.

- **Push Notifications**:
  - Real-time notifications for tasks, updates, and reminders.

## Tech Stack

### Frontend
- **Next.js** for server-side rendering and optimized performance.
- **React.js** for dynamic user interfaces.
- **TypeScript** for type safety and robust development.
- **Tailwind CSS** and **Shadcn UI** for modern and responsive design.
- **Framer Motion** for smooth animations.
- **Recharts** for data visualization and analytics.

### Backend
- **Express.js** for building RESTful APIs.
- **Mongoose** for database interactions with MongoDB.
- **Nodemailer** and **Handlebars** for email notifications.
- **JWT** for secure authentication.

## Installation

### Prerequisites
- Node.js and npm installed.

### Steps
1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd peregrine-pharma
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   cd client
   npm install
   cd ../dashboard
   npm install
   ```

3. Start the development servers:
   - Frontend:
     ```bash
     cd client
     npm run dev
     ```
   - Backend:
     ```bash
     cd dashboard
     npm start
     ```

4. Access the application:
   - Frontend: `http://localhost:3000`
   - Backend: `http://localhost:5000`

## Deployment

This project will be deployed on a Hostinger VPS. Follow these steps to deploy:

1. Build the frontend:
   ```bash
   cd client
   npm run build
   ```

2. Set up the backend server:
   ```javascript
   app.use(express.static(path.join(__dirname, 'client', 'out')));
   app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname, 'client', 'out', 'index.html'));
   });
   ```

3. Deploy the application on Hostinger's VPS and configure DNS settings for your domain.

## Packages Used

### Frontend
```json
{
  "next": "15.0.3",
  "react": "^18.3.0",
  "tailwindcss": "^3.4.1",
  "recharts": "^2.13.3",
  "framer-motion": "^11.12.0"
}
```

### Backend
```json
{
  "express": "^4.19.2",
  "mongoose": "^8.3.2",
  "jsonwebtoken": "^9.0.2",
  "nodemailer": "^6.9.13",
  "bcrypt": "^5.1.1"
}
```

## License

This project is licensed under the ISC License.

## Author

Created by **codewithjarvis**.

---

Thank you for choosing Peregrine Falcon Pharmaceuticals Pvt Ltd Live! If you have any questions or feedback, feel free to reach out.

