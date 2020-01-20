const axios = require('axios');



const getWeather = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=4383169e7fce61948489b18c67ccb643&units=metric`)

    return resp.data.main.temp;


}

module.exports = {
    getWeather
}