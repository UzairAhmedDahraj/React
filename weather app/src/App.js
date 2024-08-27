import React, { useState } from 'react';
import Weather from './components/Weather';
import Search from './components/Search';

const App = () => {
    const [selectedCity, setSelectedCity] = useState(null);

    const handleCitySelect = (city) => {
        setSelectedCity(city);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md">
                <h1 className="text-4xl font-bold text-white text-center mb-8 shadow-text">
                    Weather App
                </h1>
                <Search onCitySelect={handleCitySelect} />
                {selectedCity ? (
                    <div className="mt-8 animate-fade-in">
                        <Weather
                            latitude={selectedCity.latitude}
                            longitude={selectedCity.longitude}
                            cityName={selectedCity.name}
                        />
                    </div>
                ) : (
                    <div className="mt-8 text-center text-white text-xl shadow-text">
                        Search for a city to see the weather
                    </div>
                )}
            </div>
            <footer className="w-full text-center text-white mt-8 pb-4">
                <p className="text-sm">
                    Developed by Uzair Ahmed Dahraj
                </p>
                <p className="text-xs mt-1">
                    Using Meteo Weather API and OpenCage Geolocation API
                </p>
            </footer>
        </div>
    );
};

export default App;