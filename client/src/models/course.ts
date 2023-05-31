export interface ICourse {
  id: string
  title: string
  description: string
  creationDate: string
  duration: number
  authors: string[]
}

export interface ICourseAction {
  title: string
  description: string
  creationDate: string
  duration: number
  authors: string[]
}

export interface IGetCoursesSuccess {
  successful: true;
  result: ICourse[];
}

export interface ICourseActionSuccess {
  successful: true;
  result: ICourse;
}
