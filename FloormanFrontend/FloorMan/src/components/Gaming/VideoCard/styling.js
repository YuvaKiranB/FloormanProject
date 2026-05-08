import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 180px;
  margin-bottom: 20px;
  margin-right: 14px;
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Thumbnail = styled.img`
  width: 100%;
`

export const Title = styled.p`
  font-family: roboto;
  color: ${props => (props.isDarkMode ? '#cbd5e1' : 'black')};
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`

export const TagName = styled.p`
  margin: 0px;
  font-family: roboto;
  font-size: 16px;
  margin-bottom: 10px;
  color: ${props => (props.isDarkMode ? '#64748b' : '#606060')};
`
