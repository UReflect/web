export interface IModule {
  ID: number,
  descriptions: string,
  title: string,
  price: number,
  rating: number,
  rating_nb: number,
  user_id: number,
  min_height: number,
  min_width: number,
  UpdatedAt: any
}

export interface IModuleCreation {
  title: string,
  description: string,
  min_height: number,
  min_width: number,
  price: number
}

export interface IModuleUpdate {
  ID: number,
  title: string,
  description: string,
  min_height: number,
  min_width: number,
  price: number
}

export interface IModuleUpload {
  ID: number,
  formData: FormData
}
