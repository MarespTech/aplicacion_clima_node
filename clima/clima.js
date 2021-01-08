const axios = require('axios');
const { getLugarLatLon } = require("../lugar/lugar");

const getClima = async(lat, lon) => {
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=110c326592f0d5c3c60bb99ff70fbcfc&units=metric`)

    return resp.data.main.temp;

}

const getInfo = async( direccion ) => {
    try {
        const coordenadas = await getLugarLatLon(direccion);
        const temperatura = await getClima( coordenadas.lat, coordenadas.lon);

        console.log(`El clima de ${coordenadas.nombre} es de ${temperatura}.`);
    } catch (error) {
        console.log(error);
    }
}


module.exports = { getClima, getInfo }