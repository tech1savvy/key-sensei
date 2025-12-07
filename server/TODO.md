### User Authentication

- [x] Implement user registration controller logic, including password hashing.
- [x] Implement user login controller logic, including password verification and session/token management (e.g., JWT).
- [x] Implement logout functionality by clearing the JWT cookie.
  - [x] Create `handleLogout` controller in `features/auth/auth.controller.js`.
  - [x] Add a `/logout` route in `features/auth/auth.routes.js`.

### Core Features

- [-] Implement logic for saving typing test results.
  - [ ] In `features/typingTest/typingTest.controller.js`, update `handleSetTypingTestResult` to:
    - [ ] Extract `wpm` and `accuracy` from `req.body`.
    - [ ] Get the authenticated user's ID from the JWT token (this will require auth middleware).
    - [ ] Create a new `TypingTest` document with the data and save it to the database.
- [ ] Implement logic for retrieving a user's historical test results.
  - [ ] In `features/typingTest/typingTest.controller.js`, update `handleGetTypingTestResult` to:
    - [ ] Get the authenticated user's ID from the JWT token.
    - [ ] Find all `TypingTest` documents associated with the user ID.
    - [ ] Return the results as a JSON response.
- [ ] Implement authentication middleware to protect routes.
  - [ ] Create a middleware in `features/auth/auth.middleware.js` that:
    - [ ] Verifies the JWT token from the request cookies.
    - [ ] Attaches the user payload to the request object (`req.user`).
  - [ ] Apply the middleware to the `typingTestRoutes` in `features/typingTest/typingTest.routes.js`.

### Refactoring & Improvements

- [ ] Refactor `handleSignup` in `features/auth/auth.controller.js` to handle potential errors (e.g., duplicate email).

