export type Application = {
  id: string;
  name: string;
  secret: string;
  lang: string;
  version: number;
};

export type SignupFormData = {
  firstName: String;
  lastName: String;
  email: String;
  username: String;
  password: String;
};

export type LoginFormData = {
  username: String;
  password: String;
};
