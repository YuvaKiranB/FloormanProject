import {Link, withRouter} from 'react-router-dom'
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
  state = {pageStatus: apiStatusConstants.initial, vehicleDetail: {}}

  componentDidMount() {
    this.getVehicleData()
  }

  getVehicleData = async () => {
    this.setState({pageStatus: apiStatusConstants.process})
    const {match} = this.props
    console.log(match)
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `http://10.249.168.1:4000/vehicleDetail/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    const vehicleDetails = await response.json()
    const vehicleDetailData = vehicleDetails.data



    if (response.ok) {
      const vehicleDetail = {
        id: vehicleDetailData._id,
        title: vehicleDetailData.vehicleNumber,
        videoUrl: vehicleDetailData.chassisNumber,
        publishedAt: formatDistanceToNow(new Date(vehicleDetailData.JCdate)),
        description: vehicleDetailData.driverName,
      }

      this.setState({
        vehicleDetail: {...vehicleDetail},
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
    const {vehicleDetail, pageStatus} = this.state
    const {
      id,
      title,
      viewCount,
      description,
    } = vehicleDetail

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
                        <ReactPlayer width="100%" url={"adb"} />
                      </VideoContainer>
                      <DescriptionContainer>
                        <Title isDarkMode={isDarkMode}>{title}</Title>
                        <LargeInfoContainer>
                          <TagsContainer>
                            <TagName>{`${viewCount} views`}</TagName>
                            <DotContainer isDarkMode={isDarkMode}>
                              <BsDot className="dot" />
                            </DotContainer>
                            <TagName>{`${"dd"} ago`}</TagName>
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
                          <ChannelDescriptionContainer>
                            <TagName>{`${"channel.subscriberCount"} subscribers`}</TagName>
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

export default withRouter(VideoDetails)
