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

export class Participants {
  constructor(
    public user_name: string,
    public timestamp: string,
    public room_name: string
  ) {}
}

export class CustomUpload {

  file: File;
  uid: string;
  fileName: string;
  progress: number;
  bytesTransferred: number;
  downloadURL: string;
  totalBytes: number;

  constructor(file: File) {
    this.file = file;
  }

}
