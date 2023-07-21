import { Request, Response } from 'express';
import UserService from '../services/User.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class UserController {
  constructor(private userService = new UserService()) {}

  async loginUser(req: Request, res: Response): Promise<Response> {
    const ServiceResponse = await this.userService.loginUser(req.body);

    if (ServiceResponse.status !== 'SUCESSFUL') {
      return res.status(mapStatusHTTP(ServiceResponse.status)).json(ServiceResponse.data);
    }

    return res.status(200).json(ServiceResponse.data);
  }

  public static async loginRole(_req: Request, res: Response): Promise<Response> {
    const { role } = res.locals.user;

    return res.status(200).json({ role });
  }
}
