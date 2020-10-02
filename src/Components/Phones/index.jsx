import React from 'react'
import {Container, WrapperImages, IconWrapper} from './styles'
import {GooglePlay, AppleStore} from '../StoreButtons/index'
import PhoneLeft from '../../assets/leftIphone.png'
import PhoneRight from '../../assets/rightIphone.png'
import PhoneMid from '../../assets/midIphone.png'

const Phones = () => {
 return (
   <Container>
     <WrapperImages>
       <img src={PhoneLeft} alt="Left" />
       <img src={PhoneMid} alt="Midle" />
       <img src={PhoneRight} alt="Right" />
     </WrapperImages>
     <IconWrapper>
      <GooglePlay stroke={true}/>
      <AppleStore stroke={true}/>
     </IconWrapper>
   </Container>
 );
}

export default Phones
