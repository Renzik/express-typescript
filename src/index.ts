import { urlencoded } from 'body-parser';
import cookieSession from 'cookie-session';
import express from 'express';
import { router } from './loginRoutes';
import { AppRouter } from './AppRoute';

// controllers
import './controllers/LoginController';

const PORT: number = 3000;

const app = express();

app.use(urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['secret'] }));

app.use(router);

// routes
app.use(AppRouter.getInstance());

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
