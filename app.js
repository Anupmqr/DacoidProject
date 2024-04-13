const express = require("express");
const app = express();
const port = 8020;
const path = require("path");
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));


app.get('/', (req,res)=>{
    res.render('androidLarge1.ejs');
})

app.get('/androidLarge2', (req,res)=>{
    res.render('androidLarge2.ejs');
})

app.get('/create', (req,res)=>{
    res.render('create.ejs');
})

app.get('/login', (req,res)=>{
    res.render('login.ejs');
})

app.post('/login', (req,res)=>{
    res.render('login.ejs');
})

app.get('/goals', (req,res)=>{
    res.render('goals.ejs');
})

app.post('/goals', (req,res)=>{
    res.render('goals.ejs');
})

app.get('/tracker', (req,res)=>{
    res.render('androidLarge8.ejs');
})

app.get('/androidLarge9', (req,res)=>{
    res.render('androidLarge9.ejs');
})

app.listen(port, ()=>{
    console.log(`app is listening to port ${port}`);
})
