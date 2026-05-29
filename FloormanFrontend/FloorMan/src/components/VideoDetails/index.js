import {Link, withRouter} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import Context from '../../Context'
import LeftPane from '../LeftPane'
import ErrorCard from '../ErrorComponent'
import ComplaintDetails from '../ComplaintsCard'


import {
  VideoDetailsContainer,
  ContentContainer,
  VideoContainer,
  DescriptionContainer,
  Title,
  TagsContainer,
  TagName,
  DotContainer,
  ButtonsContainer,
  LikeButton,
  DisLikeButton,
  SaveButton,
  ButtonName,
  HorizontalLine,
  ChannelDetailsContainer,
  ChannelName,
  ChannelText,
  ChannelDescriptionContainer,
  ChannelLogo,
  RightPane,
  Content,
  LargeInfoContainer,
  LoaderContainer,
  VehicleDetailContainer,
  VehicleDetailHeading,
  VehicleDetailArrowContainer,
  Container,
  Dropdown,
  DropdownButton,
  Menu,
  MenuItem,
  Arrow, 
  MenuSpan,
  ComplaintsContainer,
  ComplaintsHeader,
  ComplaintsHeading,
  AddComplaintButton,
  ModalOverlay,
  ModalBox,
  ContainerB,
  FormWrapper,
  Heading,
  Input,
  Button,
  Field,
  Label,
  ShowErrorPara,
  AddVehicleAuthErrorPara,
  VehicleAddedPara,
  AddComplaintBox,
  ComplaintDropDownContainer,
  ComplaintDropDown
} from './styling'

import Header from '../Header'

const apiStatusConstants = {
  initial: 'INITIAL',
  process: 'PROCESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoDetails extends Component {
  state = {pageStatus: apiStatusConstants.initial, 
    vehicleDetail: {}, 
    vehicleDetailArrow: false,
    isAddComplaintAuthError: false,
  addComplaintErrMsg: "",
  isComplaintAdded : false, 
  vehicleId : "", 
  complaint: "", 
  showError: false, 
  complaintAddedMsg: "", 
  complaintsData: [], 
  complaintPageStatus: apiStatusConstants.initial, 
  isOpen: false}

  componentDidMount() {
    this.getVehicleData()
    this.getComplaintsData()
  }

  changeVehicleDetial = () => {
    console.log("vehicle detail change initiated")
    this.setState((previousState) => ({vehicleDetailArrow: !previousState.vehicleDetailArrow}))
  }

  getVehicleData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({pageStatus: apiStatusConstants.process, vehicleId : id})
    const jwtToken = Cookies.get('jwt_token')
    const OurUrl = process.env.REACT_APP_OURURL
    const url = `${OurUrl}/vehicleDetail/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    const vehicleDetails = await response.json()
    const vehicleDetailData = vehicleDetails.data



    if (response.ok) {


      this.setState({
        vehicleDetail: {...vehicleDetailData},
        pageStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({pageStatus: apiStatusConstants.failure})
    }
  }

  getComplaintsData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({complaintPageStatus: apiStatusConstants.process})
    const jwtToken = Cookies.get('jwt_token')
    const OurUrl = process.env.REACT_APP_OURURL
    const url = `${OurUrl}/complaints/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)  
    const complaints = await response.json()
    const complaintsData = complaints.data








    if (response.ok) {


      this.setState({
        complaintsData: [...complaintsData],
        complaintPageStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({complaintPageStatus: apiStatusConstants.failure})
    }
  }


  getUpdatedDate = (JCdate) => {

    const d = new Date(JCdate)
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
  
    let hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
  
    const ampm = hours >= 12 ? 'PM' : 'AM';
  
    hours = hours % 12;
    hours = hours ? hours : 12;
  
    hours = String(hours).padStart(2, '0');
  
    return `${day}-${month}-${year} ; ${hours}:${minutes} ${ampm}`;

  }

  retry = () => {
    this.getVehileData()
    this.getComplaintsData()
  }
  
  addComplaint = () => {
    const {isOpen} = this.state
    this.setState({isOpen: !isOpen, showError: false, isAddComplaintAuthError: false, isComplaintAdded: false})
  }

  setIsOpen = () => {
    this.setState({isOpen: false})
  }

  onSubmitFailure = errorMsg => {
    this.setState({
      isAddComplaintAuthError: true,
      addComplaintErrMsg: errorMsg,
    })
  }

  handleComplaintChange = event => {
    const name = event.target.name
    const value = event.target.value  
    console.log(value)
    this.setState({[name] : value, showError: false})
  }

  handleAddComplaintSubmit = async event => {
    event.preventDefault();

    const {
      vehicleId, complaint} = this.state



    const complaintDetails = {
      vehicleId, complaint}

      if (complaint.length < 3 ){
         this.setState({showError: true})
      }else{

        const jwtToken = Cookies.get('jwt_token')

        const OurUrl = process.env.REACT_APP_OURURL


        const url = `${OurUrl}/addComplaint`

        const jsonUserDetails = JSON.stringify(complaintDetails)
        const options = {
          method: 'POST',
          headers: {'Content-Type': "application/json", Authorization: `Bearer ${jwtToken}`,}, 
          body: jsonUserDetails,
        }
    
    
       const response = await fetch(url, options)

       
        const data = await response.json()

        
        if (response.ok === true) {
          this.setState({
            complaint: "",
            isComplaintAdded: true,
            complaintAddedMsg: data.response,
              })

              this.getComplaintsData()
    
        } else {
          this.onSubmitFailure(data.response)
        }
      }


    
  };


  render() {
    const {vehicleDetail, pageStatus, vehicleDetailArrow, isOpen,
      showError,
      isAddComplaintAuthError,
      addComplaintErrMsg,
      isComplaintAdded,
      complaintAddedMsg, 
      complaint, 
      vehicleId, 
      complaintsData, 
      complaintPageStatus
    } = this.state

    const {
      _id,
      vehicleNumber,
      chassisNumber,
      engineNumber, 
      vehicleModel, 
      customerName, 
      JCnumber, 
      JCdate, 
      kms, 
      hrs, 
      dateOfSale, 
      driverName, 
      driverNumber, 
    } = vehicleDetail


    const updatedDate = JCdate ? this.getUpdatedDate(JCdate) : ""

    return (
      <Context.Consumer>
        {value => {
          const {
            isDarkMode,
          } = value

          return (
            <VideoDetailsContainer
              isDarkMode={isDarkMode}
              data-testid="videoItemDetails"
            >
              <Header />
              <Content>
                <LeftPane />
                <RightPane>
                  {pageStatus === apiStatusConstants.success && (
                    <ContentContainer>
                          <Container>
                        <Dropdown>
                          <DropdownButton onClick={this.changeVehicleDetial}>
                            Vehicle Details
                            <Arrow open={vehicleDetailArrow}>▼</Arrow>
                          </DropdownButton>

                          <Menu open={vehicleDetailArrow}>
                            <MenuItem><MenuSpan>Vehicle Number :</MenuSpan>{vehicleNumber}</MenuItem>
                            <MenuItem><MenuSpan>Chassis Number :</MenuSpan>{chassisNumber}</MenuItem>
                            <MenuItem><MenuSpan>Engine Number :</MenuSpan>{engineNumber}</MenuItem>
                            <MenuItem><MenuSpan>Vehicle Model :</MenuSpan>{vehicleModel}</MenuItem>
                            <MenuItem><MenuSpan>Customer Name :</MenuSpan>{customerName}</MenuItem>
                            <MenuItem><MenuSpan>Job Card Number :</MenuSpan>{JCnumber}</MenuItem>
                            <MenuItem><MenuSpan>Job Card Date and Time :</MenuSpan>{updatedDate}</MenuItem>
                            <MenuItem><MenuSpan>Odo Reading :</MenuSpan>{`${kms} Kms`}</MenuItem>
                            <MenuItem><MenuSpan>Hrs Reading :</MenuSpan>{`${hrs} Hrs`}</MenuItem>
                            <MenuItem><MenuSpan>Date Of Sale :</MenuSpan>{dateOfSale}</MenuItem>
                            <MenuItem><MenuSpan>Driver Name :</MenuSpan>{driverName}</MenuItem>
                            <MenuItem><MenuSpan>Driver Number :</MenuSpan>{driverNumber}</MenuItem>

                          </Menu>
                        </Dropdown>
                      </Container>

                      <ComplaintsContainer>
                        <ComplaintsHeader>
                        <ComplaintsHeading>
                          Complaints
                        </ComplaintsHeading>
                        <AddComplaintButton onClick={this.addComplaint}>Add</AddComplaintButton>
                        </ComplaintsHeader>

                        {complaintPageStatus === apiStatusConstants.process && (
                    <LoaderContainer>
                      <div className="loader-container" data-testid="loader">
                        <Loader
                          type="ThreeDots"
                          color="#3b82f6"
                          height="50"
                          width="50"
                        />
                      </div>
                    </LoaderContainer>
                  )}

                  {complaintPageStatus === apiStatusConstants.failure && (
                    <ErrorCard clickedRetry={this.retry} />
                  )}

                        {complaintPageStatus === apiStatusConstants.success && 
                        (complaintsData.map(eachItem => (
                        <ComplaintDetails key={eachItem._id} vehicleId= {vehicleId} complaintId={eachItem._id} content={eachItem} />
                      )))
                      }

                      </ComplaintsContainer>

                      {isOpen && (
        <ModalOverlay onClick={() => {this.setIsOpen()}}>
          <ModalBox onClick={(e) => e.stopPropagation()}>
          <ContainerB>
      <FormWrapper onSubmit={this.handleAddComplaintSubmit}>
        <Heading>Add Complaint</Heading>

        <AddComplaintBox   id="description"
          name="complaint"
          rows="5"
          cols="40"
          placeholder="Enter Complaints here..." onChange = {this.handleComplaintChange}
          value = {complaint}>
       </AddComplaintBox>


        {showError && (<ShowErrorPara>**Please Enter Complaint</ShowErrorPara>)}

        
       {
       isAddComplaintAuthError && <AddVehicleAuthErrorPara>
        {addComplaintErrMsg}</AddVehicleAuthErrorPara>} 
      {
        isComplaintAdded && <VehicleAddedPara>{complaintAddedMsg}</VehicleAddedPara>
      }

        <Button type="submit">Submit</Button>
      </FormWrapper>
    </ContainerB>

            <button onClick={() => this.setIsOpen()}>
              Close
            </button>
          </ModalBox>
        </ModalOverlay>
      )}
                   </ContentContainer>
                  )}

                  {pageStatus === apiStatusConstants.process && (
                    <LoaderContainer>
                      <div className="loader-container" data-testid="loader">
                        <Loader
                          type="ThreeDots"
                          color="#3b82f6"
                          height="50"
                          width="50"
                        />
                      </div>
                    </LoaderContainer>
                  )}

                  {pageStatus === apiStatusConstants.failure && (
                    <ErrorCard clickedRetry={this.retry} />
                  )}
                </RightPane>
              </Content>
            </VideoDetailsContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default withRouter(VideoDetails)
