import { JwtPayload, Secret, SignOptions, sign, verify } from 'jsonwebtoken';

export default class JWT {
  private static secret: Secret = process.env.JWT_SECRET as Secret;

  private static jwtConfig: SignOptions = {
    expiresIn: '1y',
    algorithm: 'HS256',
  };

  public static sign(payload: JwtPayload): string {
    return sign({ ...payload }, this.secret, this.jwtConfig);
  }

  public static verify(token: string): JwtPayload | string {
    try {
      return verify(token, this.secret);
    } catch (error) {
      return 'Token invalid';
    }
  }
}
