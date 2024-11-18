# Express Store API

This is a store API built using Express.js and MongoDB with JWT authentication and role-based access (Admin). Below are the routes available in this API.

## Routes

### Auth Routes
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user and get JWT token
- `POST /api/auth/logout` - Logout and remove JWT token
- `GET /api/auth/users` - Get all users (Admin only)
- `GET /api/auth/users/:id` - Get user by ID (Admin only)

### Product Routes
- `POST /api/products` - Create a new product (Admin only)
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `PUT /api/products/:id` - Update product by ID (Admin only)
- `DELETE /api/products/:id` - Delete product by ID (Admin only)

### Order Routes
- `POST /api/orders` - Create a new order (Admin only)
- `GET /api/orders` - Get all orders (Admin only)
- `GET /api/orders/:id` - Get order by ID (Admin only)
- `PUT /api/orders/:id` - Update order by ID (Admin only)
- `DELETE /api/orders/:id` - Delete order by ID (Admin only)

### Category Routes
- `POST /api/categories` - Create a new category (Admin only)
- `GET /api/categories` - Get all categories
- `GET /api/categories/:id` - Get category by ID
- `PUT /api/categories/:id` - Update category by ID (Admin only)
- `DELETE /api/categories/:id` - Delete category by ID (Admin only)

### Company Routes
- `POST /api/companies` - Create a new company (Admin only)
- `GET /api/companies` - Get all companies
- `GET /api/companies/:id` - Get company by ID
- `PUT /api/companies/:id` - Update company by ID (Admin only)
- `DELETE /api/companies/:id` - Delete company by ID (Admin only)

## Authentication Middleware

- **token** - Protect routes with JWT token authentication
- **admin** - Protect routes for Admin access only

## Environment Variables
Make sure to set up the following environment variables in your `.env` file:
- `JWT_SECRET` - Secret key for JWT token signing
- `MONGO_URI` - MongoDB connection URI
- `PORT` - Port for the server to run (default: `3000`)

### Copyright

© 2024 Fadillah Maulana. All rights reserved.