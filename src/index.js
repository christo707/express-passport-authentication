import express from 'express';
import http from 'http';
import routes from './routes';
import config from './config';
import cookieSession from 'cookie-session';
import keys from './config/keys';
import passport from 'passport';
import bodyParser from 'body-parser';

let app = express();
//app.server = http.createServer(app);

//View Engine
app.set("view engine", 'ejs');

//Body Parser
app.use(bodyParser.json({
  limit : config.bodyLimit
}));

// Set up Cookie session
app.use(cookieSession({
  maxAge: keys.session.age,
  keys: [keys.session.secret]
}))

//Initiaalize passport
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use('/api', routes);

app.get('/', (req, res) => {
  res.render('home', { user: req.user});
});

app.listen(config.port, () => {
console.log();
console.log(' ,-----,--.  ,--.,------. ,--. ,---.,--------.,-----.');
console.log("| .--./|  '--'  ||  .--. '|  |'   .-'--.  .--'  .-.  ' ");
console.log("| |  | |  .--.  ||  '--'.'|  |`.  `-.  |  |  |  | |  | ");
console.log("| '--'\\|  |  |  ||  | \\  \\|  |.-'    | |  |  '  '-'  ' ");
console.log(" -----'`--'  `--'`--' `--'`--'`-----'  `--'   `-----'  ");
console.log();
console.log("Server Listening on port " + config.port );
});
