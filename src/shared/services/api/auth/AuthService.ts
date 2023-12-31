import { Api } from "../axios-config";

interface IAuth {
  accessToken: string;
}

const auth = async (
  email: string,
  password: string
): Promise<IAuth | Error> => {
  try {
    const { data } = await Api.get("/auth", { data: { email, password } });

    if (data && data.acessToken) {
      return { accessToken: data.acessToken };
    }

    return new Error("Error in login.");
  } catch (error) {
    return new Error(
      (error as { message: string }).message || "Error in login."
    );
  }
};

export const AuthService = {
  auth,
};
