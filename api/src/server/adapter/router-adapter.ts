import { Request, Response } from 'express'
import IController from '../../business/protocol/controller'

export const adaptRoute =
  (controller: IController) =>
  async (req: Request, res: Response): Promise<void> => {
    const request = {
      ...(req.body || {}),
      ...(req.params || {}),
      ...(req.query || {}),
    }
    const response = await controller.run(request)
    res.status(response.statusCode).json(response.body)
  }
