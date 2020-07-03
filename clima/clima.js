const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e521a80744490d6a2781c677f4bcf136&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}