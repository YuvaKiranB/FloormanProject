import {MdPlaylistAdd} from 'react-icons/md'

import GetVideoCard from './VideoCard'
import Header from '../Header'
import LeftPane from '../LeftPane'
import Banner from '../Banner'

import Context from '../../Context'

import {
  SavedVideosContainer,
  ContentContainer,
  HeaderContainer,
  SavedLogoContainer,
  SavedHeading,
  CardsList,
  RightPane,
  NoSavedVideosContainer,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosPara,
} from './styling'

const SavedVideos = () => (
  <Context.Consumer>
    {value => {
      const {isDarkMode, savedVideos} = value

      return (
        <SavedVideosContainer isDarkMode={isDarkMode}>
          <Header />
          <ContentContainer>
            <LeftPane />
            <RightPane>
              {savedVideos.length > 0 && (
                <HeaderContainer isDarkMode={isDarkMode}>
                  <SavedLogoContainer isDarkMode={isDarkMode}>
                    <MdPlaylistAdd />
                  </SavedLogoContainer>
                  <SavedHeading isDarkMode={isDarkMode}>
                    Saved Videos
                  </SavedHeading>
                </HeaderContainer>
              )}


              <CardsList>
                {savedVideos.map(eachItem => (
                  <GetVideoCard key={eachItem.id} content={eachItem} />
                ))}

                {savedVideos.length === 0 && (
                  <NoSavedVideosContainer>
                    <NoSavedVideosImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                      alt="no saved videos"
                    />
                    <NoSavedVideosHeading isDarkMode={isDarkMode}>
                      No Saved videos found
                    </NoSavedVideosHeading>
                    <NoSavedVideosPara isDarkMode={isDarkMode}>
                      You can save your videos while watching them
                    </NoSavedVideosPara>
                  </NoSavedVideosContainer>
                )}
              </CardsList>
            </RightPane>
          </ContentContainer>
        </SavedVideosContainer>
      )
    }}
  </Context.Consumer>
)

export default SavedVideos
