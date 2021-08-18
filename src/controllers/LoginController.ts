import { NextFunction, Request, Response } from 'express';
import { Controller, Get, Post, validateBody } from './decorators';

@Controller('/auth')
class LoginController {
  @Get('/login')
  loginForm(req: Request, res: Response, next: NextFunction) {
    res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>password</label>
        <input name="password" type="password" />
      </div>
      <button>Submit</button>
    </form>
    `);
  }

  @Post('/login')
  @validateBody('email', 'password')
  login(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;

    if (email && password && email === 'mail@mail.com' && password === '123') {
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {
      res.send('Invalid');
    }
  }
}
