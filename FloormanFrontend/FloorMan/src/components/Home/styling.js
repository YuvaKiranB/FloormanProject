import styled from 'styled-components'

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const RightPane = styled.div`
  width: 100%;
`
export const HomeContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? '#181818' : '#f9f9f9')};
`
