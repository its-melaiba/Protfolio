import { Swiper, SwiperSlide } from "swiper/react";
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Mern Stack",
    description:
      "  full stack is a popular and powerful MongoDB, Express.js, React.js, and Node.js.",
  },
  {
    icon: <RxPencil2 />,
    title: "NextJs",
    description:
      "is a popular React framework that extends React.js to enable server-side rendering (SSR).",
  },
  {
    icon: <RxDesktop />,
    title: "Tyescript",
    description:
      "is a superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code.",
  },
  {
    icon: <RxReader />,
    title: "Wordpress",
    description:
      " is a powerful CMS that allows users to create, manage, and publish content over internet",
  },
  {
    icon: <RxRocket />,
    title: " Local Seo",
    description:
      "is a marketing strategy for local customers their online business presence over internet",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              <div>
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] loading-normal">
                  {item.description}
                </p>
              </div>
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
