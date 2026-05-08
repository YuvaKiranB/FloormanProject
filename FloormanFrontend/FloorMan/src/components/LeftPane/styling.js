import styled from 'styled-components'

export const LeftPaneContainer = styled.nav`
  width: 16vw;
  padding-top: 30px;
  height: 90vh;
  background-color: ${props => (props.isDarkMode ? '#313131' : 'transparent')};

  display: none;
  @media (min-width: 768px) {
    display: block;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const Part1 = styled.div`
  text-decoration: none;
`

export const Part2 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-right: 40px;
`

export const ContactUs = styled.p`
  font-family: roboto;
  font-size: 20px;
  color: ${props => (props.isDarkMode ? '#e2e8f0' : '#475569')};
  margin-bottom: 20px;
`

export const Icon = styled.img`
  height: 45px;
  margin-right: 15px;
`

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

export const Description2 = styled.p`
  margin-top: 20px;
  font-family: roboto;
  font-size: 18px;
  color: ${props => (props.isDarkMode ? '#f1f5f9' : '#64748b')};
`
export const NavItems = styled.ul`
  list-style: none;
  padding-left: 0px;
  margin-top: 0px;
  padding-top: 0px;
`
