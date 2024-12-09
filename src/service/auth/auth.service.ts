import {
  IOtp,
  IRegister,
  IResendOtp,
  IUser,
  SignInResponse,
} from "@/types/auth";
import { api } from "../../constants/route";
import apiService from "../api.service";

export const AuthService = {
  async signIn(email: string, password: string): Promise<SignInResponse> {
    const res = await apiService.fetchData<
      { email: string; password: string },
      SignInResponse
    >({
      url: api.sign_in,
      method: "POST",
      data: { email, password },
    });
    return res.data;
  },
  async verify(): Promise<IUser> {
    const res = await apiService.fetchData<unknown, IUser>({
      url: api.profile,
      method: "GET",
    });
    return res.data;
  },
  async signUp(data: IRegister): Promise<any> {
    const res = await apiService.fetchData<IRegister, any>({
      url: api.sign_up,
      method: "POST",
      data,
    });
    return res.data;
  },
  async otpVerify(data: IOtp): Promise<any> {
    const res = await apiService.fetchData<IOtp, any>({
      url: api.auth_verify_otp,
      method: "POST",
      data,
    });
    return res.data;
  },
  async resendOtp(data: IResendOtp): Promise<any> {
    const res = await apiService.fetchData<IResendOtp, any>({
      url: api.auth_resend_otp,
      method: "POST",
      data,
    });
    return res.data;
  },
};
