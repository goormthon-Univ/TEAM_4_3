/*global chrome*/
import React from 'react';
import * as S from './style';
import EngLogo from '../../assets/EngLogo.svg';
import Slogan from '../../assets/Slogan.png';
import { Signin } from '../../background';
function AuthLanding () {
  const openCloudAuth = () => {
    window.open("https://www.ddngoorm.xyz/login", "_blank", "noopener,noreferrer");
  };
  
  return (
    <S.MainWrapper>
      <S.ContentWrapper>
        <S.LogoWrapper>
          <S.TextLogo src={EngLogo}/>
        </S.LogoWrapper>
        <S.IntroduceWrapper>
          <S.Slogan src={Slogan} />
        </S.IntroduceWrapper>
        <S.AuthBtn onClick={openCloudAuth}>시작하기</S.AuthBtn>
      </S.ContentWrapper>
    </S.MainWrapper>
  );
}

export default AuthLanding;