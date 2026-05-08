import styled from 'styled-components'

export const LogoutButton = styled.button`
  margin-right: 5px;
  height: 40px;
  width: 40px;
  font-size: 30px;
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
  color: ${props => props.color};
`
export const LogoutContainer = styled.div``

export const SubContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? '#1e293b' : 'white')};
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding-top: 35px;
  padding-bottom: 35px;
`

export const CancelButton = styled.button`
  padding: 10px;
  font-family: roboto;
  font-size: 20px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: transparent;
  color: #7e858e;
  font-weight: 500;
  border: 2px solid #7e858e;
  border-radius: 5px;
  cursor: pointer;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`

export const ConfirmButton = styled.button`
  padding: 10px;
  font-family: roboto;
  font-size: 20px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #3b82f6;
  font-weight: 500;
  border-width: 0px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`

export const ClosePara = styled.p`
  font-family: roboto;
  font-size: 20px;
  color: ${props => (props.isDarkMode ? '#f8fafc' : '#00306e')};
  font-weight: 500;
  margin-bottom: 40px;
`
