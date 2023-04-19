export class User {
  constructor(
    public username: string,
    public accessToken: string,
  ) {}

  /*get token() {
    //check per il token (se esiste e se scaduto)
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }*/
}
