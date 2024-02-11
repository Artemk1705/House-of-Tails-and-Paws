import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/bundle";

const styles = {
  img: {
    maxWidth: "100%",
    height: "auto",
  },
};

const SwiperComp = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      className="swiper_cont"
      loop={true}
      spaceBetween={300}
      slidesPerView={1}
      centeredSlides={true}
      navigation={false}
      pagination={{
        type: "bullets",
        clickable: true,
      }}
      speed={700}
      autoplay={{
        delay: 2500, // задержка между прокрутками (в мс)
        disableOnInteraction: false, // продолжать после взаимодействия пользователя
      }}
    >
      <SwiperSlide>
        <div className="swiper-slide">
          <div className="card">
            <div className="card_container">
              <h2>Decade of Pet Care Excellence</h2>
              <p>
                Serving Las Vegas with over 10 years of dedicated pet services.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide">
          <div className="card">
            <div className="card_container">
              <h2>Customized Pet Care</h2>
              <p>
                Every pet is unique we tailor services to meet their specific
                needs.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide">
          <div className="card">
            <div className="card_container">
              <h2>Trusted by Pet Owners</h2>
              <p>
                Over 95% return rate thanks to our meticulous and caring
                approach.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide">
          <div className="card">
            <div className="card_container">
              <h2>Heart of Las Vegas</h2>
              <p>
                Conveniently located for easy access to all pet owners in the
                city.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="swiper-slide">
          <div className="card">
            <div className="card_container">
              <h2>Outstanding Reviews</h2>
              <p>
                Praised as one of Las Vegas's most recommended pet care
                companies.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComp;
