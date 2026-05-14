import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
`

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  padding-right: 5px;
  width: 80%;
  @media (min-width: 768px) {
    width: 50%;
  }
`

export const SearchInput = styled.input`
  padding: 8px;
  font-family: roboto;
  font-size: 18px;
  width: 80%;
  border: 1px solid #7e858e;
  border-top-left-radius: 5 px;
  border-bottom-left-radius: 5 px;
  outline: none;
  background-color: transparent;
  color: ${props => (props.isDarkMode ? 'white' : 'black')};
`

export const SearchButton = styled.button`
  width: 20%;
  border: 1px solid #7e858e;
  border-top-right-radius: 5 px;
  border-bottom-right-radius: 5 px;
  font-size: 16px;
  color: #7e858e;
  cursor: pointer;
  background-color: ${props => (props.isDarkMode ? '#424242' : '#f1f1f1')};
  margin-right: 0px;
`

export const CardsList = styled.ul`
  padding-left: 5px;
  list-style: none;
  overflow: scroll;
  height: 100vh;
  

`

export const NoResultContainer = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  text-align: center;
`

export const NoResultImage = styled.img`
  width: 80%;
  margin-bottom: 20px;
`

export const NoResultPara1 = styled.p`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 5px;
  font-family: roboto;
  color: ${props => (props.isDarkMode ? '#f1f1f1' : 'black')};
`

export const NoResultPara2 = styled.p`
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

export const LoaderContainer = styled.div`
  height: 70vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TopContainer = styled.div`
display: flex;
flex-direction : row;
justify-content: start;
align-items: center;`

export const AddVehicleButton = styled.button`
    backgroundColor: "#4CAF50";
    color: "white";
    padding: "50px 20px";
    border: "none";
    borderRadius: "5px";
    cursor: "pointer";
    fontSize: "16px";
    margin-left: 0px;
    height: 38px;
    `

    export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
  
    background-color: rgba(0, 0, 0, 0.5);
  
    display: flex;
    justify-content: center;
    align-items: center;
  
    z-index: 9999;
  `

  export const ModalBox = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;

  max-height: 90vh;
  overflow-y: auto;

  position: relative;
  z-index: 10000;
`

export const ShowErrorPara = styled.p`
color: red;
fontSize: 4px;
padding: 5px;
padding-top: 0px`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background: #fff;
  font-family: Arial, sans-serif;
  overflow: scroll;
`;

export const FormWrapper = styled.form`
  background: #fff;
  padding: 25px;
  border-radius: 10px;
  width: 100%;
  height: 100%;
`;

export const Heading = styled.h2`
  text-align: center;
  margin-bottom: 15px;
`;

export const Field = styled.div`
  margin-bottom: 10px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

export const AddVehicleAuthErrorPara = styled.p`
color: red;
fontSize: 4px;
padding: 5px;
padding-top: 0px;`

export const VehicleAddedPara= styled.p`
color: green;
fontSize: 4px;
padding: 5px;
padding-top: 0px;`

export const ContainerB = styled.div`
  padding: 40px;
  display: flex;
flex-wrap: wrap;
width: 100%;
    @media (max-width: 768px) {
    padding: 10px;
  }

`;

export const ToggleButton = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Spacer = styled.div`
  margin: 20px 0;
`;