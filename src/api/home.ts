import axios from ".";
import { ISlider } from "@/typings/home";
//声明获取轮播图的接口api
export function getSliders<T>() {
  //   return axios.get<T, T>("/slider/list");
  return Promise.resolve<ISlider[]>([
    {
      url: "/1.png",
    },
    {
      url: "/2.png",
    },
    {
      url: "/3.png",
    },
    {
      url: "/4.png",
    },
  ]);
}

// getSliders<ISlider>().then((data) => {
//   data.url;
// });
