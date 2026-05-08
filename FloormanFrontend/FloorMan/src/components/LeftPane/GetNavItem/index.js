import {Link, withRouter} from 'react-router-dom'

import { RiTruckFill } from "react-icons/ri";
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import Context from '../../../Context'

import {TabButton, Description, ListItem} from './styling'

const GetNavItem = props => {
  let icon = null
  let link = null

  const {activeNav, description, id} = props
  const isActive = activeNav === id
  if (id === 'HOME') {
    icon = <RiTruckFill />
    link = '/'
  }
  if (id === 'TRENDING') {
    icon = <HiFire />
    link = '/trending'
  }
  if (id === 'GAMING') {
    icon = <SiYoutubegaming />
    link = '/gaming'
  }
  if (id === 'SAVED VIDEOS') {
    icon = <MdPlaylistAdd />
    link = '/saved-videos'
  }

  return (
    <Context.Consumer>
      {value => {
        const {isDarkMode} = value

        return (
          <ListItem>
            <Link to={link} className="link">
              <TabButton isActive={isActive} isDarkMode={isDarkMode}>
                {icon}
                <Description isActive={isActive} isDarkMode={isDarkMode}>
                  {description}
                </Description>
              </TabButton>
            </Link>
          </ListItem>
        )
      }}
    </Context.Consumer>
  )
}

export default withRouter(GetNavItem)
