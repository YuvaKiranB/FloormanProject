import styled from 'styled-components'

export const VideoDetailsContainer = styled.div`
  width: 100vw;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
`

export const ContentContainer = styled.div`
  margin-top: 25px;

  @media (min-width: 768px) {
    padding: 20px;
    width: 80vw;
  }
`

export const VideoContainer = styled.div`
  width: 100%;
`

export const DescriptionContainer = styled.div`
  padding: 20px;
`

export const Title = styled.p`
  font-size: 20px;
  font-weight: 500;
  font-family: roboto;
  line-height: 1.6;
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#0f0f0f')};
`

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`

export const TagName = styled.p`
  margin: 0px;
  padding: 0px;
  font-family: roboto;
  color: #616e7c;
  font-weight: 500;
`

export const DotContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  font-size: 25px;
  color: ${props => (props.isDarkMode ? '#616e7c' : '#0f0f0f')};
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 25px;
`

export const LikeButton = styled.button`
  font-family: roboto;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
  padding: 0px;
  height: 30px;
  font-size: 24px;
  color: ${props => (props.isLiked ? '#2563eb' : '#64748b ')};
  background-color: transparent;
  border-width: 0px;
  font-weight: 500;
  cursor: pointer;
`

export const DisLikeButton = styled.button`
  font-family: roboto;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
  padding: 0px;
  height: 30px;
  font-size: 24px;
  color: ${props => (props.isDisLiked ? '#2563eb' : '#64748b')};
  background-color: transparent;
  border-width: 0px;
  font-weight: 500;
  cursor: pointer;
`

export const SaveButton = styled.button`
  font-family: roboto;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
  padding: 0px;
  height: 30px;
  font-size: 24px;
  color: ${props => (props.isSaved ? '#2563eb' : '#64748b')};
  background-color: transparent;
  border-width: 0px;
  font-weight: 500;
  cursor: pointer;
`

export const ButtonName = styled.p`
  font-size: 18px;
  margin-left: 5px;
`

export const HorizontalLine = styled.hr`
  border-width: 1px;
  border-style: solid;
  border-color: #94a3b8;
`

export const ChannelDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`

export const ChannelName = styled.p`
  font-family: roboto;
  font-size: 16px;
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#0f0f0f')};
`

export const ChannelText = styled.p`
  margin: 0px;
  padding: 0px;
  font-family: roboto;
  font-weight: 500;
  line-height: 1.6;
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#616e7c')};
`

export const ChannelDescriptionContainer = styled.div`
  margin-top: 5px;
`

export const ChannelLogo = styled.img`
  height: 65px;
  margin: 20px;
  border-radius: 50%;
`

export const RightPane = styled.div``

export const Content = styled.div`
  display: flex;
  flex-direction: row;
`
export const LargeInfoContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`
export const LoaderContainer = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
