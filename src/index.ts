import './config'; // Load environment variables
import 'express-async-errors'; // Enable default error handling for async errors
import express, { Express } from 'express';
import session from 'express-session';
import connectSqlite3 from 'connect-sqlite3';

const app: Express = express();
const { PORT, COOKIE_SECRET } = process.env;

const SQLiteStore = connectSqlite3(session);

app.use(
  session({
    store: new SQLiteStore({ db: 'sessions.sqlite', }),
    secret: COOKIE_SECRET,
    cookie: { maxAge: 8 * 60 * 60 * 1000 }, // 8 hours 
    name: 'session',
    resave: false,
    saveUninitialized: false,
  })
);

app.use(express.json());

app.get('/api/users/:targetedUserId/links', );
app.post('/api/links', );
app.delete('/api/users/:targetedUserId/links/:targetLinkId', );
app.get('/:targetLinkId, );
app.post('/api/users',);
app.post('/api/login',);

app.listen(PORT, () => console.log(`Listening on port http://127.0.0.1:${PORT}`));
