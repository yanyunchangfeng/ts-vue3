export enum CATEGORY_TYPES {
  ALL,
  REACT,
  ELECTRON,
  NODE,
}

export interface ILesson {
  id: string;
  title: string;
  video: string;
  poster: string;
  category: number;
  price: number;
}
export interface ISlider {
  url: string;
}

export interface ILessons {
  hasMore: boolean;
  loading: boolean;
  offset: number;
  limit: number;
  list: ILesson[];
}
export interface IHomeState {
  currentCategory: CATEGORY_TYPES;
  sliders: ISlider[];
  lessons: ILessons;
}
