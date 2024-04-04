import { jwtDecode } from 'jwt-decode';
import { removeAccessToken } from './localStorageAccess.ts';

// This function checks if the token is expired
export const isTokenExpired = (token: string): boolean => {
  const decoded = jwtDecode(token);
  if (decoded && typeof decoded.exp === `number`) {
    const currentTime = Date.now() / 1000;
    if (decoded.exp > currentTime) {
      return false;
    }
  }
  removeAccessToken();
  return true;
};
