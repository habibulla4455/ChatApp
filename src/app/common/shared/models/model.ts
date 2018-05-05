export class MessageModel {
  constructor(
    public uid: string,
    public message: string,
    public timestamp: string,
    public emojis?: string[]
  ) {}
}

export class Room {
  constructor(
    public room_name: string,
    public num_participants: number
  ) {}
}

export class UserModel {
  constructor(
    public uid: string,
    public email: string,
    public password: string,
    public display: string
  ) {}
}
