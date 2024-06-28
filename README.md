# React-Node Recipe App 

Welcome to the react recipe app. You will be able to search for recipes, view recipe details and add them to your favourites.

## Getting Started 

### Prerequisites:

- Node.js and npm installed on your machine.
- An account on Aiven (https://aiven.io/)
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

  - Create .env file:
    ```bash
    touch .env
    ```

- Spoonacular API:
  - Add the api key to the `API_KEY` variable in the `.env` file   

- Aiven Setup:
  - Create a new database instance on Aiven.
    - First create a project 
      - Project name: Recipe-app
      - Organization: My organization
      - Billing: Billing group for My Organisation
    - Create Service by selecting:
      - PostgreSQL
      - Free plan
      - Region: Europe
      - dn-lon
      - Name and tag: recipe-app-db

  - Copy the connection string provided by Aiven.
      - Once service has been created click on service name (recipe-app-db)
      - Locate the Service URI in the Connection information panel and copy 

- Prisma Setup:
  - Add the `DATABASE_URL` in the `.env` file with your Aiven connection string.

  - Synchronize Database:
    ```bash
    npx prisma db push  
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

     
4. **Running the cypress tests**:
 - Navigate to the root directory:

 - Install cypress:
     ```bash
     npm install cypress --save-dev
     ```

  - Start both frontend and backend development servers as per previous steps
 
  - Open Cypress from root directory:
    ```bash
     npx cypress open
     ```

  - Select E2E testing

  - Choose a browser and click start testing
  
  - Select home_page.cy.js and the tests will auto run
    
  - Close browser once tests have completed 

