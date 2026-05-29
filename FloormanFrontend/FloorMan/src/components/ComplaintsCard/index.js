import {Link, withRouter} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'

import WorksDetails from '../WorksComponent'

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
   state = {worksDescription : "", works: "",
            isOpen: false,
            showError: false,
            isAddWorkAuthError : false,
            isWorkAdded: false,
            workPageStatus: apiStatusConstants.initial, 
            worksData: [], 
            workAddedMsg : "",
            work: "",
            addWorkErrMsg : "",
            workDescription : "",
            workStatus : "",
            mechanic: "",
            helper: "",
            workId: ""
            
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
    this.getWorksData()

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
    const {workDescription, workStatus, mechanic, helper} = this.state



    const workDetails = {vehicleId, complaintId, workDescription,workStatus, mechanic, helper}

      if (workDescription.length < 3 ){
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
            workId : data._id,
            workDescription: "",
            isWorkAdded: true,
            workStatus : "UNASSIGNED",
            mechanic: "NA",
            helper: "NA",
            workAddedMsg: data.response,
              })

              this.getWorksData()
    
        } else {
          this.onSubmitFailure(data.response)
        }
      }


    
  };


  getWorksData = async () => {
    const {complaintId} = this.props
    console.log(complaintId)
    this.setState({workPageStatus: apiStatusConstants.process})
    const jwtToken = Cookies.get('jwt_token')
    const OurUrl = process.env.REACT_APP_OURURL
    const url = `${OurUrl}/works/${complaintId}`
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
    console.log(worksData)

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
      addWorkErrMsg,
      workDescription,
      workStatus,
      mechanic,
      helper,
      worksData,
      workPageStatus

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

        {workPageStatus === apiStatusConstants.success && 
                        (worksData.map(eachItem => (
                        <WorksDetails key={eachItem._id} vehicleId= {vehicleId} complaintId={eachItem._id} content={eachItem} />
                      )))
        }
        
         </Menu>
        {isOpen && (
        <ModalOverlay onClick={() => {this.setIsOpen()}}>
          <ModalBox onClick={(e) => e.stopPropagation()}>
          <ContainerB>
      <FormWrapper onSubmit={this.handleAddWorkSubmit}>
        <Heading>Add Work</Heading>
       <FormContainer>
  <Form>

  <>
      {/* Text Area */}
      <FieldContainer>
        <Label htmlFor="workDescription">
          Work Description
        </Label>

        <TextArea
          id="workDescription"
          placeholder="Enter work description..."
          value={workDescription}
          onChange={this.handleWorkChange}
          name="workDescription"
        />
      </FieldContainer>

      {/* Work Status */}
      <FieldContainer>
        <Label htmlFor="workStatus">
          Work Status
        </Label>

        <Select
          id="workStatus"
          value={workStatus}
          onChange={this.handleWorkChange}
          name="workStatus"
        >
          <option value="UNASSIGNED">Unassigned</option>
          <option value="ASSIGNED">Assigned</option>
          <option value="INPROGRESS">In Progress</option>
          <option value="PENDING">Pending</option>
          <option value="SPARESENTERED">Spares entered</option>
          <option value="READYFORBILLING">
            Ready For Billing
          </option>
        </Select>
      </FieldContainer>

      {/* Mechanic */}
      <FieldContainer>
        <Label htmlFor="mechanic">
          Mechanic
        </Label>

        <Select
          id="mechanic"
          value={mechanic}
          onChange={this.handleWorkChange}
          name="mechanic"
        >
          <option value="NA">NA</option>
          <option value="SURESH">Suresh</option>
          <option value="MAHESH">Mahesh</option>
          <option value="NARESH">Naresh</option>
          <option value="RAJESH">Rajesh</option>
          <option value="KIRAN">Kiran</option>
        </Select>
      </FieldContainer>

      {/* Helper */}
      <FieldContainer>
        <Label htmlFor="helper">
          Helper
        </Label>

        <Select
          id="helper"
          value={helper}
          onChange={this.handleWorkChange}
          name="helper"
        >
          <option value="NA">NA</option>
          <option value="HELPER2">Helper 2</option>
          <option value="HELPER3">Helper 3</option>
          <option value="HELPER4">Helper 4</option>
          <option value="HELPER5">Helper 5</option>
          <option value="HELPER6">Helper 6</option>
        </Select>
      </FieldContainer>

    </>


  </Form>
</FormContainer>




        {showError && (<ShowErrorPara>**Please Enter Work</ShowErrorPara>)}

        
       {
       isAddWorkAuthError && <AddVehicleAuthErrorPara>
        {addWorkErrMsg}</AddVehicleAuthErrorPara>} 
      {
        isWorkAdded && <VehicleAddedPara>{workAddedMsg}</VehicleAddedPara>
      }

        <Button type="submit" onClick={this.handleAddWorkSubmit}>Submit</Button>
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
