import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.isDarkMode ? '#181818' : 'white')};
`

export const ContentContainer = styled.div`
  min-height: 95vh;
  display: flex;
  flex-direction: row;
`

export const RightPane = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
`

export const NotFoundImage = styled.img`
  width: 95vw;
  @media (min-width: 768px) {
    width: 45%;
  }
`

export const TextContainer = styled.div`
  width: 60vw;
`

export const NotFoundHeading = styled.h1`
  margin-top: 40px;
  font-family: roboto;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 5px;
  color: ${props => (props.isDarkMode ? ' #f1f1f1' : 'black')};
`

export const NotFoundPara = styled.p`
  margin-top: 5px;
  font-size: 16px;
  font-weight: 400;
  font-family: roboto;
  color: ${props => (props.isDarkMode ? '#94a3b8' : '#1e293b')};
`
