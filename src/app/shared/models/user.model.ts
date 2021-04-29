export interface TokenInfo{
  created?: number;
  expires?: number;
  isAllowedToChange?: boolean;
}


export  interface User {
  username?: string;
  lastname?: string;
  password?: string;
  email?: string;
  id?: number;
  userStatus?: string;
  tokenInfo?: TokenInfo;
}
