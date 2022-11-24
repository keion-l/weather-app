import fetch from 'node-fetch';
import express from 'express';

const app = express()
const port = 3000

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': "35b9bf030emsh3abe6af2d799be6p143e15jsnbf25ec450d65",
		'X-RapidAPI-Host': "climacell-microweather-v1.p.rapidapi.com"
	}
};

const getUrl = (lat, lng, fields) => {
  return `https://climacell-microweather-v1.p.rapidapi.com/weather/nowcast?lon=${lng}&lat=${lat}&fields=${fields}`;
}


app.get('/currentWeather', (req, res) => {
  console.log('get current'); 

  var data;

  fetch(getUrl(`-19.2590`, `-146.8169`, 'precipitation'), options)
	  .then(response => response.json())
	  .then(response => data = response)
	  .catch(err => console.error(err));  

  console.log(data); 

  return res.send(data); 

}); 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

})
