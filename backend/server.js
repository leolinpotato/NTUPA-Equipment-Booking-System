import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv-defaults'
import cors from 'cors'
import bodyParser from 'body-parser'
import routes from './routes/index'

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/', routes);

const port = process.env.PORT || 4001;

app.listen(port, () => {
	console.log(`listening on ${port}`);
});

app.get('/', (req, res) => {
	res.send('init server');
});

dotenv.config();
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL).then((res)=> console.log('db success'));
