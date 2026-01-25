# Inventory Allocation System

A simple Node.js backend for managing inventory allocation and orders.
The project demonstrates strict API discipline, clean separation of concerns, and safe stock handling under concurrent requests using SQLite.

---

## Backend Tech Stack

* Node.js
* Express.js
* Sequelize ORM
* SQLite

---

## Features
- Single order API with stock validation
- Atomic stock deduction and order creation
- Concurrency-safe inventory handling
- Clean separation of concerns (Controllers, Services, Repositories)

---

## Project Structure

```text
src/
├── routes/        → API route mapping
├── controllers/   → HTTP request/response handling
├── services/      → Business logic & transactions
├── repositories/  → Database access
├── models/        → Sequelize models
└── app.js         → Express app setup
```

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/gv1shnu/inventory-allocation-system
cd inventory-allocation-system
```

### 2. Run the application
```bash
node index.js
```
