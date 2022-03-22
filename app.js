require('dotenv').config();

const express = require('express')
const app = express()
const port = process.env.port;

app.set('view engine', 'hbs');

app.use(express.static('public'));

// app.get('/', function (req, res) {
//   res.render('home', {
//     nombre: 'Omar Arredondo',
//     titulo: 'Curso Node'
//   });
// });

// app.get('/generic', function (req, res) {
//   res.sendFile(__dirname + '/public/generic.html');
// });

// app.get('/elements', function (req, res) {
//   res.sendFile(__dirname + '/public/elements.html');
// });

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});