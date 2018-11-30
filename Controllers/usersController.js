
const userLat = 45.969288;
const userLon = 122.594920;

module.exports = {
    getTemperature(req,res,next){
        axios.get(`${base_url}weather/?lat=${userLat}lon=${userLon}`)
            .then(response)
            console.log(response)
    }
}