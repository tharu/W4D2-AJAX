const express= require('express');
const app= express();
const path=require('path');

app.use(express.urlencoded());
app.use(express.json());

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'view'));
app.use('/js', express.static(path.join(__dirname, 'view', 'js')));

const port=3000;

let answers=[ "It is Certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes",
"Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later",
"Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it",
"My reply is no", "My sources say no", "Outlook not so good", "Very doubtful" ];

app.listen(port,(req,res)=>
{
    console.log("Server running...");
});

app.get("/",(req,res)=>
{
    res.render('question');
});

app.get("/8ball",(req,res)=>
{
    res.json({answer: answers[Math.floor(Math.random() * answers.length)]});
});


