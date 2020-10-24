import auth from '@config/auth';
import { Request, Response, NextFunction } from 'express';
import AppError from '@shared/errors/AppError';
import { verify } from 'jsonwebtoken';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticate(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const { authorization } = request.headers;

  if (!authorization) {
    throw new AppError('Token is missing');
  }

  const [, token] = authorization.split(' ');

  try {
    const decoded = verify(token, auth.token.secret || '');

    const { sub } = decoded as ITokenPayload;

    request.user = {
      id: sub,
    };
    return next();
  } catch {
    throw new AppError('Inválid JWT token', 401);
  }
}
