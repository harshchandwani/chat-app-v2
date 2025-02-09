import express from 'express';
import dotenv from 'dotenv';
import { Server } from 'socket.io';
import http from 'http';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

// Routing the applcations
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Server starting here
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
