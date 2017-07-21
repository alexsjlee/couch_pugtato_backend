const Yelp = require('yelpv3');
const app_id = 'XMmJqQiMmugzuyAGBZbUDw';
const app_secret = 'hJXWAEYIqHPlSqkKXQagkZjwehuWUr0kxWV2vjDnOizcVuyVB3Jfjzj6ATeyCnFi';
var yelp = new Yelp({
    app_id,
    app_secret
});

module.exports = function(app) {
    app.get('/yelp/:term/:location', (req, res) => {
        var { term, location } = req.params;
        yelp.transactionSearch('delivery', {
            term,
            location
        }).then((data) => {
            res.send(data);
        }).catch((e) => {
            console.log(e);
        });
    });
};