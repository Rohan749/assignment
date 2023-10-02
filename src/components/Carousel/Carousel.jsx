import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./styles.css";
import { EffectCards } from "swiper/modules";
import telegram from "../img/telegram.png"
import mobile from "../img/mobile.png"
import profile from "../img/profile.png"

const Carousel = () => {
  return (
    <>
      <div className="body">
        <div className="heading">
            <nav className="subhead1">Contributors</nav>
            <nav className="subhead2">Our Team</nav>
        </div>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img height={170} src={profile} alt="profile"/>
            <div className="position">CEO</div>
            <div className="profile-name">Ayush Aryan</div>
          </SwiperSlide>
          <SwiperSlide>
          <img height={170} src={profile} alt="profile"/>
            <div className="position">CTO</div>
            <div className="profile-name">Ankit</div>
          </SwiperSlide>
          <SwiperSlide>
          <img height={170} src={profile} alt="profile"/>
            <div className="position">Developer</div>
            <div className="profile-name">Rohan</div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="mobile_app">
        <div data-aos="fade-up" className="mobile_box">
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="mobile_left"
          >
            <h2>GET GOING WITH THE GAIG</h2>
            <div>AI IN YOUR POCKET</div>
            <p>
              Get your hands on the GPT Guru AI phone application available for
              Android.
            </p>
            <img src={telegram} alt="telegram" className="telegram" />
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="600"
            className="mobile_div"
          >
            <img
              src={mobile}
              className="mobile_img"
              alt="mobile-img"
              height={400}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
