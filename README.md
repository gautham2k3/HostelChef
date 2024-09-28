# HostelChef 

**HostelChef** is a recipe application built to help hostel students discover easy and quick recipes based on the type of cooktop they have (kettle, induction, gas stove). This is the **frontend** part of the application built using the **Vue.js** framework.

## Features

- **Search Functionality**: Users can search for recipes by name or ingredient.
- **Filters**: Recipes can be filtered based on difficulty (easy, intermediate), number of ingredients, and type of cooktop.
- **Latest Recipes**: The homepage showcases the latest recipes added to the platform.
- **Recipe Detail Page**: Clicking on a recipe provides detailed information, including ingredients, instructions, cooktop type, and more.
- **Dynamic Filtering**: Easily find recipes that are hostel-friendly by choosing from a variety of cooking setups like kettles or gas stoves.
- **Mobile Friendly**: Fully responsive design that works across different screen sizes.
  
## Technologies Used


- **Frontend**: Vue.js
  - Vue Router for navigating between pages.
  - Custom components for displaying recipes.
- **Backend**: Node.js, Express.js
  - REST API to handle recipe retrieval and search functionality.
  - Routes for fetching and searching recipes from MongoDB.
- **Database**: MongoDB
  - Stores recipe data including details like ingredients, instructions, and metadata (tags, time, difficulty).
- **Styling**: SCSS for custom styles and a clean, responsive UI.


### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) installed and running


## Project Structure
```
HostelChef/
├── public/
├── src/
│   ├── assets/          # Images and icons
│   ├── components/      # Vue components (Recipe Cards, Filters, etc.)
│   ├── views/           # Page views (Home, Recipe Details, etc.)
│   ├── router/          # Vue Router configuration
│   ├── App.vue          # Main app component
│   ├── main.js          # Entry point for Vue
|   └── config.js        # URL of the Api
└── README.md
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/gautham2k3/HostelChef.git
   cd HostelChef
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run serve
   ```

## Backend Setup
Make sure the [HostelChef Backend](https://github.com/HostelChef-CRUD) is running to fetch data for the recipes.

## API Calls
The frontend interacts with the backend to fetch recipe data. Here are the main API endpoints used:

- **GET /api/recipes**: Fetch all recipes
- **GET /api/recipes/:id**: Fetch details of a specific recipe

## Contributing
We welcome contributions! Feel free to open an issue or submit a pull request for improvements or bug fixes.

## License
This project is licensed under the MIT License.

## Contact
For any questions or suggestions, reach out to bgautham27@gmail.com.
