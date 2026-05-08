import {withRouter} from 'react-router-dom'

import {FaMoon} from 'react-icons/fa'
import {IoSunnyOutline} from 'react-icons/io5'

import GetHamburgerButton from './HamburgerPopup'
import GetLogoutButtonSmall from './LogoutPopupSmall'
import GetLogoutButtonLarge from './LogoutPopupLarge'

import Context from '../../Context'

import {
  HeaderContainer,
  WebsiteLogo,
  IconsContainer,
  ThemeSwitchButton,
  ButtonsContainerLarge,
  ProfileButton,
  ProfileImage,
} from './styling'

const Header = () => (
  <Context.Consumer>
    {value => {
      const {isDarkMode, changeMode} = value

      return (
        <HeaderContainer backgroundColor={isDarkMode ? '#313131' : 'white'}>
          {isDarkMode ? (
            <WebsiteLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
              alt="website logo"
            />
          ) : (
            <WebsiteLogo
              src="https://res.cloudinary.com/drgoav3vf/image/upload/v1777620359/Floorman_light_guqmsn.jpg"
              alt="website logo"
            />
          )}

          <IconsContainer>
            <ThemeSwitchButton
              type="button"
              onClick={changeMode}
              color={isDarkMode ? 'white' : 'black'}
              data-testid="theme"
            >
              {isDarkMode ? <IoSunnyOutline /> : <FaMoon />}
            </ThemeSwitchButton>
            <GetHamburgerButton />

            <GetLogoutButtonSmall />
          </IconsContainer>

          <ButtonsContainerLarge>
            <ThemeSwitchButton
              type="button"
              onClick={changeMode}
              color={isDarkMode ? 'white' : 'black'}
              data-testid="theme"
            >
              {isDarkMode ? <IoSunnyOutline /> : <FaMoon />}
            </ThemeSwitchButton>
            <ProfileButton type="button" color={isDarkMode ? 'white' : 'black'}>
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </ProfileButton>
            <GetLogoutButtonLarge />
          </ButtonsContainerLarge>
        </HeaderContainer>
      )
    }}
  </Context.Consumer>
)

export default withRouter(Header)
