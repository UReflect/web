export interface Authentication {
  email: string,
  password: string
}

export interface Registration {
  email: string,
  password: string,
  name: string
}

export interface User {
  id: number,
  active: boolean,
  email: string,
  emailChecked: boolean,
  name: string
}
