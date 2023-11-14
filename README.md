City API

City API is an Express-based REST API that utilizes MongoDB to manage city data. It provides endpoints for searching cities, pagination, sorting, and adding new city entries.

# Getting Started
Prerequisites
Ensure you have Node.js and npm installed on your machine. Also, MongoDB should be running locally or accessible through a provided connection string in either .env file or environment variables of System.

# Sample environment variables
```
DB_URL = mongodb://localhost:27017
PORT = 5000
```
# Installation
Clone the repository:
```
git clone https://github.com/GeorgiYankov00/city-ui.git
```

# Navigate to the project directory:

```
cd city-api
```

# Install dependencies:

```
npm install
```

# Starting the API
Run the API using:

```
npm start
```

The API will be accessible at http://localhost:3001 by default.

# API Endpoints
GET /cities
Search for cities with optional query parameters:

name: Partial or full name of the city for search.
limit: Number of results per page.
skip: Number of results to skip for pagination.
sort: Sort order - 1 for asc and -1 for desc.

# Example GET city by name:
```
curl -X GET "http://localhost:3001/city?name=new&sort=name"
```

POST /cities
Add a new city to the database. Requires a JSON payload with the following properties:

name: City name (required).
area: City area (required).
population: City population (required).
density: City density (required).
Example:
bash
Copy code
curl -X POST -H "Content-Type: application/json" -d '{"name": "New City", "area": 100, "population": 100000, "density": 1000}' "http://localhost:3001/cities"
Database
The API uses MongoDB as the database. Make sure your MongoDB instance is running and accessible.

Customization
Feel free to customize the API to fit your specific requirements. You can modify the database connection settings, add middleware, or extend the functionality as needed.

Learn More
Explore the Express documentation for more details on building APIs with Express.
Dive into MongoDB documentation to learn more about MongoDB.
Feel free to adjust this template to include more details about your project, such as authentication, error handling, or any other specific features your API may have.
