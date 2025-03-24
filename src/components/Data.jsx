import Form from "./Form.jsx";
import Weather from "./Weather.jsx";
import {useState} from "react";
import {api_key, base_url} from "../utils/constants.js";

const Data = () => {
    const [weatherInfo, setWeatherInfo] = useState({});
    const [message, setMessage] = useState("Введите название города");

    const getWeather = async (city) => {
        try {
            const res = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
            const data = await res.json();
            setWeatherInfo({
                city: data.name,
                country: data.sys.country,
                temperature: data.main.temp,
                pressure: data.main.pressure,
                sunset: data.sys.sunset,
                wind: data.wind.speed,
                clouds: data.clouds.all,
                humidity: data.main.humidity
            });
            setMessage('');
        } catch (e) {
            console.log(e)
            setMessage('Город не найден, введите корректное название города');
        }
    }

    return (
        <div>
            <Form getWeather={getWeather}/>
            <Weather weather={weatherInfo} message={message}/>
        </div>
    );

};

export default Data;