export interface IComment {
  ID: number,
  module_id: number,
  user_id: number,
  value: string,
  UpdatedAt: any
}

export interface ICommentCreation {
  id: number,
  value: string
}
