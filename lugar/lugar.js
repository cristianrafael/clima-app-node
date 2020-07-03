const axios = require('axios');

const apiKey = "e521a80744490d6a2781c677f4bcf136";

const getLugarLatLon = async(direccion) => {
    const encodeUrl = encodeURI(direccion);

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${encodeUrl}&appid=${apiKey}&units=metric`)

    return {
        direccion,
        lat: resp.data.coord.lat,
        lon: resp.data.coord.lon
    }
}

module.exports = {
    getLugarLatLon
}