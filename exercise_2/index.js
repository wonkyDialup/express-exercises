const express = require("express")
const app = express()
const PORT = 3001
const cities = [
    { cityName: "Atlanta", continent: "North America" },
    { cityName: "Tokyo", continent: "Asia" },
    { cityName: "Berlin", continent: "Europe" },
    { cityName: "Sydney", continent: "Oceania" },
    { cityName: "Cairo", continent: "Africa" },
    { cityName: "Seattle", continent: "North America" },
    { cityName: "Sao Paolo", continent: "South America" },
    { cityName: "McMurdo Station", continent: "Antarctica" },
    { cityName: "Beijing", continent: "Asia" },
    { cityName: "Paris", continent: "Europe" },
  ];

const movies = [
    { title: "Fight Club", poster:`<img src="https://bit.ly/3DYiyZA" alt="" width="300px" height="400px">`},
    { title: "Parasite", poster:`<img src="https://bit.ly/3ngLNRA" alt="" width="300px" height="400px">`},
    { title: "The Pianist", poster:`<img src="https://bit.ly/3BWm4ll" alt="" width="300px" height="400px">`},
    { title: "Interstellar", poster:`<img src="https://bit.ly/3z63g1z" alt="" width="300px" height="400px">`},
    { title: "Clerks", poster:`<img src="https://bit.ly/3E2a7wi" alt="" width="300px" height="400px">`},
];


const es6Renderer = require("express-es6-template-engine")
app.engine('html', es6Renderer);
app.set('views', 'templates')
app.set('view engine', 'html')
app.use(express.static(__dirname + '/public'));


// Write your routes between the ***
app.get("/", (req,res)=>{
    res.send("Node and express are just lovely")
})
// ***
app.post("/", (req, res) => {
    res.render("home", {
        locals: {
            cities,
        },
    });
});
// ***
app.get("/data", (req,res) => {
    res.status(400).send("This is an invalid route");
})
// ***
app.put("/", (req,res) => {
    res.send("Justin from Atlanta, GA")
})
// ***

app.get('/movies', (req, res) => {
    res.render('movies', {
        locals: {
            movies,
        }
    })
})
// ***

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})