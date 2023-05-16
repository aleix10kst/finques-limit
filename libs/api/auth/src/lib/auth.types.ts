export enum AuthType {
  Bearer,
  None,
}

export type ActiveUserData = {
  sub: string;
  name: string;
  email: string;
};
