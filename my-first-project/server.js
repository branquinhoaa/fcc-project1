'use strict';
var express = require("express");
var app = express();
var routes = require("./routes.js");
var port = 8080;

routes(app);
/* 
app.get('/', function(req, res) {
    //if home, go to this page
    //res.sendFile(process.cwd() + '/index.html');
    //if not home do this
  var num = req.originalUrl;
      if (Date.parse(num)) {
          var dateUTC = "" + new Date(Date.parse(num));
          var date = "" + dateUTC.getFullYear() + "/" + dateUTC.getMonth() + "/" + dateUTC.getDay();

          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify({
              UTC: dateUTC,
              normalDate: date
          }, null, 3));
      }
});
*/
app.listen(port, function() {
    console.log('listening on port 8080')
})