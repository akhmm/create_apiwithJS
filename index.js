const express = require("express");
const app = express();
const serverPort = 5500;

app.listen(serverPort, () => {
    console.info(`I start the server ${serverPort}`);
})

app.get("/", (req, res) => {
    //console.log(req);
    //res.send(`req params : ${req.params}`);
    
    console.log(`limit: ${req.query.limit}`)
    console.log(`note: ${req.query.note}`)


   //filter + sliceでlimitを作る 
    
//http://localhost:5500/?limit=4&note=4 with & you can use several filters
    
    if(req.query.limit != undefined){
       
        if(req.query.note != undefined){
            const dataToSend = restaurants.slice(0,req.query.limit);
            dataToSend.filter((restaurant) => {return restaurant.note >= req.query.note})
            res.status(200).send(dataToSend)
        }else{
            dataToSend = restaurants.slice(0,req.query.limit);
            res.status(200).send(dataToSend)
        }
        
    }else{
        if(req.query.note != undefined){
            const dataToSend = restaurants.filter((restaurant) => {return restaurant.note >= req.query.note})
            res.status(200).send(dataToSend)
            
        }else{
            const dataToSend = restaurants.slice(0,10);
            res.status(200).send(dataToSend)
        }
    }
})




app.get("/:id", (req, res) => {

    const wantedId = parseInt(req.params.id);
    const restaurant = restaurants.find((element) => element.id === wantedId);

    if (restaurant != null){
        res.json(restaurant)
    } else{
        res.sendStatus(404)
    }

    
})




const restaurants = [
    {
        id: 1,
        name : "PAZZI",
        note : 4.3,
    },
    {
        id: 2,
        name : "ICHIGO",
        note : 4.5
    },
    {
        id: 3,
        name : "le lion et l'agneau",
        note : 5
    },
    {
        id: 4,
        name : "Napoleon",
        note : 4
    },
    {
        id: 5,
        name : "LoveCraft",
        note : 4
    },
    {
        id: 6,
        name : "ICHIZEN",
        note : 4
    },
    {
        id: 5,
        name : "LoveCraft",
        note : 4
    },
    {
        id: 5,
        name : "LoveCraft",
        note : 4
    },
    {
        id: 5,
        name : "LoveCraft",
        note : 4
    },
    {
        id: 5,
        name : "LoveCraft",
        note : 4
    },
    {
        id: 5,
        name : "LoveCraft",
        note : 4
    },

]