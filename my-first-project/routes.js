var moment = require('moment');

module.exports = function(app) {
    app.route('/')
        .get(function(req, res) {
            res.sendFile(process.cwd() + '/index.html');
        });
    app.route('/favicon.ico')
        .get(function(req, res) {
            res.send();
        });

    app.route('/:date')
        .get(function(req, res) {
            var date = req.params['date'];

            // if it is a number, convert it from Unix
            if (/^\d+$/.test(date)) {
                var timeUTC = convertFromUnix(date);
                res.setHeader('Content-Type', 'application/json')
                res.send(JSON.stringify({
                    timeUnix: date,
                    timeUtc: timeUTC
                }, null, 3));
            }else if(/^\w+/.test(date)) {
                // convert to unix
                var timeUnix = converToUnix(date);
                res.setHeader('Content-Type', 'application/json')
                res.send(JSON.stringify({
                    timeUnix: timeUnix,
                    timeUtc: date
                }, null, 3));
            }
            else {
                // don't conver and return null
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({
                    timeUnix: null,
                    timeUtc: null
                }, null, 3));
            }
        });
};

function converToUnix(arg) {
    var formatted = moment(arg).unix();
    return formatted;
}

function convertFromUnix(date) {
    var formateDay = moment.unix(date).format('LL');
    return formateDay;
}