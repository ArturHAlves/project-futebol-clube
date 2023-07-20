import { NextFunction, Request, Response } from 'express';

const invalidLogin = 'Invalid email or password';
const MIN_LENGTH = 6;

export default class validationsLogin {
  public static validateLogin(req: Request, res: Response, next: NextFunction): Response | void {
    const { email, password } = req.body as { email: string, password: string };
    if (!email || !password) return res.status(400).json({ message: 'All fields must be filled' });

    // tfc@projeto.com
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regexEmail.test(email)) return res.status(401).json({ message: invalidLogin });

    if (password.length < MIN_LENGTH) return res.status(401).json({ message: invalidLogin });

    return next();
  }
}
