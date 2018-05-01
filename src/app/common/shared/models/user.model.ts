export class UserModel {
  constructor(
    public uid: string,
    public email: string,
    public password: string,
    public display: string
  ) {}
}
