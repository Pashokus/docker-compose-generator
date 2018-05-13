// server/app.js
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import path from 'path';
import bodyParser from 'body-parser';
import routes from './routes/index';

const app = express();

const mongoUrl = 'mongodb://<dbuser>:<dbpassword>@ds119070.mlab.com:19070/docker-gen';
// const mongoUrl = 'mongodb://localhost/my_database';

mongoose.connect(mongoUrl);

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
app.use(bodyParser.json());

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'bundle')));

app.use('/api', routes);

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'bundle', 'index.html'));
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});
