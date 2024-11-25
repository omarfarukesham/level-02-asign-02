![Assignment-2](https://codingzap.com/wp-content/uploads/2023/09/C_Programming_Help.webp)

<h1 align="center">
  Assignment  project - 2 🚀
</h1>


🎉 **Welcome to Backend project !!**

## 🛠️ Technology I used for this Project(BookStroe)

- **Backend Technologies:**

  - Node.js
  - Express.js
  - Mongoose
  - TypeScript
  - MongoDB Altas



- **Additional Technologies:**
  - For Developments 
  - Eslint
  - Prettier
  - gitHub
  - Vercel etc.

---
## API Endpoints 

- `GET /api/products`: Fetch all items.
- `POST /api/products`: Create a new item.
- `PUT /api/products/:productId`: Update an item by its ID.
- `DELETE /api/products/:productId`: Delete an item by its ID.

- `GET /api/orders`: Fetch all items.
- `POST /api/orders`: Create a new item.
- `PUT /api/orders/:orderId`: Update an item by its ID.
- `DELETE /api/orders/:orderId`: Delete an item by its ID.
- `GET /api/orders/revenue`: this api will calculate all the order total price.


### Key Components

- **/app/config**: Contains configuration files for environment variables and the MongoDB connection.
- **/modules**: Contains different modules like `order` and `product`, each with its own routes, controllers, models, and TypeScript interfaces.
  - **order.controller.ts**: Handles the business logic and routes related to orders.
  - **order.interface.ts**: Defines TypeScript interfaces to ensure strong typing of order data.
  - **product.controller.ts**: Manages product-related route handling and logic.
  - **product.model.ts**: Defines the Mongoose schema for product-related data.
- **/app.ts**: Entry point for the app, where the main route handling functions are set up.
- **/server.ts**: Sets up and runs the Express server, connecting the API routes with the app.

## 📤 **Summary of this Project:**

 - Express for handling routing and middleware.
 - Mongoose for interacting with a MongoDB database.
 - TypeScript for static typing, enhanced development experience, and better maintainability.
 - RESTful API endpoints for CRUD (Create, Read, Update, Delete) operations.
 - Basic error handling and validation.
 - Environment configuration using dotenv.


## How to Run

After cloning the repository, follow the steps below to set up and run the application:

1. Install dependencies:

    ```bash
    npm install
    ```

2. Set up environment variables in a `.env` file (refer to `.env.example` for structure).

3. Start the server:

    ```bash
    npm run start:dev
    ```

The server will run on [http://localhost:5000](http://localhost:5000).



## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

