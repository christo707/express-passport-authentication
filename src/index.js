import express from 'express';
import http from 'http';
import routes from './routes';

let app = express();
//app.server = http.createServer(app);

//View Engine
app.set("view engine", 'ejs');

//Routes
app.use('/api', routes);

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000, () => {
console.log();
console.log(' ,-----,--.  ,--.,------. ,--. ,---.,--------.,-----.');
console.log("| .--./|  '--'  ||  .--. '|  |'   .-'--.  .--'  .-.  ' ");
console.log("| |  | |  .--.  ||  '--'.'|  |`.  `-.  |  |  |  | |  | ");
console.log("| '--'\\|  |  |  ||  | \\  \\|  |.-'    | |  |  '  '-'  ' ");
console.log(" -----'`--'  `--'`--' `--'`--'`-----'  `--'   `-----'  ");
console.log();
console.log("Server Started on port 3000 ");
});
