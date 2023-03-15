import './config'; // Load environment variables
import 'express-async-errors'; // Enable default error handling for async errors
import express, { Express } from 'express';

const app: Express = express();
app.use(express.json());
const { PORT } = process.env;

app.get('/api/users/:targetedUserId/links', );
app.post('/api/links', );
app.delete('/api/users/:targetedUserId/links/:targetLinkId', );
app.get('/:targetLinkId, );
app.post('/api/users',);
app.post('/api/login',);

app.listen(PORT, () => console.log(`Listening on port http://127.0.0.1:${PORT}`));
