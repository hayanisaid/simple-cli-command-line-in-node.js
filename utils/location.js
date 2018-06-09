const axios = require('axios')

module.exports = async () => {
    try{
        const results = await axios({
            method: 'get',
            url: 'https://api.ipdata.co',
          })
        
         
    }catch(err){
        console.log(err)
    }
    const { city, region } = results.data
  return `${city}, ${region}`
}