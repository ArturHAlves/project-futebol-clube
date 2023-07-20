import * as bcrypt from 'bcryptjs';
import JWT from '../utils/JWT';
import { ILogin, IToken } from '../Interfaces/Login/Login';
import { ServiceMessage, ServiceResponse } from '../Interfaces/ServiceResponse';
import IUserModel from '../Interfaces/Users/IUserModel';
import UserModel from '../models/User.model';
import IUser from '../Interfaces/Users/IUser';

export default class UserService {
  constructor(
    private userModel: IUserModel = new UserModel(),
    private jwtService = JWT,
  ) {}

  public async loginUser(payload: ILogin): Promise<ServiceResponse<ServiceMessage | IToken>> {
    const user = await this.userModel.findByEmail(payload.email);
    if (user) {
      if (!bcrypt.compareSync(payload.password, user.password)) {
        return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
      }
      const { email } = user as IUser;
      const token = this.jwtService.sign({ email });
      return { status: 'SUCESSFUL', data: { token } };
    }
    return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
  }
}
