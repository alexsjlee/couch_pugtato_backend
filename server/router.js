// var { mongoose } = require('./db/mongoose');
const { ObjectID } = require('mongodb');
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

// const yelp = require('yelp-fusion');
// const clientId = 'XMmJqQiMmugzuyAGBZbUDw';
// const clientSecret = 'hJXWAEYIqHPlSqkKXQagkZjwehuWUr0kxWV2vjDnOizcVuyVB3Jfjzj6ATeyCnFi';

// module.exports = function(app) {
//     app.get('/yelp/:term/:location', (req, res) => {
//         var { term, location } = req.params;
//         const searchRequest = {
//             term,
//             location
//         };
//         yelp.accessToken(clientId, clientSecret).then(response => {
//         const client = yelp.client(response.jsonBody.access_token);

//         client.transactionSearch('delivery', searchRequest).then(response => {
//             const result = response.jsonBody.businesses;
//             const prettyJson = JSON.stringify(result, null, 4);
//             res.send(prettyJson);
//         });
//         }).catch(e => {
//         console.log(e);
//         });

//     });

// };