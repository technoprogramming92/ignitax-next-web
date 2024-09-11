"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  Mousewheel,
} from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import Link from "next/link";

const hero_data = [
  {
    id: 1,
    bg: "/assets/img/inner-shop/home/slider-1.jpg",
    subtitle: "YOU MAY NEED",
    title: "Shoes <br/> Collection",
  },
  {
    id: 2,
    bg: "/assets/img/inner-shop/home/slider-2.jpg",
    subtitle: "NEW ARRIVALS",
    title: "Shoes <br/> Collection",
  },
  {
    id: 3,
    bg: "/assets/img/inner-shop/home/slider-3.jpg",
    subtitle: "NEW ARRIVALS",
    title: "Shoes <br/> Collection",
  },
];

export default function HeroBannerSix() {
  const [isLastSlide, setIsLastSlide] = useState(false);
  const handleReachEnd = (swiper: any) => {
    setIsLastSlide(true);
  };

  const progressBar = useRef<HTMLSpanElement | null>(null);
  const slider_setting: SwiperOptions = {
    direction: "horizontal",
    loop: false,
    slidesPerView: 1,
    touchStartPreventDefault: false,
    speed: 1000,
    autoplay: {
      delay: 5000,
    },
    mousewheel: true,
    simulateTouch: true,
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
    pagination: {
      el: ".tp-slider-dot",
      clickable: true,
      renderBullet: function (index, className) {
        return '<div className="' + className + '"></div>';
      },
    },
  };

  return (
    <div className='tp-shop-slider-area p-relative'>
      <div className='shop-slider-wrapper'>
        <Swiper
          {...slider_setting}
          modules={[Navigation, Pagination, Autoplay, EffectFade, Mousewheel]}
          className='swiper-container tp-shop-slider-active'
          onAutoplayTimeLeft={(s, time, progress) => {
            progressBar.current &&
              (progressBar.current.style.transform = `scaleX(calc(1 - ${progress}))`);
          }}
        >
          <div className='tp-shop-slider-arrow-box'>
            <button className='tp-shop-next'>
              <i className='fa-light fa-angle-left'></i>
            </button>
            <button className='tp-shop-prev'>
              <i className='fa-light fa-angle-right'></i>
            </button>
          </div>
          {hero_data.map((item) => (
            <SwiperSlide key={item.id} className='swiper-slide'>
              <div className='tp-shop-slider-bg tp-shop-slider-ovarlay'>
                <div
                  className='tp-shop-slider-thumb'
                  data-background='assets/img/inner-shop/home/slider-1.jpg'
                  style={{ backgroundImage: `url(${item.bg})` }}
                ></div>
                <div className='container container-1300'>
                  <div className='row'>
                    <div className='col-xl-8'>
                      <div className='tp-shop-slider-content z-index'>
                        <div className='tp-shop-slider-title-box'>
                          <span className='tp-shop-slider-subtitle'>
                            {item.subtitle}
                          </span>
                          <h2
                            className='tp-shop-slider-title'
                            dangerouslySetInnerHTML={{ __html: item.title }}
                          ></h2>
                        </div>
                        <div className='tp-shop-slider-btn-box'>
                          <Link className='tp-shop-btn' href='/shop'>
                            Shop Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className='fraction-wrapper d-none d-lg-block'>
            <div id='paginations'></div>
            <div className='shop-slider-progress-bar'>
              <span ref={progressBar}></span>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
