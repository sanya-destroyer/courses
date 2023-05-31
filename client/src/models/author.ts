export interface IAuthor {
  id: string
  name: string
}

export interface IGetAuthorsSuccess {
  successful: true;
  result: IAuthor[];
}

export interface IAuthorAction {
  name: string
}

export interface IAuthorActionSuccess {
  successful: true;
  result: IAuthor,
}
