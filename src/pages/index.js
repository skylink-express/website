import React from 'react'
import { Link } from 'gatsby'

import styled from "@emotion/styled"
// import { css } from "@emotion/react"


import Layout from '../components/layout'

import Loadable from "@loadable/component"
const GlobeComponent = Loadable(() => import('../components/globe'))

import IonTokenLogoImage from '../images/ion-token-logo.svg'
import LogoImage from '../images/skylink-express-logo.svg'
import IonTokenImage from '../images/ion_token.png'


const Hero = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Logo = styled.div`
  background: url(${LogoImage});
  width: 670px;
  height: 236px;
  margin-top: 40px;
  margin-bottom: 160px;

  @media screen and (max-width: 900px) {
    transform: scale(0.8);
    margin-bottom: 40px;
  }

  @media screen and (max-width: 640px) {
    transform: scale(0.7);
    margin-bottom: 40px;
  }


  @media screen and (max-width: 450px) {
    transform: scale(0.5);
    margin-bottom: 0px;
  }
`

const Unbreakable = styled.div`
  display: inline-block;
  background: #E84242;
  color: #FFF;
  font-weight: 600;
  font-size: 36.77px;
  color: #FFFFFF;
  letter-spacing: 26.88px;
  text-align: center;
  padding: 12px 5px 12px 26px;

  margin-bottom: 50px;

  @media screen and (max-width: 900px) {
    font-size: calc(36.77px * 0.8);
    letter-spacing: calc(26.88px * 0.8);
  }


  @media screen and (max-width: 640px) {
    transform: scale(0.6);
    margin-bottom: -30px;
  }

  @media screen and (max-width: 450px) {
    transform: scale(0.5);
    margin-bottom: -20px;
  }
`

const WhatIsIt = styled.div`
  font-size: 30.64px;
  font-weight: 600;
  color: #000000;
  letter-spacing: 15.4px;
  text-align: center;
  width: 80%;

  max-width: 1024px;

  @media screen and (max-width: 900px) {
    font-size: calc(30.64px * 0.8);
    letter-spacing: calc(15.4px * 0.8);
  }

  @media screen and (max-width: 640px) {
    transform: scale(0.6);
  }

  @media screen and (max-width: 360px) {
    transform: scale(0.5);
    margin-bottom: 20px;
  }

`

const MaxWidth = styled.div`
  position: absolute;
  width: 1024px;
  height: 1024px;
  top: 0;
  left: 50%;
  margin-left: calc(-1024px / 2);
`

const SpinningEarthBg = styled.div`
  position: relative;
  z-index: -1;
  opacity: 1.0;

  width: 100%;

  margin-top: -570px;

  overflow: hidden;
  height: 720px;

  
  @media screen and (max-width: 900px) {
    margin-top: -340px;
  }

  @media screen and (max-width: 640px) {
    margin-top: -400px;
  }

`

const IonToken = styled.div`
  padding-top: 120px;
  padding-bottom: 120px;
  background-color: #5E17FE;
  color: #FFFFFF;
  letter-spacing: 8px;
  text-align: center;
`

const IonTokenImg = styled.div`
  background: url(${IonTokenImage}) no-repeat;
  width: 251px;
  height: 276px;
  margin: 80px auto;
`



const Text = styled.p`
  display: block;
  max-width: 1024px;
  margin: 0 auto;
  font-weight: 400;

  font-size: 24px;

  strong {
    font-weight: 700;
  }
`

const Navigation = styled.div`
  display: flex;
  max-width: 1024px;
  margin: 64px auto;
  justify-content: space-between;
`

const IonTokenLogo = styled.div`
  background: url(${IonTokenLogoImage}) no-repeat;
  width: 50px;
  height: 50px;
`


const Menu = styled.ul`
  display: flex;
`

const MenuItem = styled.li`
  padding: 24px 16px;
`

const Buttons = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
`

import LaunchPadIconImage from '../images/launchpad-icon.svg'
const LaunchPadIcon = styled.span`
  display: inline-block;
  width: 30px;
  height: 30px;
  background: url(${LaunchPadIconImage}) no-repeat;
  margin-left: 16px;
`


const LaunchpadButton = styled.a`
  display: flex;
  background: #000000;
  border: 1px solid #000000;
  padding: 20px 40px;
  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 4.18px;
  text-align: center;
  margin-right: 25px;

  transition: background-color 0.25s ease;

  &:hover {
    color: #fff;
    background-color: #E84242;
    border-color: #E84242;
    text-decoration: none;
  }
`

const Button = styled.a`
  display: flex;
  border: 1px solid #000000;
  padding: 20px 40px;
  font-size: 16px;
  color: #000;
  letter-spacing: 4.18px;
  text-align: center;
  margin-left: 25px;

  transition: border-color 0.25s ease, color 0.25s ease;

  &:hover {
    color: #E84242;
    border-color: #E84242;
    text-decoration: none;
  }
`

const JoinSkyLink = styled.div`
  padding-top: 120px;
  padding-bottom: 120px;
  background-color: #FFFFFF;
  color: #000000;
  letter-spacing: 8px;
  text-align: center;
`

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
`

import TwitterImg from './index/twitter.png'
import TelegramImg from './index/telegram.png'
const Channel = styled.a`
  margin-top: 80px;
  background: url(${props => props.image}) no-repeat left center;
  padding-left: 80px;
  height: 100px;
  display: flex;
  align-items: center;
`

import LogoSmallImg from './index/logo-small.svg'
const Footer = styled.div`
  border-top: 4px solid black;
  padding-top: 120px;
  padding-bottom: 120px;
  background-color: #FFFFFF;
  background: url(${LogoSmallImg}) no-repeat center center;
  color: #000000;
`

const Whitepaper = styled.div`
  text-align: center;
`

const WhitepaperButton = styled.span`
  background-color: #E84242;
  font-size: 36.77px;
  color: #FFFFFF;
  letter-spacing: 26.88px;
  text-align: center;
  text-transform: uppercase;
  padding: 30px 80px;
  &:hover {
    color: black;
    background-color: white;
    transition: background-color 0.5s ease;
  }
`

const IndexPage = () => {
  return (
    <Layout>
      <Navigation>
        <Link to="/">
          <IonTokenLogo/>
        </Link>
        <Menu>
          <MenuItem><Link to="/whitepaper">Whitepaper</Link></MenuItem>
          <MenuItem><Link to="/contact">Contact</Link></MenuItem>
        </Menu>
      </Navigation>

      <Hero>

      <Logo />

      <Unbreakable>UNBREAKABLE</Unbreakable>

      <WhatIsIt>
        GLOBAL, WIRELESS 
        DECENTRALIZED
        CRYPTO COMMUNICATION
      </WhatIsIt>

      <Buttons>
        <LaunchpadButton>Launchpad <LaunchPadIcon /> </LaunchpadButton>
        <Button>Join Telegram</Button>
      </Buttons>

      </Hero>

      <SpinningEarthBg>
        <MaxWidth>
          <GlobeComponent />
        </MaxWidth>
      </SpinningEarthBg>


      <IonToken>
        <Text>The <strong>SKYLINK EXPRESS</strong> and its token the</Text>
        <IonTokenImg />
        <Text css={{fontSize: 64, marginTop: -60, marginBottom: 80}}>ION</Text>
        <Text>is a <strong>tokenized, commoditized and unbreakable wireless
            communication bandwidth for cryptocurrencies.</strong></Text>
      </IonToken>

      <Whitepaper>
        <Link to="/whitepaper">
          <WhitepaperButton><span>Whitepaper</span></WhitepaperButton>
        </Link>
      </Whitepaper>

      <JoinSkyLink>
        <Text>Join the SKYLINK EXPRESS Community</Text>
        <SocialMedia>
          <Channel image={TwitterImg}>Twitter</Channel>
          <div css={ {width: "80px"} }></div>
          <Channel image={TelegramImg}>Telegram</Channel>
        </SocialMedia>
      </JoinSkyLink>

      <Footer>
      </Footer>


    </Layout>
  )
}

export default IndexPage
