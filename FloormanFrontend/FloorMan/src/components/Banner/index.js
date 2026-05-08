import {IoMdClose} from 'react-icons/io'

import Context from '../../Context'

import {
  BannerCard,
  ContentContainer,
  LogoImage,
  BannerPara,
  GetItButton,
  CloseContainer,
  CloseButton,
} from './styling'

const Banner = () => (
  <Context.Consumer>
    {value => {
      const {showBanner, clickedCross} = value
      return (
        <BannerCard showBanner={showBanner} data-testid="banner">
          <ContentContainer>
            <LogoImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
            <BannerPara>
              Buy Nxt Watch Premium prepaid plans with UPI
            </BannerPara>
            <GetItButton type="button">GET IT NOW</GetItButton>
          </ContentContainer>
          <CloseContainer>
            <CloseButton
              type="button"
              onClick={clickedCross}
              data-testid="close"
            >
              <IoMdClose />
            </CloseButton>
          </CloseContainer>
        </BannerCard>
      )
    }}
  </Context.Consumer>
)

export default Banner
