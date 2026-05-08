import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {RiCloseLine} from 'react-icons/ri'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import Context from '../../../Context'
import {
  HamburgerButton,
  HamburgerContainer,
  SubContainer,
  MenuContainer,
  CloseButton,
  TabButton,
  Description,
} from './styling'

const GetHamburgerButton = props => (
  <Context.Consumer>
    {value => {
      const {isDarkMode} = value
      const color = isDarkMode ? 'white' : 'black'

      const {match} = props
      const {path} = match

      const isHomeActive = path === '/'
      const isTrendingActive = path === '/trending'
      const isGamingActive = path === '/gaming'
      const isSavedVideosActive = path === '/saved-videos'
      const overlayStyles = {
        backgroundColor: isDarkMode ? '#231f20' : 'white',
      }

      return (
        <HamburgerContainer>
          <Popup
            modal
            trigger={
              <HamburgerButton type="button" color={color}>
                <GiHamburgerMenu />
              </HamburgerButton>
            }
            overlayStyle={overlayStyles}
          >
            {close => (
              <SubContainer>
                {/* eslint-disable-next-line */}
                <CloseButton
                  type="button"
                  onClick={() => close()}
                  isDarkMode={isDarkMode}
                >
                  <RiCloseLine />
                </CloseButton>
                <MenuContainer>
                  <Link to="/" className="link">
                    <TabButton isActive={isHomeActive} isDarkMode={isDarkMode}>
                      <AiFillHome />
                      <Description
                        isActive={isHomeActive}
                        isDarkMode={isDarkMode}
                      >
                        Home
                      </Description>
                    </TabButton>
                  </Link>

                  <Link to="/trending" className="link">
                    <TabButton
                      isActive={isTrendingActive}
                      isDarkMode={isDarkMode}
                    >
                      <HiFire />
                      <Description
                        isActive={isTrendingActive}
                        isDarkMode={isDarkMode}
                      >
                        Trending
                      </Description>
                    </TabButton>
                  </Link>

                  <Link to="/gaming" className="link">
                    <TabButton
                      isActive={isGamingActive}
                      isDarkMode={isDarkMode}
                    >
                      <SiYoutubegaming />
                      <Description
                        isActive={isGamingActive}
                        isDarkMode={isDarkMode}
                      >
                        Gaming
                      </Description>
                    </TabButton>
                  </Link>

                  <Link to="/saved-videos" className="link">
                    <TabButton
                      isActive={isSavedVideosActive}
                      isDarkMode={isDarkMode}
                    >
                      <MdPlaylistAdd />
                      <Description
                        isActive={isSavedVideosActive}
                        isDarkMode={isDarkMode}
                      >
                        Saved videos
                      </Description>
                    </TabButton>
                  </Link>
                </MenuContainer>
              </SubContainer>
            )}
          </Popup>
        </HamburgerContainer>
      )
    }}
  </Context.Consumer>
)

export default withRouter(GetHamburgerButton)
