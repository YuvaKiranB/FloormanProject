import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: 450px;
    margin-right: 20px;
    display: flex;
    flex-direction: row;
    padding: 30px;
    width: 100%;
  }
`

export const DescriptionContainer = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: row;
  @media (min-width: 768px) {
    margin-top: 5px;
    padding-top: 0px;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
  @media (min-width: 768px) {
    width: 40%;
  }
`

export const ProfileImageContainer = styled.div`
  padding: 10px;
  @media (min-width: 768px) {
    display: none;
  }
`

export const ProfileImage = styled.img`
  height: 60px;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.p`
  font-family: roboto;
  color: ${props => (props.isDarkMode ? '#cbd5e1' : 'black')};
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    padding-top: 0px;
    margin-top: 0px;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`

export const TagName = styled.p`
  margin: 0px;
  font-family: roboto;
  font-size: 16px;
  color: ${props => (props.isDarkMode ? '#64748b' : '#606060')};
`
export const DotContainer = styled.div`
  font-size: 25px;
  color: ${props => (props.isDarkMode ? '#64748b' : '#606060')};
  margin-left: 5px;
  margin-right: 5px;
  font-weight: 600;
  padding: 0px;
  margin-top: 2px;
`

export const DotContainer2 = styled.div`
  font-size: 25px;
  color: ${props => (props.isDarkMode ? '#64748b' : '#606060')};
  margin-left: 5px;
  margin-right: 5px;
  font-weight: 600;
  padding: 0px;
  margin-top: 2px;
  @media (min-width: 768px) {
    display: none;
  }
`

export const ReviewAndDurationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
