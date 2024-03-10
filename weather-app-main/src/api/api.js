const apiKey = 'f381786de4d80e5794b5e5dabb57b755';

const getWeather = async (city) => {
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then((res) => res.json())
    .then((json) => {
        return json;

    })
  
}


export default getWeather;