import {ILogin, IUser} from "../../core/models/auth.model";

export interface AuthState {
  loginData: ILogin | null;
  isLoading: boolean;
  error: string | null;
  user: IUser | null;
}
