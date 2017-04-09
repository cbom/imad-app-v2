var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});

app.get('/article-one', function (req,res){ 
    res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
}); 
app.get('/ui/5.html', function (req,res){ 
    res.sendFile(path.join(__dirname, 'ui', '5.html'));
}); 
app.get('/ui/6.html', function (req,res){ 
    res.sendFile(path.join(__dirname, 'ui', '6.html'));
}); 
app.get('/ui/7.html', function (req,res){ 
    res.sendFile(path.join(__dirname, 'ui', '7.html'));
}); 
app.get('/ui/8.html', function (req,res){ 
    res.sendFile(path.join(__dirname, 'ui', '8.html'));
}); 
app.get('/ui/9.html', function (req,res){ 
    res.sendFile(path.join(__dirname, 'ui', '9.html'));
}); 

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/shivam01.JPG', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'shivam01.JPG'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/1.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '1.png'));
});



var names = [];
app.get('/submit-query', function (req, res){
    //Get the name from the request
  var name = req.query.name;
      names.push(name);
   // JSON :javascript Object Notation
    res.send(JSON.stringify(names));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
