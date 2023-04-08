import jwtDecode from 'jwt-decode';
import {DecodedTokenType} from '../types';

export const capitalizeFirstCharacter = (str: string): string => {
  if (str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getLoggedInUserId = (token: string): string => {
  const decodedToken: DecodedTokenType = jwtDecode(token);
  return decodedToken.id;
};
