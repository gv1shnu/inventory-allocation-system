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

## Folder Structure

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

### 2. Run the Backend
```bash
npm install
node index.js
```
Backend runs on ```http://localhost:4000```

### 3. Running the Frontend
```bash
cd frontend
npm install
npm start
```
Frontend runs on ```http://localhost:3000```

## API Flow

### 1. Route layer
- Receives POST /order request
- Maps the request to order controller

### 2. Controller layer
- Parses and validates request body
- Delegates business logic to service layer
- Returns the final HTTP response

### 3. Service layer
- Starts a DB transaction
- Validates product existence and available stock
- Updates stock and creates an order atomically
- Commits or rolls back the transaction based on outcome

### 4. Repository layer
- Handles direct DB interactions

### 5. Model layer
- Defines DB schemas for product, order entities

## Concurrency handling

To handle concurrent order requests safely, the system uses database transactions.

- Each order is processed inside a single transaction

- Product stock is checked and updated atomically

- If multiple requests attempt to order the same product simultaneously:

    - Only valid orders are committed

    - Transactions that would result in negative stock are rolled back

This prevents:

* Race conditions

* Inconsistent inventory states

* Negative stock value
