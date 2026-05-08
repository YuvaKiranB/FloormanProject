import styled from 'styled-components'

export const TabButton = styled.button`
  padding: 15px;
  width: 100%;
  padding-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 20px;
  text-decoration: none;
  font-family: roboto;
  color: ${props => (props.isActive ? '#ff0b37' : '#e2e8f0')};
  color: ${props => !props.isActive && !props.isDarkMode && '#475569'};
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
  background-color: ${props => props.isActive && props.isDarkMode && '#475569'};
  background-color: ${props =>
    props.isActive && !props.isDarkMode && '#e2e8f0'};
`

export const Description = styled.span`
  margin-left: 14px;
  color: ${props => (props.isDarkMode ? '#e2e8f0' : '#475569')};
  color: ${props => !props.isDarkMode && props.isActive && 'black'};
  font-weight: ${props => (props.isActive ? 500 : 400)};
`
export const ListItem = styled.li``
