import { Injectable } from '@nestjs/common';
import { User } from 'src/graphql';
import { join } from 'path';
import { readFile } from 'fs';
@Injectable()
export class UserService {
  private userInfo: User;
  constructor() {
    const path = join(__dirname, '../../src/user/data/user.json');
    this.readData(path).then((res) => {
      this.userInfo = res;
    });
  }
  getUser(): User {
    return this.userInfo;
  }
  async readData(path: string): Promise<User> {
    return new Promise(async (res, rej) => {
      readFile(
        path,
        {
          encoding: 'utf8',
        },
        (err, data) => {
          if (err) {
            rej(err);
          }
          return res(JSON.parse(data ?? '{}')?.data?.user);
        },
      );
    });
  }
  updateUser(firstName: string, fatherName: string): User {
    this.userInfo = {
      ...this.userInfo,
      firstName,
      fatherName,
    };
    return this.userInfo;
  }
}
