const request = require('request')

const getUrl = address => `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYWxleDIyNSIsImEiOiJjazViYWk5ZGMwYXBiM25vNW5kcTRmazc3In0.SFXh7I-BkhEQ2MMOm4TJNw`

const geocode = (address, callback) => {
  const url = getUrl(address)

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect', undefined)
    } else if (!body.features.length) {
      callback('Nothing found', undefined)
    } else {
      const { center, place_name } = body.features[0]
      callback(undefined, {
        lat: center[0],
        lon: center[1],
        place: place_name
      })
    }
  })
}

module.exports = { geocode }
