import styles from './Result.module.css';
import { mapArr } from '../../func/map';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation } from 'swiper/modules';

const mappingData = mapArr(data);

function SliderResult(){
 
    return(
        mappingData.map((item, index) => (
    <Swiper
        slidesPerView={8}
        spaceBetween={30}
        className="mySwiper"
        loop={true}
        navigation={true}
        modules={[Navigation]}
    > 
    <li key={index} className={styles.dataItem}>
        <SwiperSlide>
        <div className={styles.items}>{item.date}</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.items}>{item.totalValue}</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.items}>{item.riskValue}</div>
        </SwiperSlide>
        </li>
    </Swiper>
        ))
)}
export default SliderResult