const express = require('express');
const path = require('path');

const indexRouter = require('./index');
const apiRouter = require('./api');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.set('views', 'views');
app.set('view engine', 'hbs');

function loggingMiddleware(req, res, next) {
    const time = new Date();
    var method = req.method;
    var url = req.url;
    var localTime = time.toLocaleString();
    console.log('[' + localTime + ']' + ' ' + method + ' ' + url);
    next();
}

app.use(loggingMiddleware);
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/api', apiRouter);

app.use('*', (req, res) => {
    res.status(404).render('404', {url: req.originalUrl });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('500');
});

app.listen(port, () => {
    console.log('Server running at http://' + hostname + ':' + port);
});