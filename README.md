# Personal-Projects

1st Project(Pin Details fetcher)   
# Pin Finder Web App

## Overview

The **Pin Finder Web App** is a full-stack application built with **React.js (Frontend)** and **Spring Boot (Backend)** that allows users to retrieve area, district, and state details based on a given PIN code. It provides a user-friendly interface to input PIN codes and displays results dynamically. If multiple records exist for a single PIN code, users can select the appropriate area from a dropdown menu.

## Features

- **PIN Code Lookup:** Users can input a PIN code to retrieve the corresponding area, district, and state details.
- **Area Selection:** If multiple records exist for a given PIN code, users can choose the desired area from a dropdown.
- **RESTful API:** Provides endpoints to fetch location details in JSON format.
- **Interactive Frontend:** A simple UI built with React.js to send requests and display results.
- **Efficient Data Handling:** Uses JPA repositories to manage PIN code records.
- **Cross-Origin Support:** Configured to allow frontend applications to interact seamlessly.

## Technologies Used

- **Frontend:** React.js (Functional Components, Hooks)
- **Backend:** Spring Boot (Java, REST APIs)
- **Database:** JPA Repository with SQL database (e.g., MySQL/PostgreSQL)
- **State Management:** React Hooks (useState, useEffect)
- **API Communication:** Fetch API for frontend-backend interaction

## Setup & Installation

### **Frontend Setup**

1. Navigate to the frontend project directory:
   ```bash
   cd "frontend-directory-name"
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### **Backend Setup**

1. Navigate to the backend project directory:
   ```bash
   cd "backend-directory-name"
   ```
2. Build and run the Spring Boot application:
   ```bash
   mvn spring-boot:run
   ```
3. The backend will start at:
   ```
   http://localhost:8080
   ```

## API Endpoints

- **PIN Code Service:**
  - `GET /api/pins/{pincode}` → Fetch area, district, and state details for a given PIN code
  - `GET /api/pins/default/{pincode}` → Retrieve the first available matching record

## Usage
- Pre-requisite : Please upload the pincode.csv file into a table in the database and update the db credentials in the backend before running the app.
- Open the app in the browser.
- Enter a PIN code in the input field.
- If multiple areas are found, select the appropriate area from the dropdown.
- The selected area's details will be displayed on the screen.
- Example API request:
  ```bash
  curl -X GET http://localhost:8080/api/pins/560001
  ```
- Expected API response:
  ```json
  {
    "pincode": "560001",
    "area": "MG Road",
    "district": "Bangalore",
    "state": "Karnataka"
  }





2nd Project(Employee details submission)  
# Employee Management Web App

## Overview

The **Employee Management Web App** is a full-stack application built with **React.js (Frontend)** and **Spring Boot (Backend)**. It allows users to enter employee details and retrieve area details based on PIN codes.

## Features

- **Employee Form:** Users can enter employee details such as Employee ID, Name, Date of Birth, Gender, Pincode, and Area information.
- **PIN Code Lookup:** Fetches area, district, and state details based on the entered PIN code.
- **Form Validation:** Ensures required fields (Name, Date of Birth, Gender, Pincode) are properly filled before submission.
- **Optional Fields:** Users have the option to add additional fields such as Mobile, Email, Feedback, Designation, and Date of Joining if needed.
- **User-Friendly UI:** Responsive design with an intuitive layout.
- **Validation:** Ensures proper data entry and prevents invalid inputs.

## Technologies Used

- **Frontend:** React.js (Functional Components, Hooks)
- **Backend:** Spring Boot (Java, REST APIs)
- **Database:** JPA Repository with SQL database (e.g., MySQL/PostgreSQL)
- **State Management:** React Hooks (useState, useEffect)
- **API Communication:** Fetch API for frontend-backend interaction

## Setup & Installation

### **Frontend Setup**

1. Navigate to the frontend directory:
   ```bash
   cd "frontend-directory-name"
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### **Backend Setup**

1. Navigate to the backend project directory:
   ```bash
    cd "backend-directory-name"
   ```
2. Build and run the Spring Boot application:
   ```bash
   mvn spring-boot:run
   ```
3. The backend will start at:
   ```
   http://localhost:8080
   ```

## API Endpoints

- **Employee Management:**
  - `POST /api/employee` → Add a new employee
- **PIN Code Service:**
  - `GET /api/pins/{pincode}` → Fetch area details based on PIN code

## Usage

- Pre-requisite : Please upload the pincode.csv file into a table in the database and update the db credentials in the backend before running the app.
- Open the app in the browser.
- Use the Employee Form to enter employee details.
- If necessary, add optional fields to include more details.






3rd Project(Implments both employee registration form and pin finder):
#Userbase - Employee Management System

Userbase is a full-stack employee management application designed to streamline employee registration, search, and management. Built with React for the frontend and Spring Boot for the backend, this app provides a seamless user experience with a modern and responsive UI.
Features
1. Employee Registration

    Register new employees with details like Employee ID, Name, DOB, Gender, PIN Code, Area, District, State, Mobile, Email, Feedback, Date of Joining, and Designation.

    Dynamic addition of optional fields for flexibility.

    Real-time PIN code lookup to auto-fill area, district, and state.

2. Employee Search and Management

    Search employees by ID or Name with real-time suggestions.

    Edit or delete employee details with ease.

    View detailed employee information in a clean and organized layout.

3. List All Employees

    Display all registered employees in a responsive table.

    Includes sorting and filtering options for better data management.

4. Responsive and Modern UI

    Built with a vibrant gradient background, rounded corners, and smooth animations.

    Fully responsive design for seamless use on desktop, tablet, and mobile devices.

5. Backend Integration

    RESTful APIs built with Spring Boot for efficient data handling.

    Secure and scalable backend architecture.

6. Dynamic Form Handling

    Add or remove optional fields (e.g., Mobile, Email, Feedback) dynamically.

    Input validation and error handling for a smooth user experience.

Technologies Used

    Frontend: React, React Router, CSS3

    Backend: Spring Boot, Java, H2 Database (or Oracle DB)

    APIs: RESTful APIs for communication between frontend and backend

    Styling: Custom CSS with modern design principles

How to Run

    Backend:

        Navigate to the backend directory.

        Run the Spring Boot application using mvn spring-boot:run.

        The backend will start at http://localhost:8080.

    Frontend:

        Navigate to the frontend directory.

        Install dependencies using npm install.

        Start the development server using npm start.

        The app will be available at http://localhost:3000.

Screenshots(included inside folder for reference)

Employee Registration

Employee Search

Employee List
