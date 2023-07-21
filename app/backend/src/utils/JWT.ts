import { JwtPayload, Secret, SignOptions, sign, verify } from 'jsonwebtoken';
import { IPayload } from '../Interfaces/Login/IPayload';

export default class JWT {
  private static secret: Secret = process.env.JWT_SECRET as Secret;

  private static jwtConfig: SignOptions = {
    expiresIn: '1y',
    algorithm: 'HS256',
  };

  public static sign(payload: IPayload): string {
    return sign({ ...payload }, this.secret, this.jwtConfig);
  }

  public static verify(token: string): JwtPayload | string {
    try {
      const decoded = verify(token, this.secret);
      return decoded;
    } catch (error) {
      return 'Token invalid';
    }
  }
}
