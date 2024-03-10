const apiKey = 'D0EZStjAsMe0KysEdSx8CrqA7Fh43XoP';

const getWeather = async (city) => {
    return await fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${city}&apikey=${apiKey}`)
    .then((res) => res.json())
    .then((json) => {
        return json;

    })
  
}


export default getWeather;