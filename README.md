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

- Open the app in the browser.
- Use the Employee Form to enter employee details.

---
Let me know if you want any modifications! 🚀

