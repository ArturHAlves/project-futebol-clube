import IUser from './IUser';

export default interface IUserModel {
  findByEmail(email: IUser['email']): Promise<IUser | null>;
}
