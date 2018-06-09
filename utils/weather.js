const axios=require('axios')
module.exports= async (location)=>{
    const result= await axios({
      method:'get',
      url:'https://query.yahooapis.com/v1/public/yql',
      params:{
          format:'json',
          q:`
          select item from weather.forecast where woeid in
        (select woeid from geo.places(1) where text="${location}")
          `
      }
    })

  return result.data.query.results.channel.item
}