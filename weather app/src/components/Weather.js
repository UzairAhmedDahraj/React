import React, { useState, useEffect } from 'react';
import { Sun, Moon, CloudRain, Wind } from 'lucide-react';

const Weather = ({ latitude, longitude, cityName }) => {
    const [weather, setWeather] = useState({
        temperature: null,
        rainStatus: null,
        windSpeed: null,
        isDay: true,
    });

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation,wind_speed_10m`
                );
                const data = await response.json();
                const hourData = data.hourly;

                setWeather({
                    temperature: hourData.temperature_2m[0],
                    rainStatus: hourData.precipitation[0] > 0 ? 'Raining' : 'Clear',
                    windSpeed: hourData.wind_speed_10m[0],
                    isDay: new Date().getHours() >= 6 && new Date().getHours() < 18,
                });
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeather();
    }, [latitude, longitude]);

    const { temperature, rainStatus, windSpeed, isDay } = weather;

    return (
        <div className="max-w-md mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 text-white">
                <h2 className="text-1xl font-bold mb-4 text-center">{cityName}</h2>
                <div className="flex items-center justify-between mb-6">
                    <div className="text-6xl font-semibold">
                        {temperature !== null ? `${temperature.toFixed(1)}°C` : 'Loading...'}
                    </div>
                    <div className="text-5xl">
                        {isDay ? <Sun /> : <Moon />}
                    </div>
                </div>
                <div className="flex justify-between items-center text-lg">
                    <div className="flex items-center">
                        <CloudRain className="mr-2" />
                        <span>{rainStatus}</span>
                    </div>
                    <div className="flex items-center">
                        <Wind className="mr-2" />
                        <span>{windSpeed !== null ? `${windSpeed.toFixed(1)} m/s` : 'Loading...'}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weather;