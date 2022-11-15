import React from 'react'
import { Grid, Grow, Typography } from '@material-ui/core';
import useStyles from '../NewsCards/styles'
import { Navigation, Pagination, Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from '../images/smallTalk.jpeg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const infoCards = [
  { title: 'Start a Conversation with ai', text: 'Hi|hello|what\'s up' },
  { title: 'Small Talk', text: 'How are you' },
  { title: 'Friendly question', text: 'are you good or evil' },
  { title: 'Sweet words',text: 'I love/like you a lot| I admire you | you are so cool' },
  { title: 'Curious',text: 'am tired of waiting| hurry up | you are slow | i am waiting' },
  { title: 'Curious',text: 'Why can\'t you answer my question | Why don\'t you understand' },
  { title: 'Sweet words',text: 'Do you want something to eat' },
  { title: 'Sweet words',text: 'I missed you' },
  { title: 'Sweet words',text: 'you are boring' },
  { title: 'Sweet words',text: 'I am so exicited' },
  { title: 'Sweet words',text: 'I am busy' },
  { title: 'Sweet words',text: 'what are you wearing' },
  { title: 'Conversation',text: 'what is your name ?' },
  { title: 'Conversation',text: 'why are you here ?' },
  { title: 'Conversation',text: 'you are a genius' },
  { title: 'Conversation',text: 'Where are you ?' },
  { title: 'Conversation',text: 'My name is James' },
  { title: 'Conversation',text: 'Blah Blah Blah' },
  { title: 'Conversation',text: 'Ha ha ha' },
  { title: 'Conversation',text: 'Are you there' },
  { title: 'Conversation',text: 'Talk to me' },
  { title: 'Conversation',text: 'Are you a real person' },
  { title: 'Conversation',text: 'Will you marry me ?' },
  { title: 'Conversation',text: 'are you hungry ?' },
  { title: 'Conversation',text: 'are you busy ?' },
  { title: 'Conversation',text: 'Who is your boss ?' },
  { title: 'Conversation',text: 'What is your birth date ?' },
  { title: 'Conversation',text: 'How old are you ?' },
  { title: 'Greetings',text: 'Good morning | afternoon | night' },
  { title: 'Greetings',text: 'see you soon' },

];

const styles = {
  CardStyles: {
      backgroundImage: `url(${Image})`,
      backgroundPosition: 'center',
      backgroundSize : 'cover',
      borderRadius : '10px'
  }
};


const SmallTalk = () => {
  const classes = useStyles();


      return(

          <div className=" mt-2 swiper-wrapper" >
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




export default SmallTalk;
