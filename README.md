# City API

City API is an Express-based REST API that utilizes MongoDB to manage city data. It provides endpoints for searching cities, pagination, sorting, and adding new city entries. The filtration is case-insensitive.

# Project Architecture:

![City Web App](https://github.com/GeorgiYankov00/city-ui/blob/main/design/City%20Web%20App.png)

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
git clone https://github.com/GeorgiYankov00/city-api.git
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

The API will be accessible at http://localhost:5000 with suggested environment variables.

# API Endpoints

GET /city
Search for cities with optional query parameters:

name: Partial or full name of the city for search.
limit: Number of results per page.
skip: Number of results to skip for pagination.
sort: Sort order - 1 for asc and -1 for desc.

# Example GET request to filter city by name and sort results by name in ASC order:
```
curl -X GET "http://localhost:5000/city?name=new&sort=name"
```
# Example GET request to filter city by name and sort results by name in DESC order:
```
curl -X GET "http://localhost:5000/city?name=new&sort=-name"
```
# Example GET request used for pagination - limits to 10 results and skips the first 20:

```
curl -X GET "http://localhost:5000/city?limit=10&skip=20"
```

POST /city
Add a new city to the database. Requires a JSON payload with the following properties:
* name: A string. City name (required).
* area: A number. City area (required) .
* population: A number. City population (required).

# Example POST 

```
curl -X POST -H "Content-Type: application/json" -d '{"name": "New City", "area": 100, "population": 100000}' "http://localhost:5000/city"
```

# Database
The API uses MongoDB as the database. Make sure your MongoDB instance is running and accessible.
