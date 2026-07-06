import styled from "styled-components";


export const Container = styled.div`
  padding: 16px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
`;

export const Td = styled.td`
  border: 1px solid #dcdcdc;
  padding: 10px;
  vertical-align: middle;
`;

export const HeaderCell = styled(Td)`
  font-weight: 600;
`;

export const TitleCell = styled(Td)`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;


export const DescriptionHeader = styled.div`
display: flex;
flex-direction: row;
justify-content:start;
align-items: center;`

export const DescriptionPara = styled.p`
font-size: 18px;
margin: 0px;
padding: 0px;`

export const RemarksSpan = styled.p`
font-size: 18px;
font-weight: normal;`

export const RemarksCell = styled(Td)`
  font-size: 14px;

`;

export const Tdb = styled.td`
  border: 1px solid #dcdcdc;
  padding: 10px;
  vertical-align: middle;
  cursor: pointer;
`;


export const ModalOverlay = styled.div`
    position: fixed;
    inset: 0;
    height: 100vh;
  
    background-color: rgba(0, 0, 0, 0.5);
  
    display: flex;
    justify-content: center;
    align-items: center;
  
    z-index: 999999;
  `

  export const ModalBox = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;

  max-height: 90vh;
  overflow-y: auto;

  position: relative;
  z-index: 1000000;
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

