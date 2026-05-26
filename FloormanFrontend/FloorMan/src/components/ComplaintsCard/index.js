import {Link, withRouter} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'

import {
 ComplaintDropDownContainer,
 ComplaintDropDown,
 DropdownButton,
 Menu,
 Arrow,
 MenuItem,
 WorksHeading,
 AddWorksButton,
 WorksHeader,
 ModalOverlay,
 ModalBox,
 ContainerB,
 FormWrapper,
 Heading,
 AddWorkBox,
 ShowErrorPara,
 AddVehicleAuthErrorPara,
 VehicleAddedPara,
 Button,
 FormContainer,
 Field,
 Form,
 FieldContainer,
 Label,
 TextArea,
 Select,
 HeaderDiv,
 SparesHeading,
 
} from './styling'

const apiStatusConstants = {
  initial: 'INITIAL',
  process: 'PROCESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}



class ComplaintDetails extends Component {
   state = {complaintDescription : "", complaintDetailArrow : false, complaint: "",
            isOpen: false,
            showError: false,
            isAddWorkAuthError : false,
            isWorkAdded: false,
            workPageStatus: apiStatusConstants.initial, 
            worksData: [], 
            workAddedMsg : "",
            work: "",
            addWorkErrMsg : "",
            
   }


   componentDidMount(){

    this.getWorksData()

   }
  
  changeComplaintDetial = () => {
    this.setState((previousState) => ({complaintDetailArrow: !previousState.complaintDetailArrow}))
  }

  addWork = () => {
    const {isOpen} = this.state
    this.setState({isOpen: !isOpen, showError: false, isAddWorkAuthError: false, isWorkAdded: false})
  }

  setIsOpen = () => {
    this.setState({isOpen: false})
  }

    
  onSubmitFailure = errorMsg => {
    this.setState({
      isAddWorkAuthError: true,
      addWorkErrMsg: errorMsg,
    })
  }

  handleWorkChange = event => {
    const name = event.target.name
    const value = event.target.value  
    this.setState({[name] : value, showError: false})
  }


  handleAddWorkSubmit = async event => {
    event.preventDefault();

    const {vehicleId,complaintId} = this.props
    const {work} = this.state



    const workDetails = {vehicleId, work}

      if (work.length < 3 ){
         this.setState({showError: true})
      }else{

        const jwtToken = Cookies.get('jwt_token')

        const OurUrl = process.env.REACT_APP_OURURL


        const url = `${OurUrl}/addWork`

        const jsonUserDetails = JSON.stringify(workDetails)
        const options = {
          method: 'POST',
          headers: {'Content-Type': "application/json", Authorization: `Bearer ${jwtToken}`,}, 
          body: jsonUserDetails,
        }
    
    
       const response = await fetch(url, options)

       
        const data = await response.json()

        
        if (response.ok === true) {
          this.setState({
            work: "",
            isWorkAdded: true,
            workAddedMsg: data.response,
              })

              this.getWorksData()
    
        } else {
          this.onSubmitFailure(data.response)
        }
      }


    
  };


  getWorksData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({workPageStatus: apiStatusConstants.process})
    const jwtToken = Cookies.get('jwt_token')
    const OurUrl = process.env.REACT_APP_OURURL
    const url = `${OurUrl}/works/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    const works = await response.json()
    const worksData = works.data








    if (response.ok) {


      this.setState({
        worksData: [...worksData],
        workPageStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({workPageStatus: apiStatusConstants.failure})
    }
  }




   render(){
    const {content} = this.props
    const {_id, vehicleId, complaint} = content
    const {complaintDescription, complaintDetailArrow, isOpen, showError,
      isAddWorkAuthError,
      isWorkAdded,
      workAddedMsg,
      work,
      addWorkErrMsg

    } = this.state  
    return(
      <ComplaintDropDownContainer>
      <ComplaintDropDown>

        <DropdownButton onClick={this.changeComplaintDetial}>
          {complaint}
          <Arrow open={complaintDetailArrow}>▼</Arrow>
        </DropdownButton>

        <Menu open={complaintDetailArrow}>
        <MenuItem>
        <WorksHeader>
        <WorksHeading>
          Works
        </WorksHeading>
        <AddWorksButton  onClick={this.addWork} >
          Add Works
        </AddWorksButton>
        </WorksHeader>
        </MenuItem>
        
        </Menu>
        {isOpen && (
        <ModalOverlay onClick={() => {this.setIsOpen()}}>
          <ModalBox onClick={(e) => e.stopPropagation()}>
          <ContainerB>
      <FormWrapper onSubmit={this.handleAddWorkSubmit}>
        <Heading>Add Work</Heading>
       <FormContainer>
  <Form>

    {/* Text Area */}
    <FieldContainer>
      <Label htmlFor="workDescription">
        Work Description
      </Label>

      <TextArea
        id="workDescription"
        placeholder="Enter work description..."
      />
    </FieldContainer>

    {/* Work Status */}
    <FieldContainer>
      <Label htmlFor="workStatus">
        Work Status
      </Label>

      <Select id="workStatus">
        <option>Unassigned</option>
        <option>Assigned</option>
        <option>In Progress</option>
        <option>Pending</option>
        <option>Spares entered</option>
        <option>Ready For Billing</option>
      </Select>
    </FieldContainer>

    {/* Mechanic */}
    <FieldContainer>
      <Label htmlFor="mechanic">
        Mechanic
      </Label>

      <Select id="mechanic">
        <option>NA</option>
        <option>Suresh</option>
        <option>Mahesh</option>
        <option>Naresh</option>
        <option>Rajesh</option>
        <option>Kiran</option>
      </Select>
    </FieldContainer>

    {/* Helper */}
    <FieldContainer>
      <Label htmlFor="helper">
        Helper
      </Label>

      <Select id="helper">
        <option>NA</option>
        <option>Helper 2</option>
        <option>Helper 3</option>
        <option>Helper 4</option>
        <option>Helper 5</option>
        <option>Helper 6</option>
      </Select>
    </FieldContainer>

    {/* Spares Required Heading */}
    <HeaderDiv>
      <SparesHeading>
        Spares Required
      </SparesHeading>
    </HeaderDiv>

  </Form>
</FormContainer>




        {showError && (<ShowErrorPara>**Please Enter Work</ShowErrorPara>)}

        
       {
       isAddWorkAuthError && <AddVehicleAuthErrorPara>
        {addWorkErrMsg}</AddVehicleAuthErrorPara>} 
      {
        isWorkAdded && <VehicleAddedPara>{workAddedMsg}</VehicleAddedPara>
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
      </ComplaintDropDown>
    </ComplaintDropDownContainer>
    )
   }
}

export default withRouter(ComplaintDetails)
