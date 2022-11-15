import React from 'react'
import NewsCard from '../NewsCard/NewsCard';
import { Grid, Grow, Typography } from '@material-ui/core';
import useStyles from './styles.js'
import { Navigation, Pagination, Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from '../images/news.jpeg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export const infoCards = [
    { color: 'https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Latest News', text: 'Give me the latest news' },
    { color: 'radial-gradient(#fbc1cc, #fa99b2)', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { color: 'radial-gradient(#76b2fe, #b69efe)', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    { color: 'radial-gradient(#60efbc, #58d5c9)', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
    { color: 'radial-gradient(#60efbc, #58d5c9)', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
    { color: 'radial-gradient(#60efbc, #58d5c9)', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
  ];

const styles = {
  CardStyles: {
      backgroundImage: `url(${Image})`,
      backgroundPosition: 'center',
      backgroundSize : 'cover',
      borderRadius : '10px',
  }
};

const NewsCards = ({ articles, activeArticle }) => {

    const classes = useStyles();

    if(!articles.length){
        return(

            <div className=" mt-2 swiper-wrapper">
              <Swiper
               slidesPerView={1}
               spaceBetween={50}
               loop={true}
               freeMode = {true}
               grabCursor = {true}
               freeModeMomentum = {false}
              // loopFillGroupWithBlank={true}
               speed={4000}
               autoplay={{
                 delay: 0,
                 disableOnInteraction: false,
               }}
               pagination={{
                 clickable: true,
               }}
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
               navigation={true}
               modules={[Autoplay, Pagination, Navigation]}
               className="mySwiper"
              >
                {infoCards.map((infoCard) => (
                <SwiperSlide>
                    <div className={classes.infoCard} style={styles.CardStyles}>
                      <div className={classes.card} >
                        <h4 className={classes.h1} id={classes.title} variant="h5" component="h5">{infoCard.title}</h4>
                        {infoCard.info ? <Typography className={classes.typography} variant="h6" component="h6"><strong>{infoCard.title.split(' ')[2]}</strong> : <br />{infoCard.info}</Typography> : null}
                        <Typography className={classes.typography} variant="h6" component="h6">Try saying : <br /> <i>{infoCard.text}</i></Typography>
                      </div>
                    </div>
                </SwiperSlide>
                  ))}
              </Swiper>
            </div>

        )
    }

    return ( 
        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {articles.map((article, i) => (
                <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
                    <NewsCard  i={i} activeArticle={activeArticle} article={article} />
                </Grid>
            ))}
            </Grid>
      </Grow>
     );
}
 
export default NewsCards;