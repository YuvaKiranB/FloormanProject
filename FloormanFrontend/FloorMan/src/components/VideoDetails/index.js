import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import Context from '../../Context'
import LeftPane from '../LeftPane'
import ErrorCard from '../ErrorComponent'

import {
  VideoDetailsContainer,
  ContentContainer,
  VideoContainer,
  DescriptionContainer,
  Title,
  TagsContainer,
  TagName,
  DotContainer,
  ButtonsContainer,
  LikeButton,
  DisLikeButton,
  SaveButton,
  ButtonName,
  HorizontalLine,
  ChannelDetailsContainer,
  ChannelName,
  ChannelText,
  ChannelDescriptionContainer,
  ChannelLogo,
  RightPane,
  Content,
  LargeInfoContainer,
  LoaderContainer,
} from './styling'

import Header from '../Header'

const apiStatusConstants = {
  initial: 'INITIAL',
  process: 'PROCESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoDetails extends Component {
  state = {pageStatus: apiStatusConstants.initial, videoDetails: {}}

  componentDidMount() {
    this.getVideoData()
  }

  getVideoData = async () => {
    this.setState({pageStatus: apiStatusConstants.process})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()

    const video = data.video_details

    if (response.ok) {
      const videoDetails = {
        id: video.id,
        title: video.title,
        videoUrl: video.video_url,
        thumbnailUrl: video.thumbnail_url,
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
          subscriberCount: video.channel.subscriber_count,
        },
        viewCount: video.view_count,
        publishedAt: formatDistanceToNow(new Date(video.published_at)),
        description: video.description,
      }

      this.setState({
        videoDetails: {...videoDetails},
        pageStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({pageStatus: apiStatusConstants.failure})
    }
  }

  retry = () => {
    this.getVideoData()
  }

  render() {
    const {videoDetails, pageStatus} = this.state
    const {
      id,
      title,
      videoUrl,
      channel,
      viewCount,
      publishedAt,
      description,
    } = videoDetails

    return (
      <Context.Consumer>
        {value => {
          const {
            isDarkMode,
            onClickLike,
            onClickDisLike,
            onClickSave,
            likedVideosIds,
            disLikedVideosIds,
            savedVideosIds,
          } = value

          const isLiked = likedVideosIds.includes(id)
          const isDisLiked = disLikedVideosIds.includes(id)
          const isSaved = savedVideosIds.includes(id)

          const clickedLike = () => {
            onClickLike(videoDetails)
          }

          const clickedDisLike = () => {
            onClickDisLike(videoDetails)
          }

          const clickedSave = () => {
            onClickSave(videoDetails)
          }
          return (
            <VideoDetailsContainer
              isDarkMode={isDarkMode}
              data-testid="videoItemDetails"
            >
              <Header />
              <Content>
                <LeftPane />
                <RightPane>
                  {pageStatus === apiStatusConstants.success && (
                    <ContentContainer>
                      <VideoContainer>
                        <ReactPlayer width="100%" url={videoUrl} />
                      </VideoContainer>
                      <DescriptionContainer>
                        <Title isDarkMode={isDarkMode}>{title}</Title>
                        <LargeInfoContainer>
                          <TagsContainer>
                            <TagName>{`${viewCount} views`}</TagName>
                            <DotContainer isDarkMode={isDarkMode}>
                              <BsDot className="dot" />
                            </DotContainer>
                            <TagName>{`${publishedAt} ago`}</TagName>
                          </TagsContainer>
                          <ButtonsContainer>
                            <LikeButton
                              isLiked={isLiked}
                              onClick={clickedLike}
                              type="button"
                            >
                              <BiLike />
                              <ButtonName>Like</ButtonName>
                            </LikeButton>

                            <DisLikeButton
                              onClick={clickedDisLike}
                              type="button"
                              isDisLiked={isDisLiked}
                            >
                              <BiDislike />
                              <ButtonName>Dislike</ButtonName>
                            </DisLikeButton>

                            <SaveButton
                              isSaved={isSaved}
                              onClick={clickedSave}
                              type="button"
                            >
                              <MdPlaylistAdd />
                              <ButtonName>
                                {isSaved ? 'Saved' : 'Save'}
                              </ButtonName>
                            </SaveButton>
                          </ButtonsContainer>
                        </LargeInfoContainer>
                        <HorizontalLine />
                        <ChannelDetailsContainer>
                          <ChannelLogo
                            src={channel.profileImageUrl}
                            alt="channel logo"
                          />
                          <ChannelDescriptionContainer>
                            <ChannelName isDarkMode={isDarkMode}>
                              {channel.name}
                            </ChannelName>
                            <TagName>{`${channel.subscriberCount} subscribers`}</TagName>
                          </ChannelDescriptionContainer>
                        </ChannelDetailsContainer>
                        <ChannelText isDarkMode={isDarkMode}>
                          {description}
                        </ChannelText>
                      </DescriptionContainer>
                    </ContentContainer>
                  )}

                  {pageStatus === apiStatusConstants.process && (
                    <LoaderContainer>
                      <div className="loader-container" data-testid="loader">
                        <Loader
                          type="ThreeDots"
                          color="#3b82f6"
                          height="50"
                          width="50"
                        />
                      </div>
                    </LoaderContainer>
                  )}

                  {pageStatus === apiStatusConstants.failure && (
                    <ErrorCard clickedRetry={this.retry} />
                  )}
                </RightPane>
              </Content>
            </VideoDetailsContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default VideoDetails
