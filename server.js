const express = require('express');
const axios = require('axios');
const { response } = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res)=>{
    let url = 'https://api.themoviedb.org/3/movie/921?api_key=1305ace8972811c17e07d00f55d6116d';
    axios.get(url)
    .then(response => {
        let data = response.data;
        console.log(data.title);
        res.render('index', {dataToRender: data});
    });


});

app.listen(process.env.PORT || 3000, ()=>{
    console.log('Server is running on Port 3000.');
});