### User Authentication

- [x] Implement user registration controller logic, including password hashing.
- [x] Implement user login controller logic, including password verification and session/token management (e.g., JWT).
- [x] Implement logout functionality by clearing the JWT cookie.
  - [x] Create `handleLogout` controller in `features/auth/auth.controller.js`.
  - [x] Add a `/logout` route in `features/auth/auth.routes.js`.

### Core Features

- [x] Implement logic for saving typing test results.
  - [x] In `features/typingTest/typingTest.controller.js`, update `handleSetTypingTestResult` to:
    - [x] Extract `wpm` and `accuracy` from `req.body`.
    - [x] Get the authenticated user's ID from the JWT token (this will require auth middleware).
    - [x] Create a new `TypingTest` document with the data and save it to the database.
- [x] Implement logic for retrieving a user's historical test results.
  - [x] In `features/typingTest/typingTest.controller.js`, update `handleGetTypingTestResult` to:
    - [x] Get the authenticated user's ID from the JWT token.
    - [x] Find all `TypingTest` documents associated with the user ID.
    - [x] Return the results as a JSON response.
- [x] Implement authentication middleware to protect routes.
  - [x] Create a middleware in `features/auth/auth.middleware.js` that:
    - [x] Verifies the JWT token from the request cookies.
    - [x] Attaches the user payload to the request object (`req.user`).
  - [x] Apply the middleware to the `typingTestRoutes` in `features/typingTest/typingTest.routes.js`.

### Refactoring & Improvements

- [ ] Refactor `handleSignup` in `features/auth/auth.controller.js` to handle potential errors (e.g., duplicate email).
