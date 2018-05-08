type url = { url: string; }

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
    public display: string,
    public timestamp: string,
    public avatar: url
  ) {}
}

export class Participants {
  constructor(
    public uid: string,
    public user_name: string,
    public timestamp: string,
    public room_name: string,
    public url: string
  ) {}
}

export class Upload {

  totalBytes: number;
  url: string;
  fileName: string;
  contentType: string;
  timeCreated: string;

  constructor(
    public file: File
  ) { }

}

export class Metadata {
  constructor(
    status: string,
    timestamp: string
  ) {}
}

export class OnlineUsers {
  constructor(
    public uid: string,
    public display: string,
    public timestamp: string,
  ) {}
}
