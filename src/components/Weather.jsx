import React from 'react';

const Weather = ({weather, message}) => {
    if(message) return <div className={'InfoWeath'}>{message}</div>;
    return (
        <div className={'InfoWeath'}>
            <p>Location: {weather.city}</p>
            <p>Country: {weather.country}</p>
            <p>Temperature: {weather.temperature}</p>
            <p>Pressure: {weather.pressure}</p>
            <p>Sunset: {(new Date (weather.sunset * 1000)).toLocaleTimeString()}</p>
            <p>Wind: {weather.wind}</p>
            <p>Clouds: {weather.clouds}</p>
            <p>Humidity: {weather.humidity}</p>
        </div>
    );
};

export default Weather;