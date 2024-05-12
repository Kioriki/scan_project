import styles from '../Advantages.module.css'
//import Flickity from 'react-flickity-component'W
//import './flickity.css'

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation } from 'swiper/modules';

/*const flickityOptions ={
    groupCells:2
}*/

// const advantages ={
//     id: [1 , 2, 3],
//     title: ['Высокая и оперативная скорость обработки заявки', 'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос','Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству'],
//     image: [clock, lock, glass]
// }

function Slider1(){
    /*return(
        <div className={styles.advantages_slider}>
            <Flickity
            className ='Slider'
            elementType='div'
            disableImagesLoaded={false}
            options={flickityOptions}
            reloadOnUpdate
            static>

            {advantages['id'].map((index) =>{
                return(
                    <div key={index} className='Plate'>
                        <div className={styles.icon}>{advantages['image'][index - 1]}</div>
                        <div className={styles.info}>{advantages['title'][index - 1]}</div>
                    </div>
                )
            })}
            </Flickity>
        </div>
    )*/
    return(
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            className="mySwiper"
            loop={true}
            navigation={true}
            modules={[Navigation]}
        >
            <SwiperSlide>
                <div className={styles.info}><div className={styles.icon}><img  src='/Clock.svg'/></div><br/>Высокая и оперативная скорость обработки заявки</div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles.info}><div className={styles.icon}><img  src='/Glass.svg'/></div><br/>Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles.info}><div className={styles.icon}><img  src='/Lock.svg'/></div><br/>Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles.info}><div className={styles.icon}><img  src='/Clock.svg'/></div><br/>Высокая и оперативная скорость обработки заявки</div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles.info}><div className={styles.icon}><img  src='/Glass.svg'/></div><br/>Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles.info}><div className={styles.icon}><img  src='/Lock.svg'/></div><br/>Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Slider1