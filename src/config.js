// Update API URLs in the React project to point to the new FastAPI backend

// D:\React_Frontend\src\Login.js
const LOGIN_API_URL = 'https://fastapibackend-production-8d1b.up.railway.app/login';

// D:\React_Frontend\src\Signup.js
const SIGNUP_API_URL = 'https://fastapibackend-production-8d1b.up.railway.app/signup';

// D:\React_Frontend\src\SentimentUpload.js
const SENTIMENT_API_URL = 'https://fastapibackend-production-8d1b.up.railway.app/analyze_sentiment';

// Example usage in Login.js
fetch(LOGIN_API_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: userData,
});

// Example usage in Signup.js
fetch(SIGNUP_API_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(userData),
});

// Example usage in SentimentUpload.js
fetch(SENTIMENT_API_URL, {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${auth.token}`
  },
  body: formData,
});

// Centralize API URLs in a config file (e.g., src/config.js)
export const API_BASE_URL = 'https://fastapibackend-production-8d1b.up.railway.app';
export const LOGIN_API = `${API_BASE_URL}/login`;
export const SIGNUP_API = `${API_BASE_URL}/signup`;
export const SENTIMENT_API = `${API_BASE_URL}/analyze_sentiment`;

// Import these URLs into respective components.
