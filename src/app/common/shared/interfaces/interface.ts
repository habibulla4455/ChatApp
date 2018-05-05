export interface User {
  email: string;
  password: string;
  confirm: string;
  display: string;
}

export interface Room {
  room_name: string;
  num_participants: number;
}
