import React from 'react';

import { HeaderCointaner, InfoHeader, InfoContainer, ImageHeader, InfoNamePage } from './styled';

import { Link } from 'react-router-dom';

const Header = ({ namePage }) => (
  <HeaderCointaner>
    <Link to="/" className="link"> <InfoHeader>Find Agency Car</InfoHeader> </Link>
    <InfoNamePage>
      <ImageHeader src="http://www.mykonosrentcar.com/wp-content/uploads/2016/03/anemos.png" />
      {namePage}
    </InfoNamePage>
    <InfoContainer>
      <InfoHeader>1234-5678</InfoHeader>
      <InfoHeader>1234-5678</InfoHeader>
    </InfoContainer>
    <Link to='/login'> <button> Login </button> </Link>
  </HeaderCointaner>
)


export default Header;