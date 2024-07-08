export const isAuthenticated = (userToken: string) =>
  userToken === "" ? false : true;
