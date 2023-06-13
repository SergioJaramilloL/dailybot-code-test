# DailyBot code test

You can try out the application, for example, with Postman, using the following deployment link: https://dailybot-movies.onrender.com/.

This project fulfills the characteristics of a Restful API for a movie list application. The backend application was developed in Node.js with Express. It is implemented using JavaScript and has unit tests with Jest.

The application uses a JSON file as a database where a single query is performed with three filters: sorting by rating from highest to lowest, filtering by similar movies, and filtering by actors. These filters can be used with the query parameters "movieName," "actorName," and "rating." Additionally, the response can be paginated by adding the query parameter "currentPage."

## To run it locally, you can follow these steps:

1. Ensure you have Node.js installed on your machine. You can download it from the official Node.js website and follow the installation instructions specific to your operating system.

2. Clone the project repository to your local machine using Git or download the source code as a ZIP file and extract it.

3. Open a terminal or command prompt and navigate to the project's directory.

4. Install the required dependencies by running the following command:

```
npm install
```

5. Once the dependencies are installed, you can start the application by running:

```
npm run start
```

6. If you want to make changes, execute the following command:

```
npm run dev
```

## Usage instructions

### 1. Endpoints

#### 1.1. "/api/healthcheck"

This endpoint serves to verify that the server is running correctly.

- Response

  - status: 200, message: 'Server OK'

  #### 1.2 "/api/movies"

  With this endpoint, we can request all the movies.

  - Response
    - status: 200, data: An array with all the movies.
    - status 400, data: error message

##### 1.2.1 Query params

If you want to use the search filters, you can add the following query parameters to the endpoint route.

The response of the queries with the following parameters returns an array.

- **_rating_**

This query param is used to sort the movies by rating from highest to lowest.

- **_movieName_**

This query param is used to filter by similar movies according to the following hierarchy: genre, rating, actors.

- **_actorName_**

This query parame is used to filter the movies by actor.

- **_currentPage_**

This query parameter is the only one that returns the paginated response. Use it if you want to create a movie list by returning one movie at a time.
