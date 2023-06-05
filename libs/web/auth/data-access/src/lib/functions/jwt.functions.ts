import jwtDecode, { JwtPayload } from 'jwt-decode';

export const decodeJwt = (jwtToken: string) => {
  const decodedToken = jwtDecode<JwtPayload>(jwtToken);
  return decodedToken;
};

export const isTokenValid = (accessToken: string) => {
  if (!accessToken) {
    return false;
  }
  const { exp } = decodeJwt(accessToken);
  if (!exp) {
    return false;
  }
  const expirationDate = new Date(exp * 1000);
  if (expirationDate.getTime() < new Date().getTime()) {
    return false;
  }
  return true;
};
