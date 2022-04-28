//require dependencies
//setup express app
//setup data parse
//require route file
//setup listener
const express = require('express');
const path = require('path');
let routes = require('./routes/routes.js')


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", routes);


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
})

app.use(express.static("public"))
const allRoutes = require("./routes");
const { all } = require('express/lib/application');
app.use(allRoutes);

app.listen(PORT,() =>{
    console.log("App listening on port:" + PORT);
});

