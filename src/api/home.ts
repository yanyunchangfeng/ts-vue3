import axios from "./";
import { CATEGORY_TYPES, ILessons, ISlider } from "@/typings/home";
//声明获取轮播图的接口api
const sleep = (time: number) => {
  return new Promise((res) => {
    setTimeout(res, time);
  });
};
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
    {
      url: `${process.env.BASE_URL}5.png`,
    },
  ]);
}
export async function getLesson<T>(
  category: CATEGORY_TYPES,
  offset: number = 0,
  limit: number = 5
) {
  await sleep(1000);
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
      {
        id: "eeeee",
        title: "Flutter全栈架构",
        poster: `${process.env.BASE_URL}5.png`,
        video: "",
        price: 100,
        category: 1,
      },
    ],
    hasMore: offset != 40 ? true : false,
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
