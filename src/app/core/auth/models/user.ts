export interface IAuthentication {
  email: string,
  password: string
}

export interface IRegistration {
  email: string,
  password: string,
  name: string
}

export interface IPasswordLost {
  email: string
}

export interface IUser {
  id: number,
  active: boolean,
  email: string,
  emailChecked: boolean,
  name: string
}
