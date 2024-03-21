# Form Validation with React: UseReducer Hook and Reusable Input Component

This project demonstrates how to implement form validation in a React application using the useReducer hook along with a reusable input component.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

```bash
git clone <https://github.com/Mark-Alexis-Posadas/form-reducer>
```

2. Navigate to the project directory:

```bash
cd form-validation-react
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Usage

This application allows users to fill out a form with various fields and validates the input data. The form includes features such as:

- Input validation for required fields.
- Dynamic rendering of input fields based on data configuration.
- Dark mode toggle feature.

## Features

- **Form Validation**: Utilizes the useReducer hook to manage form state and perform validation checks.
- **Reusable Input Component**: Implements a reusable input component that can be easily customized and integrated into various forms.
- **Dynamic Form Configuration**: Supports dynamic rendering of input fields based on configuration data, allowing for flexibility in form design.
- **Theme Toggle**: Includes a dark mode toggle feature for enhanced user experience.

## Folder Structure

The project folder structure is organized as follows:

form-validation-react/
│
├── src/
│ ├── components/ # Reusable UI components
│ ├── App.js # Main application component
│ ├── Input.js # Reusable input component
│ └── ...
│
├── public/ # Static assets and index.html
├── package.json # Project dependencies and scripts
└── README.md # Project documentation

## Contributing

Contributions are welcome! If you have any suggestions, enhancements, or bug fixes, please submit a pull request or open an issue.

## License

This project is licensed under the [MIT License](LICENSE).
