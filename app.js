const place = require('./place/place');
const weather = require('./weather/weather');

const argv = require('yargs').options({
    direction: {
        alias: 'd',
        desc: 'Direccion de la ciudad',
        demand: true
    }
}).argv;

const getInfo = async(direc) => {

    try {
        const coords = await place.getPlaceLat(direc);
        const temp = await weather.getWeather(coords.lat, coords.lng);
        return `El clima de ${coords.dir} es de ${temp}.`;
    } catch (e) {
        return `No se pudo encontrar el clima de ${direc}`;
    }

}

getInfo(argv.direction).then(respuesta => {
    console.log("respuesta: ", respuesta);
}).catch(error => {
    console.log("error: ", error);
});