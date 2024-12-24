# React Frontend for Sentiment Analysis

This is the frontend application for the sentiment analysis tool. It allows users to sign up, log in, and upload files for sentiment analysis using a FastAPI backend.

## Features

- **User Authentication**: Users can sign up and log in to the platform.
- **File Upload**: Users can upload files for sentiment analysis.
- **Sentiment Analysis Results**: The app displays results, including positive, neutral, and negative sentiment counts, along with bar and pie charts.

## Installation

### 1. Clone the Repository
git clone https://github.com/your-username/react-frontend.git cd react-frontend


### 2. Install Dependencies

Make sure you have [Node.js](https://nodejs.org) installed. Then, install the required dependencies by running:

npm install

### 3. Run the Application

To start the development server, run:

npm start

This will launch the application at `http://localhost:3000`.

## Folder Structure

- `public/`: Contains static files like `index.html` and icons.
- `src/`: Contains the source code for the application.
  - `App.js`: Main application file with routing logic.
  - `Login.js`: Component for user login.
  - `Signup.js`: Component for user signup.
  - `SentimentUpload.js`: Component for uploading files and displaying sentiment analysis results.
  - `Navbar.js`: Navigation bar component.
  - `config.js`: API URL configurations.
  - `styles.css`: Global styles for the app.

## Environment Variables

The app makes use of a FastAPI backend for user authentication and sentiment analysis. The backend API URLs are set in `src/config.js`:

- **Login API URL**: `https://fastapibackend-production-8d1b.up.railway.app/login`
- **Signup API URL**: `https://fastapibackend-production-8d1b.up.railway.app/signup`
- **Sentiment API URL**: `https://fastapibackend-production-8d1b.up.railway.app/analyze_sentiment`

Make sure to adjust these URLs as per your backend deployment if needed.

## Usage

### 1. Signup

- Navigate to the signup page to create an account.
- Enter your email and password, and submit the form.
- You will be redirected to the login page after a successful signup.

### 2. Login

- Log in using your credentials (email and password).
- Once logged in, you'll be redirected to the file upload page for sentiment analysis.

### 3. Sentiment Analysis

- Upload a file (e.g., text or CSV) for sentiment analysis.
- The app will display the sentiment counts (positive, neutral, and negative).
- Additionally, bar and pie charts will be displayed for visual representation of the sentiment analysis.

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -am 'Add new feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- The sentiment analysis API is powered by a FastAPI backend.
- Charts are generated using relevant libraries (details can be found in the backend code).



