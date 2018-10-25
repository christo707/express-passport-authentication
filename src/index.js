import express from 'express';
import http from 'http';
import routes from './routes';
import config from './config';

let app = express();
//app.server = http.createServer(app);

//View Engine
app.set("view engine", 'ejs');

//Routes
app.use('/api', routes);

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(config.port, () => {
console.log();
console.log(' ,-----,--.  ,--.,------. ,--. ,---.,--------.,-----.');
console.log("| .--./|  '--'  ||  .--. '|  |'   .-'--.  .--'  .-.  ' ");
console.log("| |  | |  .--.  ||  '--'.'|  |`.  `-.  |  |  |  | |  | ");
console.log("| '--'\\|  |  |  ||  | \\  \\|  |.-'    | |  |  '  '-'  ' ");
console.log(" -----'`--'  `--'`--' `--'`--'`-----'  `--'   `-----'  ");
console.log();
console.log("Server Started on port " + config.port );
});
