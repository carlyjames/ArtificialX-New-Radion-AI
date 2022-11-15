import React, { useEffect } from 'react'
import Translator from './Translator'
import Bitcoin from './Bitcoin'
import Calculator from './Calculator'
import SmallTalk from './SmallTalk'
import Calender from './Calender'
import Weather from './Weather'



const General = () => {


  return (
    <React.Fragment>
        <Bitcoin />
        <SmallTalk />
        <Translator />
        <Weather />
        <Calender />
        <Calculator />

    </React.Fragment>
  )
}

export default General