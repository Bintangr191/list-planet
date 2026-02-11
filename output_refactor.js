import Planet from './data.js';

Planet.map((planet) => {
    console.log(planet.id, planet.nama, planet.jenis, planet.jarak_matahari, planet.diameter);
});