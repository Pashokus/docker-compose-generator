// server/app.js
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import path from 'path';
import bodyParser from 'body-parser';
import routes from './routes/index.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const app = express();

// const mongoUrl = 'mongodb://pshko:1234@ds119070.mlab.com:19070/docker-gen';
const mongoUrl = 'mongodb://pb:123@localhost:27017';

mongoose.connect(mongoUrl);

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
app.use(bodyParser.json());

// Serve static assets
app.use(express.static(path.resolve(path.dirname(__filename), '..', 'bundle')));

app.use('/api', routes);

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
    res.sendFile(path.resolve(path.dirname(__filename), '..', 'bundle', 'index.html'));
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});
