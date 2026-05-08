import {Link, withRouter} from 'react-router-dom'

import {
  CardContainer,
  DescriptionContainer,
  Thumbnail,
  Title,
  TagName,
} from './styling'
import './index.css'

import Context from '../../../Context'

const GetVideoCard = props => {
  const {content} = props
  const {id, title, thumbnailUrl, viewCount} = content

  return (
    <Context.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <Link to={`/videos/${id}`} className="link">
            <CardContainer>
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <DescriptionContainer>
                <Title isDarkMode={isDarkMode}>{title}</Title>
                <TagName
                  isDarkMode={isDarkMode}
                >{`${viewCount} Watching`}</TagName>
                <TagName isDarkMode={isDarkMode}>Worldwide</TagName>
              </DescriptionContainer>
            </CardContainer>
          </Link>
        )
      }}
    </Context.Consumer>
  )
}

export default withRouter(GetVideoCard)
