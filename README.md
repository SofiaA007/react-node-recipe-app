# React-Node Recipe App 

## Getting Started 

### Prerequisites:

- Node.js and npm installed on your machine.
- An account on Aiven
- A [Spoonacular API key](https://spoonacular.com/food-api) for the recipe API

### Setting Up:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/SofiaA007/react-node-recipe-app.git
   cd react-node-recipe-app
   ```

2. **Setting up the Backend**:

   - Navigate to the backend directory:
     ```bash
     cd backend
     ```

   - Install the necessary packages:
     ```bash
     npm install
     ```

   - **Create .env file**:
     ```bash
     touch .env
     ```

   - **Spoonacular API**:
     - Add the api key to the API_KEY variable in the .env file   

   - **Aiven Setup**:
     - Create a new database instance on Aiven.
     - Copy the connection string provided by Aiven.

   - **Prisma Setup**:
     - Add the `DATABASE_URL` in the `.env` file with your Aiven connection string.
     - Initialize Prisma and generate the Prisma client:
       ```bash
       npx prisma init
       npx prisma generate
       ```

   - Start the backend server:
     ```bash
     npm start
     ```

3. **Setting up the Frontend**:

   - Navigate to the frontend directory:
     ```bash
     cd frontend
     ```

   - Install the necessary packages:
     ```bash
     npm install
     ```

   - Start the frontend development server:
     ```bash
     npm run dev
     ```
