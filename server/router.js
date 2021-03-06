const fs = require('fs');
const Yelp = require('yelpv3');
const app_id = 'XMmJqQiMmugzuyAGBZbUDw';
const app_secret = 'hJXWAEYIqHPlSqkKXQagkZjwehuWUr0kxWV2vjDnOizcVuyVB3Jfjzj6ATeyCnFi';
var yelp = new Yelp({
    app_id,
    app_secret
});

module.exports = function(app) {
    app.get('/', (req, res) => {
        var html = fs.readFileSync('./server/index.html', 'utf8');
        res.send(html);
    });

    app.get('/yelp/:location', (req, res) => {
        var { location } = req.params;
        yelp.transactionSearch('delivery', { 
            location
         }).then((data) => {
            res.send(data);
        }).catch((e) => {
            console.log(e);
        });
    });

};