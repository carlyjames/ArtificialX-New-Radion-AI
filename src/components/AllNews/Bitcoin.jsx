import React from 'react'
import { Grid, Grow, Typography } from '@material-ui/core';
import useStyles from '../NewsCards/styles'
import { Navigation, Pagination, Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from '../images/bitcoin1.jpeg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const infoCards = [
  { title: 'Bitcoin history', text: 'How much was bitcoin price in the past week|month|year' },
  { title: 'Bitcoin price', text: 'How much is bitcoin' },
  { title: 'Bitcoin by currencies', info: 'dollar, dollars, pound, pounds, euro, euros,ruble,rubles...',  text: 'What is the price of bitcoin in dollars' },
  { title: 'How much currency to buy bitcoin', info: 'dollar, dollars, pound, pounds, euro, euros,ruble,rubles...', text: 'How much is bitcoin in dollars' },

];

const styles = {
  CardStyles: {
      backgroundImage: `url(${Image})`,
      backgroundPosition: 'center',
      backgroundSize : 'cover',
      borderRadius : '10px'
  }
};


const Bitcoin = () => {
  const classes = useStyles();


      return(

          <div className=" mt-2 swiper-wrapper" dir="rtl">
            <Swiper
             slidesPerView={1}
             spaceBetween={20}
             loop={true}
             freeMode = {true}
             grabCursor = {true}
             freeModeMomentum = {false}
             reverseDirection = {true}
             direction = 'horizontal'
            loopFillGroupWithBlank={true}
             speed={4000}
             autoplay={{
               delay: 0,
             }}
            //  pagination={{
            //    clickable: true,
            //  }}

             breakpoints={{
               640: {
                 slidesPerView: 2,
                 spaceBetween: 0,
               },
               768: {
                 slidesPerView: 4,
                 spaceBetween: 40,
               },
               1024: {
                 slidesPerView: 5,
                 spaceBetween: 10,
               },
             }}
            //  navigation={true}
             modules={[Autoplay, Pagination, Navigation]}
             className="mySwiper"
            >
              {infoCards.map((infoCard) => (
              <SwiperSlide>
                  <div className={classes.infoCard}>
                    <div className={classes.card} style={styles.CardStyles}>
                    <h4 className={classes.h1} id={classes.title} variant="h5" component="h5">{infoCard.title}</h4>
                      {infoCard.info ? <Typography className={classes.typography} variant="h6" component="h6"> : <strong>{infoCard.title.split(' ')[2]}</strong> <br />{infoCard.info}</Typography> : null}
                      <Typography className={classes.typography} variant="h6" component="h6"> : Try saying  <br /> <i>{infoCard.text}</i></Typography>
                    </div>
                  </div>
              </SwiperSlide>
                ))}
            </Swiper>
          </div>

      )
  }




export default Bitcoin;
