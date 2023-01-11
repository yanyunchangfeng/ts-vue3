import axios from ".";
import { CATEGORY_TYPES, ILessons, ISlider } from "@/typings/home";
//声明获取轮播图的接口api
export function getSliders<T>() {
  //   return axios.get<T, T>("/slider/list");
  return Promise.resolve<ISlider[]>([
    {
      url: `${process.env.BASE_URL}1.png`,
    },
    {
      url: `${process.env.BASE_URL}2.png`,
    },
    {
      url: `${process.env.BASE_URL}3.png`,
    },
    {
      url: `${process.env.BASE_URL}4.png`,
    },
  ]);
}
export function getLesson<T>(
  category: CATEGORY_TYPES,
  offset: number = 0,
  limit: number = 5
) {
  return Promise.resolve({
    list: [
      {
        id: "aaaaaa",
        title: "React全栈架构",
        poster: `${process.env.BASE_URL}1.png`,
        video: "",
        price: 100,
        category: 1,
      },
      {
        id: "bbbbbb",
        title: "Electron全栈架构",
        poster: `${process.env.BASE_URL}2.png`,
        video: "",
        price: 300,
        category: 2,
      },
      {
        id: "cccccc",
        title: "Angular全栈架构",
        poster: `${process.env.BASE_URL}3.png`,
        video: "",
        price: 100,
        category: 3,
      },
      {
        id: "dddddd",
        title: "Node全栈架构",
        poster: `${process.env.BASE_URL}4.png`,
        video: "",
        price: 400,
        category: 4,
      },
    ],
    hasMore: true,
    // limit: 5,
    // loading: true,
    // offset: 0,
  });
  return axios.get<T, T>(
    `/lessoon/list?category=${category}&offset=${offset}&limit=${limit}`
  );
}
// getSliders<ISlider>().then((data) => {
//   data.url;
// });
