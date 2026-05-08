import {withRouter} from 'react-router-dom'

import GetNavItem from './GetNavItem'

import Context from '../../Context'

import {
  LeftPaneContainer,
  Part1,
  Part2,
  ContactUs,
  Icon,
  IconsContainer,
  Description2,
  NavItems,
} from './styling'

const NavItemsList = [
  {id: 'HOME', description: 'Vehicles'},
  {id: 'TRENDING', description: 'Trending'},
  {id: 'GAMING', description: 'Gaming'},
  {id: 'SAVED VIDEOS', description: 'Saved videos'},
]

const LeftPane = props => (
  <Context.Consumer>
    {value => {
      const {isDarkMode} = value

      const {match} = props
      const {path} = match
      let activeNav = null

      if (path === '/') {
        activeNav = 'HOME'
      }
      if (path === '/trending') {
        activeNav = 'TRENDING'
      }
      if (path === '/gaming') {
        activeNav = 'GAMING'
      }
      if (path === '/saved-videos') {
        activeNav = 'SAVED VIDEOS'
      }

      return (
        <LeftPaneContainer isDarkMode={isDarkMode}>
          <Part1>
            <NavItems>
              {NavItemsList.map(eachItem => (
                <GetNavItem
                  activeNav={activeNav}
                  key={eachItem.id}
                  description={eachItem.description}
                  id={eachItem.id}
                />
              ))}
            </NavItems>
          </Part1>
       
        </LeftPaneContainer>
      )
    }}
  </Context.Consumer>
)

export default withRouter(LeftPane)
