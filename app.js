const express = require('express');
const app = express();
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey'})
});
app.listen(80, () => console.log('Example app listening on port 80!'))