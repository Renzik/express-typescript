import { NextFunction, Request, Response } from 'express';
import { Controller, Get, Use } from './decorators';

const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }
  res.status(403).send('Not permitted');
};

@Controller('')
class RootController {
  @Get('/')
  root(req: Request, res: Response, next: NextFunction) {
    if (req.session && req.session.loggedIn) {
      return res.send(`
        <div>
          <h3>You are logged in</h3>
          <a href='/auth/logout'>logout</a>
          <a href='/protected'>protected page</a>
        </div>
      `);
    } else {
      res.send(`
      <div>
        <h3>You are not logged in</h3>
        <a href='/auth/login'>login</a>
      </div>
    `);
    }
  }

  @Get('/protected')
  @Use(requireAuth)
  protected(req: Request, res: Response) {
    res.send('You got access');
  }
}
