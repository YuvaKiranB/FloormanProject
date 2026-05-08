import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'

import Context from '../../../Context'
import {
  LogoutButtonLarge,
  LogoutContainer,
  SubContainer,
  CancelButton,
  ButtonsContainer,
  ConfirmButton,
  ClosePara,
} from './styling'

const GetLogoutButtonLarge = props => (
  <Context.Consumer>
    {value => {
      const {isDarkMode} = value

      const logout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
        console.log(history)
      }

      const overlayStyles = {
        backgroundColor: 'translucent',
      }

      return (
        <LogoutContainer>
          <Popup
            modal
            trigger={
              <LogoutButtonLarge
                onClick={logout}
                type="button"
                color={isDarkMode ? 'white' : '#3b82f6'}
              >
                Logout
              </LogoutButtonLarge>
            }
            overlayStyle={overlayStyles}
          >
            {close => (
              <SubContainer isDarkMode={isDarkMode}>
                <ClosePara isDarkMode={isDarkMode}>
                  Are you sure, you want to logout?
                </ClosePara>
                <ButtonsContainer>
                  <CancelButton
                    onClick={() => close()}
                    isDarkMode={isDarkMode}
                    type="button"
                  >
                    Cancel
                  </CancelButton>
                  <ConfirmButton
                    onClick={logout}
                    isDarkMode={isDarkMode}
                    type="button"
                  >
                    Confirm
                  </ConfirmButton>
                </ButtonsContainer>
              </SubContainer>
            )}
          </Popup>
        </LogoutContainer>
      )
    }}
  </Context.Consumer>
)

export default withRouter(GetLogoutButtonLarge)
