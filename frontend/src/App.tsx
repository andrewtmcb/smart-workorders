import React from 'react';
import './App.css'; // You can keep this for custom CSS if needed.

function App() {
  return (
    // The main container for the application.
    // We use flexbox classes from Tailwind to center the content.
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-4">
      
      {/* The main content card, with a modern, professional look. */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-2xl text-center transition-transform transform hover:scale-105">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-purple-600 dark:text-purple-400">
          Welcome!
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
           built with React and Tailwind CSS.
        </p>
        
        {/* The 'Learn more' button that Playwright looks for. */}
        <a
          href="https://github.com/andrewtmcb/smart-workorders" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 rounded-full text-white font-semibold transition-colors duration-300 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          learn more about the project
        </a>
      </div>
    </div>
  );
}

export default App;
