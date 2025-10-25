import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Productitems from "../../Components/Productitems/Productitems";

const Index = () => {
  const [price, setPrice] = useState(100);

  return (
    <div>
      <div className="hero">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          effect="fade"
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFade]}
          className="mySwiper"
        >
          
          <SwiperSlide>
            <div className="hero-wrap hero-wrap1">
              <div className="hero-content text-center text-light">
                <h5>ESSENTIAL ITEMS —</h5>
                <h1>
                  Beauty inspired <br /> by real life
                </h1>
                <p className="my-3">
                  Made using clean, non-toxic ingredients — our products are
                  designed for everyone.
                </p>
                <a href="#products" className="btn hero-btn mt-3">
                  Shop Now
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hero-wrap hero-wrap2">
              <div className="hero-content text-center text-light">
                <h5>GET THE GLOW —</h5>
                <h1>
                  Be your kind <br /> of beauty
                </h1>
                <p className="my-3">
                  Made using clean, non-toxic ingredients — our products are
                  designed for everyone.
                </p>
                <a href="#products" className="btn hero-btn mt-3">
                  Shop Now
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hero-wrap hero-wrap3">
              <div className="hero-content text-center text-light">
                <h5>SHINE EVERYDAY —</h5>
                <h1>
                  Glow with <br /> confidence
                </h1>
                <p className="my-3">
                  Feel beautiful with simple, clean, and natural skincare made
                  for real people.
                </p>
                <a href="#products" className="btn hero-btn mt-3">
                  Shop Now
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <section id="products" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Featured Products</h2>

          <div className="text-center mb-5">
            <label htmlFor="priceRange" className="form-label fw-semibold">
              Filter by Price: <span className="text-success">${price}</span>
            </label>
            <input
              type="range"
              id="priceRange"
              className="form-range w-50 mx-auto"
              min="10"
              max="1000"
              step="10"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </div>

          <Productitems maxPrice={price} />
        </div>
      </section>
    </div>
  );
};

export default Index;
