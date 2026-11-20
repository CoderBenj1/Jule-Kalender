const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = 3000;

const uri = 'mongodb://localhost:27017';

//Administrasjon
app.get("/admin", async (req, res) => {
    res.render("admin")
})



//res.render("index", { totalDays: 24 });


app.get("/pop/:id", (req, res) => {
  const id = Number(req.params.id);

  //Hente ut spørsmål basert på dag //id
  res.send(`Dag ${id}`);
});

let quizzes, answers;

async function start() {
    await mongoose.connect(process.env,MONGODB_URI);
    quizzes = mongoose.connection.db.collection("quizzes");
    answers = mongoose.connection.db.collection("answers");
    
}




app.get("/", async (req, res) => {
    
    res.render("index")
})

app.get("/info", async (req, res) => {
    res.render("info")
})
app.get("/login", async (req, res) => {
    res.render("login")
})

app.get("/pop/:id", (req, res) => {
    const day = req.params.id;
    console.log(req.params);
})
app.get("/pop", async (req, res) => {
    res.render("pop")
})


app.use(express.static('public'));

app.set("view engine", "ejs")

app.use(express.urlencoded({extended: true}));

app.use(express.static("public"))

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
