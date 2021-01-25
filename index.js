const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname)));
app.use("/Controllers", express.static(__dirname + '/Controllers'));
app.use("/CoolAdmin-master", express.static(__dirname + '/CoolAdmin-master'));
app.use("/css", express.static(__dirname + '/css'));
app.use("/fonts", express.static(__dirname + '/fonts'));
app.use("/images", express.static(__dirname + '/images'));
app.use("/js", express.static(__dirname + '/js'));

app.get('/', function (req, res, next) {
  res.status(200).sendFile(path.join(__dirname + '/index.html'));
});


app.use(function (req, res, next){
  res.status(404).send("Parabéns! Entraste no vácuo da aplicação");
})

app.listen(process.env.PORT || 80);