import { Request, Response } from 'express';
import UserService from '../services/User.service';

export default class UserController {
  constructor(private userService = new UserService()) {}

  async loginUser(req: Request, res: Response) {
    const ServiceResponse = await this.userService.loginUser(req.body);

    return res.status(200).json(ServiceResponse.data);
  }
}
