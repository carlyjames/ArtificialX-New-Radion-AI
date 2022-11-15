import React from 'react';
import { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import General from './components/AllNews/General';
import 'bootstrap/dist/css/bootstrap.min.css'
import wordsToNumbers from 'words-to-numbers';
import './app.css'
// import swal from 'sweetalert';
import swal from '@sweetalert/with-react';
import Swal from 'sweetalert2';



import { Button } from '@material-ui/core';
import {Box} from '@material-ui/core';
import {Tabs} from '@material-ui/core';
import {Tab} from '@material-ui/core';


const alanKey = '0f94059ce0d56811cb387c0be873e8392e956eca572e1d8b807a3e2338fdd0dc/stage';


function startAlert(){
  swal({
    title: "Show Guidlines",
    text: "Click on 'OK' to show you guidlines on how to use the application! else click 'CANCEL' ",
    icon: "info",
    buttons: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("To get started please click on the microphone icon and say a command 'What does this app do' ", {
        buttons: {
          cancel: "Runs away!",
          catch: {
            text: "Ok",
            value: "catch",
          },
          summary: true,
        },
      })
      .then((value) => {
        switch (value) {
       
          case "summary":
            swal("This is a multi purpose web application were you get to say some commands to the AI and then expect some quick response such as latest news from different sources and different categories and you can also check the weather forcast based on you location,make some calcualtions,interact with an AI,make enquiries on bitcoin and the most amazing part of it is that you can translate from any language to anyother language of your choice,amazing isn\'t it.");
            break;
       
          case "catch":
            swal("Nice,seems like you\'re getting good at it,then click on the microphone button once more to stop and click it again and say some commands to it(You can swip the cards to see few commands)");
            break;
       
          default:
            swal("Got away safely!");
        }
      });
    } else {
      swal("Thanks,enjoy the application!");
    }
  });
}

function News(params) {
  Swal.fire({
    title: `<h6>Subscribe for new projects(No spamming)</h6>`,
    html: `<input type="text" id="login" class="swal2-input" placeholder="email">`,
    confirmButtonText: 'Subscribe',
    focusConfirm: false,
    preConfirm: () => {
      const login = Swal.getPopup().querySelector('#login').value
      if (!login) {
        Swal.showValidationMessage(`Please enter email`)
      }
      return { login: login }
    }
  }).then((result) => {
    Swal.fire(`
      <h6>Thanks ${result.value.login.split('@')[0]} for subscribing</h6>
    `.trim())
  })
  
}





const App = () => {

  const [newsArticles, setNewsArticles ] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand : ({ command, articles, number }) => {
        if( command === 'newHeadlines' ) {
          setNewsArticles(articles);
        } else if (command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if ( command === 'job' ){
          console.log(command);
        }else if(command === 'open') {
          console.log(number);
          const parsedNumber = number.length > 2 ? wordsToNumbers(number, { fuzzy : true }) : number;
          const article = articles[parsedNumber -1 ]

          if(parsedNumber > 20){
            alanBtn().playText('please try that again.')
          }else if(article){
            window.open(articles[number].url, '_blank')
            alanBtn().playText('opening...')
          }

        }
        
      }
    })
  },[])

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return ( 
    <div>
      {/* <button className='btn btn-primary' onClick={startAlert}>SHOW GUIDE</button> */}
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Guidlines" onClick={startAlert}  />
          <a href="https://jamescarly.com" className='link' target={'_blank'}>
            <Tab label="More from developer"  />
          </a>
          <a href="https://jamescarly.com" className='link' target={'_blank'}>
            <Tab label="Hire me "  />
          </a>
        </Tabs>
      </Box>
      {/* <h1>Alan News and Research API</h1> */}
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
      <General />
    </div>
   );



   
  }

 
export default App;