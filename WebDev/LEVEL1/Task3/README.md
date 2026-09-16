# Thermo Temperature Converter

A modern, responsive temperature converter built with vanilla HTML, CSS, and JavaScript.

## Features

- Convert between Celsius, Fahrenheit, and Kelvin
- Display all three converted values at once
- Validate missing or invalid temperature input
- Prevent temperatures below absolute zero
- Responsive layout for desktop and mobile screens
- Accessible labels, alerts, and live result updates

## Project Structure

- `index.html` - Page structure and form controls
- `styles.css` - Responsive layout and visual styling
- `script.js` - Conversion logic and validation

## Run Locally

Open `index.html` directly in a browser. No build tools or dependencies are required.

## Conversion Formulas

- Celsius to Fahrenheit: `(C × 9/5) + 32`
- Fahrenheit to Celsius: `(F - 32) × 5/9`
- Celsius to Kelvin: `C + 273.15`
- Kelvin to Celsius: `K - 273.15`

The converter uses Celsius as its internal reference unit before calculating the other values.
