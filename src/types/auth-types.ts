export interface registerInputDataTypes {
  type: string;
  name: string;
  placeholder: string;
  label: string;
}

export interface LoginState {
  error?: string;
  success?: boolean;
  user?: string;
  type?: string;
}

export type RegisterState = {
  error?: string;
  success?: boolean;
};
