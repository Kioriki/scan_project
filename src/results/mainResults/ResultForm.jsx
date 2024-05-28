import React, { useRef } from 'react';
import styles from './Result.module.css';

import { mapArr } from '../../func/map';
import DotLoader from 'react-spinners/DotLoader';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation } from 'swiper/modules';

function ResultForm() {
  return (
    <div id="container">
      <div className={styles.loader}>
        <DotLoader color="grey" loading={true} size={50} aria-label="Loading Spinner" data-testid="loader" />
        <p className={styles.loading}>Загружаем данные</p>
      </div>
    </div>
  );
}

function ResultSlider({ data, isLoading }) {
  const dataListRef = useRef(null);
  const mappingData = mapArr(data);

  // const slideLeft = () => {
  //   dataListRef.current.scrollLeft -= 133;

  //   if (window.innerWidth <= 600) {
  //     dataListRef.current.scrollLeft -= 298;
  //   }
  // };

  // const slideRight = () => {
  //   dataListRef.current.scrollLeft += 133;
  //   if (window.innerWidth <= 600) {
  //     dataListRef.current.scrollLeft += 298;
  //   }
  // };

  return (
    <div id="container">
      <div className={styles.resultSlider}>
        {/* <button onClick={slideLeft} className={`${styles.controller} ${styles.controllerLeft}`} type="button">
          <img src='/icon_left.svg' alt="Left Arrow" />
        </button> */}
        <div className={styles.wrapper}>
          <div className={styles.main}>
            <div className={styles.items_data}>Период</div>
            <div className={styles.items_data}>Всего</div>
            <div className={styles.items_data}>Риски</div>
          </div>
          <Swiper
              slidesPerView={7}
              spaceBetween={160}
              className="mySwiper"
              loop={false}
              navigation={true}
              modules={[Navigation]}
            > 
              
               
                {isLoading ? (
                <ResultForm />
                  ) : (
                    mappingData.map((item, index) => (
                      <SwiperSlide>
                         <div ref={dataListRef} className={styles.dataList}>
                            <div key={index} className={styles.dataItem}>
                              <div className={styles.items}>{item.date}</div>
                              <div className={styles.items}>{item.totalValue}</div>
                              <div className={styles.items}>{item.riskValue}</div>
                            </div>
                          </div>
                      </SwiperSlide>
                    ))
                  )}
                             
          </Swiper>
        </div>
        
        {/* <button onClick={slideRight} className={`${styles.controller} ${styles.controllerRight}`} type="button">
          <img src='/icon_right.svg' alt="Right Arrow" />
        </button> */}
      </div>
    </div>
  );
}

export { ResultSlider, ResultForm };