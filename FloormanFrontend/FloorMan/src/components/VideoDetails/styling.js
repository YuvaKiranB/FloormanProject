import styled from 'styled-components'

export const VideoDetailsContainer = styled.div`
  width: 100vw;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
`

export const ContentContainer = styled.div`
  margin-top: 25px;
  width: 100vw;
  margin-left: 10px;
  @media (min-width: 768px) {
    padding: 20px;
    width: 80vw;
  }
`

export const VideoContainer = styled.div`
  width: 100%;
`

export const DescriptionContainer = styled.div`
  padding: 20px;
`

export const Title = styled.p`
  font-size: 20px;
  font-weight: 500;
  font-family: roboto;
  line-height: 1.6;
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#0f0f0f')};
`

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`

export const TagName = styled.p`
  margin: 0px;
  padding: 0px;
  font-family: roboto;
  color: #616e7c;
  font-weight: 500;
`

export const DotContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  font-size: 25px;
  color: ${props => (props.isDarkMode ? '#616e7c' : '#0f0f0f')};
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 25px;
`

export const LikeButton = styled.button`
  font-family: roboto;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
  padding: 0px;
  height: 30px;
  font-size: 24px;
  color: ${props => (props.isLiked ? '#2563eb' : '#64748b ')};
  background-color: transparent;
  border-width: 0px;
  font-weight: 500;
  cursor: pointer;
`

export const DisLikeButton = styled.button`
  font-family: roboto;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
  padding: 0px;
  height: 30px;
  font-size: 24px;
  color: ${props => (props.isDisLiked ? '#2563eb' : '#64748b')};
  background-color: transparent;
  border-width: 0px;
  font-weight: 500;
  cursor: pointer;
`

export const SaveButton = styled.button`
  font-family: roboto;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
  padding: 0px;
  height: 30px;
  font-size: 24px;
  color: ${props => (props.isSaved ? '#2563eb' : '#64748b')};
  background-color: transparent;
  border-width: 0px;
  font-weight: 500;
  cursor: pointer;
`

export const ButtonName = styled.p`
  font-size: 18px;
  margin-left: 5px;
`

export const HorizontalLine = styled.hr`
  border-width: 1px;
  border-style: solid;
  border-color: #94a3b8;
`

export const ChannelDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`

export const ChannelName = styled.p`
  font-family: roboto;
  font-size: 16px;
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#0f0f0f')};
`

export const ChannelText = styled.p`
  margin: 0px;
  padding: 0px;
  font-family: roboto;
  font-weight: 500;
  line-height: 1.6;
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#616e7c')};
`

export const ChannelDescriptionContainer = styled.div`
  margin-top: 5px;
`

export const ChannelLogo = styled.img`
  height: 65px;
  margin: 20px;
  border-radius: 50%;
`

export const RightPane = styled.div``

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`
export const LargeInfoContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`
export const LoaderContainer = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const VehicleDetailContainer = styled.div`
height: 30 px;
width: 95%;
display: flex;
flex-direction: row;
aligh-items: center;
justify-content: space-between;
background-color: grey;
border-radius: 10px;
padding-left: 20px;
padding-right: 30px;`

export const VehicleDetailHeading = styled.h1``

export const VehicleDetailArrowContainer = styled.div`
cursor: pointer;`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4f4f4;
  width: 96 %;
`;

export const Dropdown = styled.div`
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
`;

export const MenuItem = styled.div`
  padding: 15px 18px;
  cursor: pointer;
  font-size: 15px;
  color: #333;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between  ;
  width: 48%;


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

export const MenuSpan = styled.h1`
color: red;
font-size: 15px;
margin-right: 20px;`

export const ComplaintsContainer = styled.div``

export const ComplaintsHeader = styled.div`
display: flex;
flex-direction: row;
align-items:center;
justify-content: space-between;`

export const AddComplaintButton = styled.button`
border-radius: 5px;
border:none;
background-color: blue;
color: white;
padding: 10px;
height: 100%;
font-size: 18px;
cursor: pointer;`

export const ComplaintsHeading = styled.h1``


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

export const AddComplaintBox = styled.textarea`
`

export const ComplaintDropDownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4f4f4;
  width: 96 %;
`;

export const ComplaintDropDown = styled.div`
  position: relative;
  width: 100%;
`;