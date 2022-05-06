import { NextFunction, Request, Response } from 'express'
import authMiddlewareFactory from '../../main/auth-middleware-factory'

export const auth = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const authHeader = req.headers?.authorization
  if (!authHeader) {
    res.status(401).json({ message: 'Authorization header required' })
    return
  }
  const token = authHeader.split(' ')[1]
  const authenticator = authMiddlewareFactory()
  const payload = await authenticator.auth(token)
  req.body.userId = payload.userId
  req.body.username = payload.username
  next()
}
