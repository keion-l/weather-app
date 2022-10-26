const express = require('express')
require('dotenv').config();

const app = express()
const port = 3000

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.RapidAPIKey,
		'X-RapidAPI-Host': process.env.RapidAPIHost
	}
};

const getUrl = (lat, lng, fields) => {
  return `https://climacell-microweather-v1.p.rapidapi.com/weather/nowcast?lon=${lng}&lat=${lat}&fields=${fields}`;
}



app.get('/currentWeather', (req, res) => {
  const latLng = req.body.data.location; 
  const fields = req.body.data.fields; 

  var data;

  fetch(getUrl(latLng.lat, latLng.lng, fields), options)
	  .then(response => response.json())
	  .then(response => data = response)
	  .catch(err => console.error(err));  

  return res.send(data); 

}); 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

})
