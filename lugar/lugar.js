const axios = require('axios');

const getLugarLatLon = async( direccion ) => {
    const encodeUrl = encodeURI(direccion)
    
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${encodeUrl}&APPID=110c326592f0d5c3c60bb99ff70fbcfc`)
        .catch (err => {
            throw new Error(`No hay resultados para ${ direccion }`);
        });

    const data = resp.data;
    const nombre = data.name + ", " + data.sys.country;
    const lat = data.coord.lat;
    const lon = data.coord.lon;

    return {
        nombre,
        lat,
        lon
    };
}


module.exports = { getLugarLatLon }
