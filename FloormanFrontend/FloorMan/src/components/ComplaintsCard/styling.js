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
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);

  max-height: ${({ open }) => (open ? "100vh" : "0")};
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

export const WorksHeader = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;`

export const WorksHeading = styled.h1`
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