import {Link, withRouter} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'

import {
  CardContainer,
  DescriptionContainer,
  Thumbnail,
  ProfileImageContainer,
  ProfileImage,
  TextContainer,
  Title,
  TagsContainer,
  TagName,
  DotContainer,
  DotContainer2,
  ReviewAndDurationContainer,
} from './styling'
import './index.css'

import Context from '../../../Context'

const GetVideoCard = props => {
  const {content} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = content
  const {name, profileImageUrl} = channel

  return (
    <Context.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <Link to={`/videos/${id}`} className="link">
            <CardContainer>
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <DescriptionContainer>
                <ProfileImageContainer>
                  <ProfileImage src={profileImageUrl} alt="channel logo" />
                </ProfileImageContainer>
                <TextContainer>
                  <Title isDarkMode={isDarkMode}>{title}</Title>
                  <TagsContainer>
                    <TagName isDarkMode={isDarkMode}>{name}</TagName>
                    <ReviewAndDurationContainer>
                      <DotContainer2 isDarkMode={isDarkMode}>
                        <BsDot className="dot" />
                      </DotContainer2>

                      <TagName isDarkMode={isDarkMode}>{viewCount}</TagName>
                      <DotContainer isDarkMode={isDarkMode}>
                        <BsDot className="dot" />
                      </DotContainer>

                      <TagName
                        isDarkMode={isDarkMode}
                      >{`${publishedAt} ago`}</TagName>
                    </ReviewAndDurationContainer>
                  </TagsContainer>
                </TextContainer>
              </DescriptionContainer>
            </CardContainer>
          </Link>
        )
      }}
    </Context.Consumer>
  )
}

export default withRouter(GetVideoCard)
