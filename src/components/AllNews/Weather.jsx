import React from 'react'
import NewsCard from '../NewsCard/NewsCard';
import { Grid, Grow, Typography } from '@material-ui/core';
import useStyles from '../NewsCards/styles'
import { Navigation, Pagination, Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from '../images/weather.jpeg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const infoCards = [
  { title: 'Check Weather hints', info: 'weather, temperature, humidity, pressure',  text: 'What is the weather like ?' },
  { title: 'Check Weather hints', info: 'weather, temperature, humidity, pressure',  text: 'What is the weather like in Florida ?' },
  { title: 'Check Weather hints', info: 'weather, temperature, humidity, pressure',  text: 'What is the weather like in 24th december ?' },
  { title: 'Check Weather hints', info: 'raining, rain, hot, warm,cold,chilly,cool',  text: 'Is it going rain ?' },
  { title: 'Check Weather hints', info: 'raining, rain, hot, warm,cold,chilly,cool',  text: 'Is it going rain in Chicago ?' },
  { title: 'Check Weather hints', info: 'raining, rain, hot, warm,cold,chilly,cool',  text: 'Is it going rain on monday ?' },
  { title: 'Check Weather hints', info: 'raining, rain, hot, warm,cold,chilly,cool',  text: 'Is it going rain in Chicago on friday ?' },


];

const styles = {
  CardStyles: {
      backgroundImage: `url(${Image})`,
      backgroundPosition: 'center',
      backgroundSize : 'cover',
      borderRadius : '10px'
  }
};


const Weather = () => {
  const classes = useStyles();


      return(

          <div className=" mt-2 swiper-wrapper" >
            <Swiper
             slidesPerView={1}
             spaceBetween={20}
             loop={true}
            //  freeMode = {true}
             grabCursor = {true}
             freeModeMomentum = {false}
             reverseDirection = {true}
             direction = 'horizontal'
            // loopFillGroupWithBlank={true}
             speed={4000}
             autoplay={{
               delay: 0,
               disableOnInteraction: true,
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
                      <Typography className={classes.typography} variant="h5" component="h5">{infoCard.title}</Typography>
                      {infoCard.info ? <Typography className={classes.typography} variant="h6" component="h6"><strong>{infoCard.title.split(' ')[2]}</strong>: <br />{infoCard.info}</Typography> : null}
                      <Typography className={classes.typography} variant="h6" component="h6">Try saying : <br /> <i>{infoCard.text}</i></Typography>
                    </div>
                  </div>
              </SwiperSlide>
                ))}
            </Swiper>
          </div>

      )
  }




export default Weather;
