const Form = ({getWeather}) => {

    const handleGetWeather = e => {
        e.preventDefault(); // отменяет перезагрузку страницы
        const city = e.target.city.value.trim(); //trim() удаляет пробелы в начале и в конце строки
        getWeather(city);
    };


    return (
        <form onSubmit={handleGetWeather}>
            <input type={"text"} name={"city"}/>
            <button type={"submit"}>Get Weather</button>
        </form>
    );
};

export default Form;