const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req,res) => {
  res.render('index');
});

app.get('/about', (req,res) => {
  res.render('about');
})

app.listen(8000, () => {
  console.log('Server is connected in the port 8000');
});
