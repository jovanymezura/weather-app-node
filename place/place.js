const axios = require('axios');

const getPlaceLat = async(direction) => {
    const encodedUrl = encodeURI(direction);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'X-RapidAPI-Key': '58070d4c09mshf98a3a684ee9367p18b50fjsn314a7092e252' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {

        throw new Error(`No hay resultado para ${direction}`);
    }

    const data = resp.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        dir,
        lat,
        lng
    };

}

module.exports = {
    getPlaceLat
}