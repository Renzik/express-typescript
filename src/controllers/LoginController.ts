import { NextFunction, Request, Response } from 'express';
import { Controller, Get } from './decorators';

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
}
