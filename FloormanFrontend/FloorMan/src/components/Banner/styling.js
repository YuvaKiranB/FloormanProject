import styled from 'styled-components'

export const BannerCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 25px;
  padding-top: 40px;
  padding-bottom: 40px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: ${props => !props.showBanner && 'none'};
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
`

export const LogoImage = styled.img`
  height: 50px;
`

export const BannerPara = styled.p`
  font-family: roboto;
  font-size: 20px;
  font-weight: 500;
  margin-top: 30px;
  margin-bottom: 30px;
`

export const GetItButton = styled.button`
  padding: 12px;
  font-family: roboto;
  font-size: 15px;
  color: black;
  font-weight: 500;
  background-color: transparent;
  border: 2px solid black;
  cursor: pointer;
`

export const CloseContainer = styled.div``

export const CloseButton = styled.button`
  font-size: 24px;
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
`
