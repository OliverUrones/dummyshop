export interface ILogin {
  username: string;
  password: string;
}

export interface IUser {
  id: number,
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
}

export interface IUserResponse extends IUser {
  token: string;
}
