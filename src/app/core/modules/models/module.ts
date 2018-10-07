export interface IModule {
  id: number,
  descriptions: string,
  title: string,
  price: number,
  rating: number,
  ratingNb: number,
  userId: number,
  minHeight: number,
  minWidth: number
}

export interface IModuleCreation {
  title: string,
  description: string,
  minWidth: number,
  minHeight: number,
  price: number
}

export interface IModuleUpload {
  id: number,
  formData: FormData
}
