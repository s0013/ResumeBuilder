import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import yourImage from '../images/bg.png'; // Importing the image

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGetStarted = () => {
    // Navigate to Header.js when Get Started button is clicked
    navigate('/header');
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white bg-opacity-80 p-4 flex justify-between items-center">
        <span className="text-gray-800 text-lg font-semibold">Resume Builder</span>
      </nav>

      {/* Main content */}
      <div className="container mx-auto mt-40 flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center justify-center w-full">
          {/* Title */}
          <div className="text-center md:w-1/2 mb-8 md:mb-0 text-white">
            <h1 className="text-3xl font-bold mb-4">Make your Resume here</h1>
            {/* Get started button */}
            <button onClick={handleGetStarted} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Get Started
            </button>
          </div>
          {/* Image */}
          <div className="w-full md:w-1/2 bg-white bg-opacity-75 rounded-lg p-4 transition duration-500 ease-in-out transform hover:scale-105">
            <img src={yourImage} alt="You" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
