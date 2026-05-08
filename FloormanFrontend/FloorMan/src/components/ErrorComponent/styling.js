import styled from 'styled-components'

export const ErrorContainer = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  text-align: center;
`

export const ErrorImage = styled.img`
  width: 80%;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: 30%;
  }
`

export const ErrorHeading = styled.h1`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 5px;
  font-family: roboto;
  color: ${props => (props.isDarkMode ? '#f1f1f1' : 'black')};
`

export const ErrorPara = styled.p`
  margin-top: 8px;
  font-family: roboto;
  font-size: 20px;
  color: #475569;
`

export const RetryButton = styled.button`
  padding: 15px;
  width: 120px;
  background-color: #4f46e5;
  font-family: roboto;
  font-size: 16px;
  color: white;
  border-width: 0px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
`
