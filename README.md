# weather-App

# Angular Weather Application

This project is a weather application built using Angular that fetches weather data from the Open Weather API. The application displays current weather information based on user input and includes a dark mode toggle feature.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Known Issues and Limitations](#known-issues-and-limitations)
- [Approach](#approach)
  

## Features

- Fetches and displays current weather information based on user input.
- Displays information such as location, temperature, date, and time.
- Allows users to toggle between dark mode and light mode.
- Provides error messages for invalid input or connection issues.
- Responsive design that works well on various devices.

## Technologies Used

- Angular
- Bootstrap
- Open Weather API

## Installation

Follow these steps to set up and run the application locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

3. **Set up the Open Weather API key:**
   - Sign up on [Open Weather API](https://openweathermap.org/api) to get your API key.
   - Create a file named `environment.ts` in the `src/environments` folder with the following content:
     ```typescript
     export const environment = {
       production: false,
       weatherApiKey: 'YOUR_API_KEY'
     };
     ```

4. **Run the application:**
   ```bash
   ng serve
   ```
   Open your browser and navigate to `http://localhost:4200/`.

## Running the Application

To run the application locally, follow the instructions in the [Installation](#installation) section. Once the application is running, you can enter a city name or zip code to fetch and display the current weather information.

## Known Issues and Limitations

- The application currently does not support fetching weather data based on geographical coordinates.
- There is no caching mechanism for API responses, so each search will result in a new API call.
- Error messages are generic and could be improved to provide more specific feedback.

## Approach

The application was built using Angular to provide a structured and modular approach. Bootstrap was used for styling to ensure a responsive and visually appealing design. The Open Weather API was integrated to fetch real-time weather data based on user input.

### Components

1. **HeaderComponent**: Contains the application title and dark mode toggle button.
2. **WeatherComponent**: Contains the search functionality and displays the weather information.

### Services

1. **WeatherService**: Handles API requests to fetch weather data.

### Error Handling

Error handling was implemented to provide feedback to the user in case of invalid input or connection issues. The error messages are displayed in the UI to inform the user of any issues.
