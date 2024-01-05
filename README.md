# Online Store - Micro-service Oriented REST API

This Nest.js-based REST API application serves as an online store with a micro-service-oriented architecture utilizing RabbitMQ as the message broker for communication between services.

## Technologies Used

- Node.js
- Nest.js
- PostgreSQL with TypeORM
- RabbitMQ for message brokering
- Docker for containerization
- Swagger for API documentation

## Features

- **Micro-service Architecture**: Divides functionality into smaller services for scalability and maintainability.
- **RESTful Endpoints**: Provides endpoints for managing an online store, including products, orders, and users.
- **PostgreSQL Database**: Uses TypeORM for database interactions with PostgreSQL.
- **Message Broker (RabbitMQ)**: Facilitates communication between microservices.
- **Dockerized Deployment**: Utilizes Docker for containerizing services.

## Installation

### Prerequisites

- Node.js and npm installed
- PostgreSQL installed and running
- RabbitMQ installed and running
- Docker installed (optional for containerization)

### Steps

1. Clone the repository: `git clone https://github.com/Makstorm/nest-js-device-store.git`
2. Install dependencies: `cd online-store-microservices && npm install || yarn install`
3. Configure PostgreSQL connection details in the respective configuration files.
4. Start services: `npm run start:dev | yarn start:dev`

## Usage

### Endpoints

- Access various endpoints for managing products, orders, and users according to the Swagger documentation.
- Use RabbitMQ for communication between microservices.

### API Documentation

- Access the Swagger documentation at `/api/docs` to explore available endpoints and their usage.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
