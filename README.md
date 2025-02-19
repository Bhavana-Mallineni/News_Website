# News App

## Overview
This is a React-based news application that fetches and displays news articles from the NewsAPI. The app provides users with the latest news across various categories such as business, entertainment, health, science, sports, and technology.

## Features
- Fetches real-time news articles from NewsAPI
- Infinite scrolling for seamless browsing
- Category-based news filtering
- Dark mode support
- Responsive design for mobile and desktop
- Loading bar for smooth user experience

## Technologies Used
- **Frontend**: React.js, React Router, Bootstrap
- **API**: NewsAPI
- **Hosting**: Render

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- Node.js (latest stable version)
- npm or yarn

### Clone the Repository
```sh
git clone https://github.com/Bhavana-Mallineni/News-App.git
cd News-App
```

### Install Dependencies
```sh
npm install
# or
yarn install
```

### Set Up Environment Variables
Create a `.env` file in the root directory and add your NewsAPI key:
```env
REACT_APP_NEWS_API=your_api_key_here
```

### Run the App Locally
```sh
npm start
# or
yarn start
```
The app will be available at `http://localhost:3000/`.

## Deployment
### Deploying on Render
1. Push your code to a GitHub repository.
2. Log in to [Render](https://render.com/) and create a new web service.
3. Connect your GitHub repository.
4. Set the **Build Command** as:
   ```sh
   npm run build
   ```
5. Set the **Start Command** as:
   ```sh
   npm start
   ```
6. Add environment variables in Render's settings.
7. Deploy the app.

## API Limitations & CORS Issues
- NewsAPI does **not** allow client-side requests in the free plan.
- Use a **backend proxy** to fetch news data or try alternative APIs like GNews.

## Future Improvements
- Implement user authentication
- Add a custom backend for caching news
- Support for multiple languages
