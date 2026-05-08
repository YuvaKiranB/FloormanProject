import styled from 'styled-components'

export const HamburgerButton = styled.button`
  margin-right: 10px;
  height: 40px;
  width: 40px;
  font-size: 30px;
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
  color: ${props => props.color};
`

export const HamburgerContainer = styled.div``

export const SubContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 25vh;
`

export const MenuContainer = styled.div`
  width: 100vw;
`

export const CloseButton = styled.button`
  margin-right: 30px;
  font-size: 35px;
  padding: 0px;
  cursor: pointer;
  background-color: transparent;
  border-width: 0px;
  color: ${props => (props.isDarkMode ? '#e2e8f0' : 'black')};
`

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
  background-color: ${props => props.isActive && props.isDarkMode && '#424242'};
  background-color: ${props =>
    props.isActive && !props.isDarkMode && '#e2e8f0'};
  padding-left: 30vw;
`

export const Description = styled.span`
  margin-left: 14px;
  color: ${props => (props.isDarkMode ? '#e2e8f0' : '#475569')};
  color: ${props => !props.isDarkMode && props.isActive && 'black'};
  font-weight: ${props => (props.isActive ? 500 : 400)};
`
