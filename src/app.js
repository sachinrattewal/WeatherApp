const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 8000;

// public static path = this is the path for our index.html express.static() is used for handling static(html) files. 
const static_path = path.join(__dirname, "../public");
//express works in top-down manner. index.html is now displayed at home page bcoz it is appearing before than app.get("") method
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);
app.use(express.static(static_path));


// "" for homepage
app.get("", (req , res)=>{
    res.render('index');
});

//"/about" for about page
app.get("/about", (req , res)=>{
    res.render('about')
})

//weather page
app.get("/weather", (req , res)=>{
    res.render('weather');
});

//error page
app.get("*", (req, res)=>{
    res.render('404error',{
        errorMsg: 'Oops! Page Not Found'
    })
});


app.listen(port, ()=>{
    console.log(`listening to the port at ${port}`);
});