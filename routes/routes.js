const url = "https://jsonplaceholder.typicode.com/posts/1" 
const axios = require('axios');

module.exports = (app, db)=>{
    app.get('/email', (req, res)=>{
        axios.get(url)
        .then(response=>{
            console.log(response.data)
            res.send(response.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }) 
}