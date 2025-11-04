const express = require('express');
const app = express();
const db =require('./models');
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({
    extended : true
}));

app.listen(PORT, ()=>{
    console.log('Server started on port 3000');

})

db.sequelize.sync()
.then((result)=>{
    app.listen(3000,()=>{
        console.log('Serverr started');
    })
})   


.catch((err)=>{
    console.log(err);

})

app.post("/film",async (req,res) => {
    const data = req.body;
    try {
        const film = await db.film.create(data);
        res.send(film);  
    } catch (err) {
        res.send(err);
    }
});

app.get('/film', async (req,res)  => {
    try{
        const film = await db.film.findAll();
        res.send(film);
    }catch (err){
        res.send(err);
    }
});
