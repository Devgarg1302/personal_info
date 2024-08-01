# Personal Info

This project is a web application that retrieves personal details of bank customers from a MongoDB database and presents them in a frontend developed with React. Users can view and edit information such as personal details, customer occupation, nationality and tax residence, address, and contact info. The nationality can be edited using the RestCountries API.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Retrieve Customer Data**: Fetch customer details from a MongoDB database.
- **View Personal Details**: Display personal details, occupation, nationality and tax residence, address, and contact info.
- **Edit Nationality**: Use the RestCountries API to edit or change nationality.
- **Responsive UI**: User-friendly and responsive interface built with React.

## Installation

1. Clone the repository:
    ```sh
    https://github.com/Devgarg1302/personal_info.git
    cd personal-info
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Set up the MongoDB database:
    - Make sure you have MongoDB installed and running.
    - Create a database and collection for storing customer details.

4. Set up environment variables:
    - Create a `.env` file in the root directory.
    - Add your MongoDB connection string and RestCountries API endpoint to the `.env` file.
    ```sh
    MONGO_URI=your_mongodb_connection_string
    RESTCOUNTRIES_API_URL=https://restcountries.com/v3.1/all
    ```

## Usage

1. Start the backend server:
    ```sh
    npm run server
    ```

2. Start the frontend development server:
    ```sh
    npm start
    ```

3. Open your browser and go to `http://localhost:3000` to view the application.

## API

### Get Customer Details

- **Endpoint**: `/api/customers/:id`
- **Method**: GET
- **Description**: Fetch customer details by ID.

### Update Nationality

- **Endpoint**: `/api/customers/:id/nationality`
- **Method**: PUT
- **Description**: Update the nationality of a customer.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
