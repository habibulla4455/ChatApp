type url = { url: string; }

export interface User {
  email: string;
  password: string;
  confirm: string;
  display: string;
  timestamp: string;
  avatar: url;
}

export interface Room {
  room_name: string;
  num_participants: number;
}
