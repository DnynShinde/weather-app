const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/f8cc482c77c911744c9e3421251f8d97/'+latitude+ ',' +longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. This high today is '+body.daily.data[0].temperatureMax +' with the low of '+ body.daily.data[0].temperatureMin +'. There is an' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast