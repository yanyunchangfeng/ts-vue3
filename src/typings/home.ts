export enum CATEGORY_TYPES {
  ALL,
  REACT,
}

interface ILesson {
  title: string;
  video: string;
  poster: string;
  category?: string;
}
interface ISlider {
  url: string;
}

interface ILessons {
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
