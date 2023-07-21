import { NextFunction, Request, Response } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import JWT from '../utils/JWT';

// Referencia - Implements JWT + Generics
export default class authenticaded {
  public static validateToken(req: Request, res: Response, next: NextFunction): Response | void {
    const { authorization } = req.headers;

    if (!authorization) return res.status(401).json({ message: 'Token not found' });

    const data = authorization.split(' ');
    if (!data[1]) return res.status(401).json({ message: 'Token must be a valid token' });

    res.locals.user = JWT.verify(data[1]) as JwtPayload;

    return next();
  }
}
