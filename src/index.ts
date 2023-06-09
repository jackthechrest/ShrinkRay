import './config'; // Load environment variables
import 'express-async-errors'; // Enable default error handling for async errors
import express, { Express } from 'express';
import session from 'express-session';
import connectSqlite3 from 'connect-sqlite3';
import { registerUser, logIn } from './controllers/UserController';
import { shortenUrl, deleteLink, getOriginalUrl, getLinks } from './controllers/LinkController';

const app: Express = express();
app.use(express.static('public', { extensions: ['html'] }));

const { PORT, COOKIE_SECRET } = process.env;
const SQLiteStore = connectSqlite3(session);

app.use(
  session({
    store: new SQLiteStore({ db: 'sessions.sqlite' }),
    secret: COOKIE_SECRET,
    cookie: { maxAge: 8 * 60 * 60 * 1000 }, // 8 hours
    name: 'session',
    resave: false,
    saveUninitialized: false,
  })
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/api/users/:targetedUserId/links', getLinks);
app.post('/api/links', shortenUrl);
app.delete('/api/users/:targetedUserId/links/:targetLinkId', deleteLink);
app.get('/:targetLinkId', getOriginalUrl);
app.post('/api/users', registerUser);
app.post('/api/login', logIn);

app.listen(PORT, () => console.log(`Listening on port http://127.0.0.1:${PORT}`));
