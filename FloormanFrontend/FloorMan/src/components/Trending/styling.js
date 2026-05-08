import styled from 'styled-components'

export const TrendingContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
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

export const TrendingLogoContainer = styled.div`
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

export const TrendingHeading = styled.h1`
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
export const LoaderContainer = styled.div`
  height: 70vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
