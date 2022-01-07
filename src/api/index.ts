interface LoginInput {
  phoneNumber: string;
  code: string;
}
interface LoginOutput {
  status: boolean;
  token?: string;
  error?: string;
}

interface InfoOutput {
  status: boolean;
  name: string;
  family: string;
}

const jwt = "thisIsToken";
const mobile = "1";
const password = "1";

export const login = ({
  phoneNumber,
  code,
}: LoginInput): Promise<LoginOutput> => {
  return new Promise((resolve, reject) => {
    if (phoneNumber === mobile && code === password) {
      resolve({ status: true, token: jwt });
    } else {
      reject({ status: false, error: "wrong password" });
    }
  });
};

export const userInfo = (): Promise<InfoOutput> => {
  return new Promise((resolve) => {
    resolve({ status: true, name: "badri", family: "derakhshan" });
  });
};
