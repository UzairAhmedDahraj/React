import React, { useState } from 'react';

const Search = ({ onCitySelect }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        const apiKey = process.env.REACT_APP_API_KEY;
        if (value.length > 2) {
            setIsLoading(true);
            try {
                const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(value)}&key=${apiKey}`);
                const data = await response.json();
                
                const cities = data.results.map(result => ({
                    name: result.formatted,
                    latitude: result.geometry.lat,
                    longitude: result.geometry.lng
                }));
                
                setSearchResults(cities);
            } catch (error) {
                console.error('Error fetching city data:', error);
            } finally {
                setIsLoading(false);
            }
        } else {
            setSearchResults([]);
        }
    };

    const handleCitySelect = (city) => {
        setSearchTerm(city.name);
        setSearchResults([]);
        onCitySelect(city);
    };

    return (
        <div className="relative max-w-md mx-auto">
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search for a city..."
                className="w-full py-3 px-4 rounded-full bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white transition duration-300"
            />
            {isLoading && (
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                </div>
            )}
            {searchResults.length > 0 && (
                <ul className="absolute w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto z-10">
                    {searchResults.map((city, index) => (
                        <li
                            key={index}
                            onClick={() => handleCitySelect(city)}
                            className="p-3 cursor-pointer hover:bg-gray-100 text-gray-800"
                        >
                            {city.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Search;