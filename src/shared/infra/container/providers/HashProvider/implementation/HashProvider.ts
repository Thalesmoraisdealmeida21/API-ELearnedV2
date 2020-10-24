import bcrypt from 'bcryptjs';
import IHashProvider from '../models/IHashProvider';

class HashProvider implements IHashProvider {
  public async generateHash(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);

    const hash = bcrypt.hash(password, salt);

    return hash;
  }

  public async compareHash(password: string, hash: string): Promise<boolean> {
    const passwordMatched = await bcrypt.compare(password, hash);

    return passwordMatched;
  }
}

export default HashProvider;
