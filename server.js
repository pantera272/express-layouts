const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();

app.engine('hbs', hbs());
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, '/public')));

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/contact/send-message', (req, res) => {

  const { author, sender, title, message, file_design} = req.body;

  if(author && sender && title && message && file_design) {
    res.render('contact', { isSent: true, fileName: file_design });
  }
  else {
    res.render('contact', { isError: true });
  }

});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/info', (req, res) => {
  res.render('info');
});

app.get('/history', (req, res) => {
  res.render('history');
});

app.use((req, res) => {
  res.status(404).send('404 not found...');
})

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});

