const geocode = require('./utlis/geocode')
const forcast = require('./utlis/forcast')

const location = process.argv[2]

if (!location) {
  console.log('Please Provide a Location')
} else {
  geocode(location, (error, { Latitude, Longitude, Location }={}) => {
    if (error) {
      return console.log(error)
    }
    forcast(Latitude, Longitude, (error, forecastData) => {
      if (error) {
        return console.log(error)
      }
      console.log(Location)
      console.log(forecastData)
    })
  })
}
