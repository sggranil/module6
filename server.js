const { table } = require('console');
const { request, response } = require('express');
var express = require('express'); // include natin yung package na ininstall natin which is express
var morgan = require('morgan'); // include natin yung package na ininstall natin which is morgan
var path = require('path');

var app = express(); // kukunin natin lahat nung files na meron si express para magamit
app.use(morgan('combined'));

app.use(express.static('ui')); 

    /* kukunin natin yung directory folder kung nasaan si index.html 
    once na ni-run natin yung server then the options */

  

    app.get('/', (request, response) => {
        response.sendFile(path.join(__dirname, 'ui', 'index.html'));
    });

    var comments = [];
    
    app.get('/show-comment', (request, response) => {
        var comment = request.query.comment;
        comments.push(comment);
        response.send(JSON.stringify(comments));
    });

    app.get('scan.html', (request, response) => {
        response.sendFile(path.join(__dirname, 'ui', 'scan.html'));
    });

    app.get('generate.html', (request, response) => {
        response.sendFile(path.join(__dirname, 'ui', 'generate.html'));
    });

    app.get('tables.html', (request, response) => {
        response.sendFile(path.join(__dirname, 'ui', 'tables.html'));
    });

    

    app.get('assets/css/style.css', (request, response) => {
        response.sendFile(path.join(__dirname, 'assets', 'css', 'style.css'));
    });

    app.get('assets/css/media.css', (request, response) => {
        response.sendFile(path.join(__dirname, 'assets', 'css', 'media.css'));
    });

    app.get('assets/css/template.css', (request, response) => {
        response.sendFile(path.join(__dirname, 'assets', 'css', 'template.css'));
    });

    app.get('assets/img/qr.png', (request, response) => {
        response.sendFile(path.join(__dirname, 'assets', 'img', 'qr.png'));
    });

    app.get('assets/js/script.js', (request, response) => {
        response.sendFile(path.join(__dirname, 'assets', 'js', 'script.js'));
    });

    /* yung mga app.get na yan, kapag tinype natin sa browser magkakaroon ng message na nakuha natin yung file
    so inshort, chinecheck natin yung file request kung na execute ba ng maayos */

    app.listen(8080, () => console.log('listening at 8080')); 

     /* nag set tayo ng server config shit then nag assign tayo ng fucking port
    then ipiprint natin sa console yung string sa loob using the command node index.js sa cmd */
