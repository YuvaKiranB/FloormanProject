import styled from 'styled-components'

export const ComplaintDropDownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4f4f4;
  width: 96 %;
  margin-bottom: 2px;
`;


export const ComplaintDropDown = styled.div`
  position: relative;
  width: 100%;

`;

export const DropdownButton = styled.button`
  width: 100%;
  padding: 14px 16px;
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, #4f46e5, #4338ca);
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const Arrow = styled.span`
  transition: transform 0.3s ease;

  transform: ${({ open }) =>
    open ? "rotate(180deg)" : "rotate(0deg)"};
`;

export const Menu = styled.div`



  top: 65px;
  left: 0;
  width: 100%;

  background: white;
  border-radius: 14px;
  display: flex;
  flex-wrap: wrap;


  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);

  max-height: ${({ open }) => (open ? "1000vh" : "0")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  transform: ${({ open }) =>
    open ? "translateY(0)" : "translateY(-10px)"};

  transition: all 0.35s ease;
          margin-bottom: 2px;

`;

export const SparesMenu = styled.div`



  top: 65px;
  left: 0;
  width: 100%;

  background: white;
  border-radius: 14px;
  display: flex;
  flex-wrap: wrap;


  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);

  max-height: ${({ open }) => (open ? "1000vh" : "0")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  transform: ${({ open }) =>
    open ? "translateY(0)" : "translateY(-10px)"};

  transition: all 0.35s ease;
          margin-bottom: 2px;

`;

  export const MenuItem = styled.div`
    padding: 5px 12px;
    cursor: pointer;
    font-size: 15px;
    color: #333;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;


    @media(max-width: 758px){
    width: 100%;
    }

    transition: background 0.2s ease;

    &:hover {
      background: #eef2ff;
    }

    &:not(:last-child) {
      border-bottom: 1px solid #f1f1f1;
    }

  `;


  export const SparesItem = styled.div`
  padding: 5px 12px;
  cursor: pointer;
  font-size: 15px;
  color: #333;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;


  @media(max-width: 758px){
  width: 100%;
  }

  transition: background 0.2s ease;

  &:hover {
    background: #eef2ff;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #f1f1f1;
  }

`;

export const WorksHeader = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;`

export const SparesHeader = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;`

export const WorksHeading = styled.h1`
color: black;
font-size: 18px;
`

export const SparesHeading = styled.h1`
color: black;
font-size: 18px;
`

export const AddWorksButton = styled.button`
border-radius: 5px;
border:none;
background-color: blue;
color: white;
padding: 10px;
hgiseight: 100%;
font-size: 18px;
cursor: pointer;
`

export const AddSparesButton = styled.button`
border-radius: 5px;
border:none;
background-color: blue;
color: white;
padding: 10px;
hgiseight: 100%;
font-size: 18px;
cursor: pointer;
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

export const ContainerB = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
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
`;

export const Heading = styled.h2`
  text-align: center;
  margin-bottom: 15px;
`;

export const Field = styled.div`
  margin-bottom: 10px;
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

export const AddWorkBox = styled.textarea`
`


export const FormContainer = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 20px auto;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #222;
`

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 12px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 15px;
  outline: none;
  resize: vertical;

  &:focus {
    border-color: #2563eb;
  }
`
export const SparePartDescription = styled.textarea`
  width: 100%;
  min-height: 20px;
  padding: 12px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 15px;
  outline: none;
  resize: vertical;

  &:focus {
    border-color: #2563eb;
  }
`
export const SparePartNumberInput = styled.input`
  width: 100%;
  min-height: 20px;
  padding: 12px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 15px;
  outline: none;
  resize: vertical;

  &:focus {
    border-color: #2563eb;
  }
`

export const SparePartQuantity = styled.input`
  width: 100%;
  min-height: 20px;
  type: number;
  padding: 12px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 15px;
  outline: none;
  resize: vertical;

  &:focus {
    border-color: #2563eb;
  }
`

export const Select = styled.select`
  width: 100%;
  padding: 12px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 15px;
  outline: none;
  background-color: white;
  cursor: pointer;

  &:focus {
    border-color: #2563eb;
  }
`

export const HeaderDiv = styled.div`
  width: 100%;
  padding: 12px;
  background-color: #f1f5f9;
  border-radius: 8px;
`

export const SparesSuggestionsContainer = styled.div`
overflow-y: scroll;`

export const SparesSuggitionsHeading = styled.h1`
font-size: 18px;
margin-top: 0px;`

export const SparePartSuggestionContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
border-width: 2px;
border-style: solid;
border-color: black;
margin-bottom: 10px;
padding: 0px;
border-radius: 5px;
cursor: pointer;
`

export const PartNumberPara = styled.p`
padding: 5px;
cursor: pointer;
border-right: 2px solid black;
margin: 0px;`

export const PartDescriptionPara = styled.p`
padding: 5px;
cursor: pointer;
margin: 0px;
border-right-width: 0px;
border-left-width: 0px;
`

export const PartMRPPara = styled.p`
padding: 5px;
cursor: pointer;
border-left: 2px solid black;
margin: 0px;`
