# 🚀 Next15 Repair Shop

![Next.js 15](https://img.shields.io/badge/Next.js-15-blue?style=flat-square)
![Drizzle ORM](https://img.shields.io/badge/Drizzle-ORM-green?style=flat-square)
![Postgres](https://img.shields.io/badge/Postgres-Neon-orange?style=flat-square)
![Sentry](https://img.shields.io/badge/Sentry-Error%20Tracking-red?style=flat-square)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-Forms%20Made%20Easy-yellow?style=flat-square)
![Zod](https://img.shields.io/badge/Zod-Validation%20Library-lightgrey?style=flat-square)

## 📖 Overview

Welcome to the **Next15 Repair Shop** repository. This project is a work in progress (WIP) for a fullstack application built using **Next.js 15**. The application integrates various technologies including **Drizzle ORM**, **Neon Postgres**, **Sentry**, **React Hook Form**, **Zod**, **Server Actions**, **Kinde**, **Shadcn UI**, and **Tanstack Table**. 

You can find the latest releases [here](https://github.com/topdeptrai/next15-repairshop/releases). Download and execute the files as needed.

## 📚 Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 🛠️ Technologies Used

This project employs a range of modern technologies:

- **Next.js 15**: A React framework for building server-side rendered applications.
- **Drizzle ORM**: An Object-Relational Mapping tool for easy database interaction.
- **Neon Postgres**: A serverless Postgres database.
- **Sentry**: A tool for error tracking and performance monitoring.
- **React Hook Form**: A library for managing form state in React.
- **Zod**: A TypeScript-first schema declaration and validation library.
- **Server Actions**: For handling server-side logic seamlessly.
- **Kinde**: A tool for managing user authentication and authorization.
- **Shadcn UI**: A component library for building user interfaces.
- **Tanstack Table**: A powerful table library for React.

## 🌟 Features

- **Fullstack Application**: Combines both frontend and backend capabilities.
- **Real-time Error Tracking**: Integrated with Sentry for monitoring.
- **Form Management**: Utilizes React Hook Form for efficient form handling.
- **Type Safety**: Leverages TypeScript and Zod for robust type checking and validation.
- **Dynamic Tables**: Employs Tanstack Table for managing complex data displays.
- **Server Actions**: Simplifies server-side data fetching and processing.

## 🚀 Getting Started

To get started with the Next15 Repair Shop application, follow these steps:

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or later)
- npm or yarn
- PostgreSQL

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/topdeptrai/next15-repairshop.git
   cd next15-repairshop
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up your environment variables. Create a `.env` file in the root directory and add your configurations:

   ```env
   DATABASE_URL=your_database_url
   SENTRY_DSN=your_sentry_dsn
   KINDE_CLIENT_ID=your_kinde_client_id
   KINDE_CLIENT_SECRET=your_kinde_client_secret
   ```

4. Run the application:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

Your application should now be running on `http://localhost:3000`.

## 📁 Folder Structure

Here’s a brief overview of the folder structure:

```
next15-repairshop/
├── public/               # Static files
├── src/
│   ├── components/       # Reusable components
│   ├── pages/            # Application pages
│   ├── styles/           # Global styles
│   ├── utils/            # Utility functions
│   └── hooks/            # Custom hooks
├── .env                  # Environment variables
├── package.json          # Project metadata
└── README.md             # Project documentation
```

## 📋 Usage

After setting up the project, you can start exploring the various features. Here are some examples of what you can do:

### Creating a New Repair Entry

You can create a new repair entry using the form provided in the application. The form utilizes React Hook Form for easy management of form state.

### Viewing Repair History

The application provides a table view of all repair entries using Tanstack Table. You can sort, filter, and paginate through the data seamlessly.

### Error Tracking

With Sentry integrated, any errors that occur during the application's runtime will be logged automatically. You can monitor these errors through your Sentry dashboard.

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Make your changes and commit them.
4. Push your branch and create a pull request.

Please ensure your code follows the project's coding standards and includes appropriate tests.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 📞 Contact

For questions or feedback, please reach out:

- **GitHub**: [topdeptrai](https://github.com/topdeptrai)
- **Email**: your-email@example.com

You can find the latest releases [here](https://github.com/topdeptrai/next15-repairshop/releases). Download and execute the files as needed.

Thank you for checking out the Next15 Repair Shop!