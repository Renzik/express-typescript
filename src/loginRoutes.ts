import { NextFunction, Request, Response, Router } from 'express';

const router = Router();

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }
  res.status(403).send('Not permitted');
};

router.get('/logout', requireAuth, (req: Request, res: Response, next: NextFunction) => {
  if (req.session && req.session.loggedIn) {
    req.session = { loggedIn: false };
    res.redirect('/');
  } else res.send("You're not logged in");
});

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  if (req.session && req.session.loggedIn) {
    return res.send(`
      <div>
        <h3>You are logged in</h3>
        <a href='/logout'>logout</a>
      </div>
    `);
  } else {
    res.send(`
    <div>
      <h3>You are not logged in</h3>
      <a href='/login'>login</a>
    </div>
  `);
  }
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('You got access');
});

export { router };
