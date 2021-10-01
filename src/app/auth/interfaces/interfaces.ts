export interface DataResponse {
  ok: boolean;
  data?: string;

}

export interface Data {
  uid?: string;
  title?: string;
  date?: string;
  message?: string;
}

export interface UserResponse {
  message?: string;
  user?: Usuario;
}

export interface Usuario {
  uid?: string;
  email?: string;
}
