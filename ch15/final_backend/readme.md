## README.md

# Blog API Server

A Node.js + Express application providing APIs for user authentication, blog management, and post-related functionalities.

## Features

- **User Authentication**

  - Register, login, and logout using JSON Web Tokens (JWT).
  - Supports access and refresh token-based authentication.

- **Blog Management**

  - CRUD operations for blog posts.
  - Search blog posts by title.
  - Retrieve related blog posts based on category.

- **Security**
  - Middleware to authenticate requests using access tokens.
  - Refresh tokens handled securely via HTTP-only cookies.

---

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

---

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file with the following content:

   ```env
   ACCESS_TOKEN_SECRET=<your_access_token_secret>
   REFRESH_TOKEN_SECRET=<your_refresh_token_secret>
   TOKEN_EXPIRE=10s
   ```

4. Start the server:

   ```bash
   npm start
   ```

5. Open your browser or API testing tool (e.g., Postman) and access the server at:
   ```
   http://localhost:3000
   ```

---

## API Endpoints

### Authentication

#### Register a New User

**POST** `/register`

- **Request Body:**
  ```json
  {
    "email": "example@example.com",
    "username": "exampleuser",
    "password": "password123"
  }
  ```
- **Response:**
  - `201 Created`: Registration successful.

#### Login

**POST** `/login`

- **Request Body:**
  ```json
  {
    "email": "example@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  - `200 OK`: Access and refresh tokens issued.

#### Logout

**POST** `/logout`

- Logs the user out and clears the refresh token.

#### Refresh Token

**POST** `/token`

- Issues a new access token using a valid refresh token.

---

### Blog Posts

#### Get All Posts

**GET** `/posts`

- **Response:** Array of all blog posts.

#### Create a New Post

**POST** `/posts`

- **Request Body:**
  ```json
  {
    "title": "My First Post",
    "category": "Tech",
    "thumbnail": "url/to/thumbnail",
    "desc": "This is a blog post description.",
    "username": "exampleuser"
  }
  ```
- **Response:**
  - `201 Created`: Returns the created post.

#### Search Posts

**GET** `/posts/search`

- **Query Parameters:**
  - `title`: The title keyword to search for.
- **Response:** Array of posts matching the search criteria.

#### Get Post by ID

**GET** `/posts/:id`

- **Response:** The post with the specified ID.

#### Delete a Post

**DELETE** `/posts/:id`

- **Response:**
  - `204 No Content`: Post deleted.

#### Get Related Posts

**GET** `/posts/:id/related`

- **Response:** Array of related posts from the same category.

---

## Mock Data

- **Users**: Stored in memory as an array of objects.
- **Blog Posts**: Managed per user's IP in memory.

---

## Development

To modify or extend the server, make changes to `server.js`.

- Authentication logic: `authenticateToken` middleware.
- Blog-related routes: `/posts` endpoints.

---

## License

This project is licensed under the MIT License.

---

**Happy Coding!** 🎉
