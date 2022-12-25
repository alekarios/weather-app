// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './index.scss';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

const Carousel = ({ data, ...rest }) => {
	return (
		<Swiper
			slidesPerView={5}
			spaceBetween={30}
			slidesPerGroup={4}
			loop={true}
			loopFillGroupWithBlank={true}
			pagination={{
				clickable: true,
			}}
			navigation={true}
			modules={[Pagination]}
			className='mySwiper'>
			{data.map((datum, index) => (
				<SwiperSlide key={index}>{datum}</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Carousel;
