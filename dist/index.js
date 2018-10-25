'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
//app.server = http.createServer(app);

//View Engine
app.set("view engine", 'ejs');

//Routes
app.get('/', function (req, res) {
  res.render('home');
});

app.listen(3000, function () {
  console.log();
  console.log(' ,-----,--.  ,--.,------. ,--. ,---.,--------.,-----.');
  console.log("| .--./|  '--'  ||  .--. '|  |'   .-'--.  .--'  .-.  ' ");
  console.log("| |  | |  .--.  ||  '--'.'|  |`.  `-.  |  |  |  | |  | ");
  console.log("| '--'\\|  |  |  ||  | \\  \\|  |.-'    | |  |  '  '-'  ' ");
  console.log(" -----'`--'  `--'`--' `--'`--'`-----'  `--'   `-----'  ");
  console.log();
  console.log("Server Started on port 3000 ");
});
//# sourceMappingURL=index.js.map