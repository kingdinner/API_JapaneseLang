

# Japanese Language Task System API

This API provides a task system for learning the Japanese language, allowing users to register, login, and perform various tasks based on their account type. The API uses JWT (JSON Web Tokens) for authentication and bcryptjs for password hashing. Data is stored in a MySQL database.

## Features

- User registration: Students, professors, and administrators can create accounts.
- User login: Users can authenticate themselves using their credentials and obtain a JWT token.
- Task management: Users can perform various tasks related to learning the Japanese language.
- Task upload: Users can upload files related to a specific task.
- Task details: Users can view the details of a specific task.
- Task creation: Professors and administrators can create new tasks.
- Task update: Professors and administrators can update existing tasks.
- Task deadline: Tasks have a deadline for completion.

## Endpoints

### Registration

- `POST /api/register/student`: Register a new student account.
- `POST /api/register/professor`: Register a new professor account.
- `POST /api/register/admin`: Register a new admin account.

### Authentication

- `POST /api/login`: Authenticate a user and receive a JWT token.

### Task Management

- `GET /api/tasks`: Retrieve a list of tasks.
- `GET /api/tasks/:id`: Retrieve details of a specific task.
- `POST /api/tasks`: Create a new task.
- `PUT /api/tasks/:id`: Update an existing task.

### Task Upload

- `POST /api/upload`: Upload a file for a specific task.

## Request Body Parameters

- `userID`: ID of the user performing the task or registration.
- `taskID`: ID of the task being performed or created.
- `uploaded`: Date and time of the file upload.
- `filename`: Name of the uploaded file.
- `level`: Level of the task (e.g., beginner, intermediate, advanced).
- `type`: Type of the task (e.g., reading, writing, listening).

### Employee Object

- `username`: Username of the employee.
- `email`: Email address of the employee.
- `lastname`: Last name of the employee.
- `firstname`: First name of the employee.
- `address`: Address of the employee.
- `contactnumber`: Contact number of the employee.

### Task Object

- `taskname`: Name of the task.
- `details`: Details or description of the task.
- `date`: Date when the task was created.
- `deadline`: Deadline for completing the task.

## Setup

1. Install dependencies: `npm install`
2. Configure the MySQL database connection in `config.js`.
3. Start the server: `npm start`

Make sure you have Node.js and MySQL installed on your system before running the setup.

Feel free to modify and enhance this API according to your specific requirements.
