export interface AdminUser {
  id: string;
  name: string;
  email: string;
}

export interface SignInPayload {
  email: string;
  password: string;
}

export interface SignUpPayload extends SignInPayload {
  name: string;
}
