import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f1f1f1')};
  min-height: 100vh;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  background-color: ${props => (props.isDarkMode ? '#212121' : '#ebebeb')};
  margin-bottom: 30px;
`

export const SavedLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 75px;
  background-color: ${props => (props.isDarkMode ? 'black' : '#cbd5e1')};
  margin-right: 20px;
  font-size: 45px;
  border-radius: 50%;
  color: #ff0b37;
`

export const SavedHeading = styled.h1`
  margin: 0px;
  color: ${props => (props.isDarkMode ? '#ebebeb' : 'black')};
`

export const CardsList = styled.ul`
  list-style: none;
  padding-left: 0px;
  font-family: roboto;
  overflow: scroll;
  height: 100vh;
`

export const RightPane = styled.div`
  width: 100%;
`
export const NoSavedVideosContainer = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NoSavedVideosImage = styled.img`
  width: 90%;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    width: 50%;
  }
`

export const NoSavedVideosHeading = styled.h1`
  font-family: roboto;
  font-size: 28px;
  margin-bottom: 10px;
  color: ${props => (props.isDarkMode ? '#f1f1f1' : '#0f0f0f')};
`

export const NoSavedVideosPara = styled.p`
  font-family: roboto;
  font-size: 18px;
  color: ${props => (props.isDarkMode ? '#d7dfe9' : '#475569')};
`
