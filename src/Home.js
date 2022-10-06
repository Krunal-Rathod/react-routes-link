import React from 'react';
import { NavBar } from './NavBar';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export class Home extends React.Component {
    render() {
        return (
            <>
                <NavBar />
                <h1>Home</h1>
                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                </Swiper>
            </>
        )
    }
}