import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {BsSearch} from 'react-icons/bs'
import Cookies from 'js-cookie'
import GetVideoCard from '../VideoCard'
import ErrorCard from '../../ErrorComponent'


import Context from '../../../Context'

import {
  MainContainer,
  SearchBar,
  SearchInput,
  SearchButton,
  CardsList,
  NoResultContainer,
  NoResultImage,
  NoResultPara1,
  NoResultPara2,
  RetryButton,
  LoaderContainer,
  TopContainer,
  AddVehicleButton,
  ModalOverlay,
  ModalBox,
  Container,
  FormWrapper,
  Heading,
  Input,
  Button,
  Field,
  Label,
  ShowErrorPara,
  AddVehicleAuthErrorPara,
  VehicleAddedPara,
  ContainerB,
  ToggleButton,
  Spacer,

} from './styling'




const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class ResultContainer extends Component {
  state = {searchInput: '', 
    cardsApiStatus: apiStatusConstants.initial, 
    isOpen: false, 
    vehicleNumber: "", 
    chassisNumber : "", 
    engineNumber: "", 
    vehicleModel: "", 
    customerName: "", 
    JCnumber: "", 
    JCdate: "", 
    kms : "", 
    hrs: "", 
    dateOfSale: "", 
    driverName: "", 
    driverNumber: "",
    showError: false,
    isAddVehicleAuthError: false,
    addVehicleErrMsg: "",
    isVehicleAdded : false,}



  componentDidMount() {
    this.getVehicles()

  }


  changeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  updateSearchInput = () => {
    this.getCards()
  }

  changeSearchInput2 = event => {
    if (event.key === 'Enter') {
      this.getCards()
    }
  }

  onSubmitFailure = (err) => {
    console.log(err)
    this.setState({isAddVehicleAuthError: true,
       addVehicleErrMsg : err,
       vehicleNumber: "", 
            chassisNumber : "", 
            engineNumber: "", 
            vehicleModel: "", 
            customerName: "", 
            JCnumber: "", 
            JCdate: "", 
            kms : "", 
            hrs: "", 
            dateOfSale: "", 
            driverName: "", 
            driverNumber: "",})
  }

  getVehicles = async () => {
    this.setState({
      cardsApiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state
    const apiUrl = `http://10.249.168.1:4000/vehiclesList?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.data

      this.setState({
        cardsList: updatedData,
        cardsApiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({cardsApiStatus: apiStatusConstants.failure})
    } 
  }

  renderNoResult = isDarkMode => (
    <NoResultContainer>
      <NoResultImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <NoResultPara1 isDarkMode={isDarkMode}>
        No Search results found
      </NoResultPara1>
      <NoResultPara2 isDarkMode={isDarkMode}>
        Try different key words or remove search filter
      </NoResultPara2>
      <RetryButton onClick={this.retry}>Retry</RetryButton>
    </NoResultContainer>
  )

  addVehicle = () => {
    const {isOpen} = this.state
    this.setState({isOpen: !isOpen, showError: false, isAddVehicleAuthError: false, isVehicleAdded: false})
  }

  setIsOpen = () => {
    this.setState({isOpen: false})
  }

  retry = () => {
    this.setState({searchInput: ''}, this.getCards)
  }


  handleChange = event => {
    const name = event.target.name
    const value = event.target.value  
    this.setState({[name] : value, showError: false})
  }



  handleSubmit = async event => {
    event.preventDefault();

    const {
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
       driverNumber} = this.state



    const userDetails = {
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
      driverNumber}

      if (vehicleNumber.length < 9 ){
         this.setState({showError: true})
      }else{

        const jwtToken = Cookies.get('jwt_token')


        const url = 'http://10.249.168.1:4000/addVehicle'

        const jsonUserDetails = JSON.stringify(userDetails)
        const options = {
          method: 'POST',
          headers: {'Content-Type': "application/json", Authorization: `Bearer ${jwtToken}`,}, 
          body: jsonUserDetails,
        }
    
    
        const response = await fetch(url, options)
        const data = await response.json()

        console.log(data.response)
        
        if (response.ok === true) {
          this.setState({
            vehicleNumber: "", 
            chassisNumber : "", 
            engineNumber: "", 
            vehicleModel: "", 
            customerName: "", 
            JCnumber: "", 
            JCdate: "", 
            kms : "", 
            hrs: "", 
            dateOfSale: "", 
            driverName: "", 
            driverNumber: "",
            isVehicleAdded: true,
            vehicleAddedMsg: data.response,
              })
    
        } else {
          this.onSubmitFailure(data.response)
        }
      }


    
  };



  render() {

    const {cardsApiStatus, 
      searchInput, 
      cardsList, 
      isOpen, 
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
      showError,
      isAddVehicleAuthError,
      addVehicleErrMsg,
      isVehicleAdded,
      vehicleAddedMsg,
    } = this.state



    return (
      <Context.Consumer>
        {value => {
          const {isDarkMode} = value


          return (
            <MainContainer isDarkMode={isDarkMode}>
              <TopContainer>
              <SearchBar>
                <SearchInput
                  type="search"
                  placeholder="Search"
                  value={searchInput}
                  onChange={this.changeSearchInput}
                  onKeyDown={this.changeSearchInput2}
                  isDarkMode={isDarkMode}
                />
                <SearchButton
                  isDarkMode={isDarkMode}
                  onClick={this.updateSearchInput}
                  type="button"
                  data-testid="searchButton"
                >
                  <BsSearch />
                </SearchButton>
              </SearchBar>
              <AddVehicleButton onClick={this.addVehicle}>
                 Add Vehicle
             </AddVehicleButton>
              
              </TopContainer>

              {isOpen && (
        <ModalOverlay onClick={() => {this.setIsOpen()}}>
          <ModalBox onClick={(e) => e.stopPropagation()}>
          <Container>
      <FormWrapper onSubmit={this.handleSubmit}>
        <Heading>Add Vehicle</Heading>

        <Field>
          <Label>Vehicle Number</Label>
          <Input name="vehicleNumber" value = {vehicleNumber} onChange={this.handleChange} />
        </Field>

        {showError && (<ShowErrorPara>**Please Enter Vehicle Number</ShowErrorPara>)}

        <Field>
          <Label>Chassis Number</Label>
          <Input name="chassisNumber" value = {chassisNumber} onChange={this.handleChange} />
        </Field>

        <Field>
          <Label>Engine Number</Label>
          <Input name="engineNumber" value = {engineNumber} onChange={this.handleChange} />
        </Field>

        <Field>
          <Label>Vehicle Model</Label>
          <Input name="vehicleModel" value = {vehicleModel} onChange={this.handleChange} />
        </Field>

        <Field>
          <Label>Customer Name</Label>
          <Input name="customerName" value = {customerName} onChange={this.handleChange} />
        </Field>

        <Field>
          <Label>JobCard Number</Label>
          <Input type="number" name="JCnumber" value = {JCnumber} onChange={this.handleChange} />
        </Field>

        <Field>
          <Label>JobCard Date & Time</Label>
          <Input type="datetime-local" name="JCdate" value = {JCdate} onChange={this.handleChange} />
        </Field>

        <Field>
          <Label>Odo Reading</Label>
          <Input type = "number" name="kms" value = {kms} onChange={this.handleChange} />
        </Field>

        <Field>
          <Label>Hours Reading</Label>
          <Input type = "number" name="hrs" value = {hrs} onChange={this.handleChange} />
        </Field>

        <Field>
          <Label>Date Of Sale</Label>
          <Input type = "date" name="dateOfSale" value = {dateOfSale} onChange={this.handleChange} />
        </Field>

        <Field>
          <Label>Driver Name</Label>
          <Input name="driverName" value = {driverName} onChange={this.handleChange} />
        </Field>

        <Field>
          <Label>Driver Number</Label>
          <Input type="tel" name="driverNumber" value = {driverNumber} onChange={this.handleChange} />
        </Field>

       {
       isAddVehicleAuthError && <AddVehicleAuthErrorPara>
        {addVehicleErrMsg}</AddVehicleAuthErrorPara>} 
      {
        isVehicleAdded && <VehicleAddedPara>{vehicleAddedMsg}</VehicleAddedPara>
      }

        <Button type="submit">Submit</Button>
      </FormWrapper>
    </Container>

            <button onClick={() => this.setIsOpen()}>
              Close
            </button>
          </ModalBox>
        </ModalOverlay>
      )}

              {cardsApiStatus === apiStatusConstants.success && (
                <CardsList>
                  <ToggleButton onClick={() => this.getVehicles()}>
                      Refresh
                    </ToggleButton>
                  {cardsList.length === 0
                    ? this.renderNoResult(isDarkMode)
                    : 
                    <ContainerB>

              
                    <Spacer />
              
                    {cardsList.map(eachItem => (
                        <GetVideoCard key={eachItem.id} content={eachItem} />
                      ))}
                  </ContainerB>
                    
                    }
                </CardsList>
              )}
              {cardsApiStatus === apiStatusConstants.inProgress && (
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

              {cardsApiStatus === apiStatusConstants.failure && (
                <ErrorCard clickedRetry={this.retry} />
              )}
            </MainContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default withRouter(ResultContainer)
