import {Link, withRouter} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'

import WorksDetails from '../WorksComponent'
import SparePartsList from '../SpareParts'

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
 SparesMenu,
 SparesHeader,
 SparesItem,
 AddSparesButton,
 SparePartNumberInput,
 SparePartDescription,
 SparePartQuantity,
 SparesSuggestionsContainer,
 SparesSuggitionsHeading,
 SparePartSuggestionContainer,
 PartNumberPara,
 PartDescriptionPara,
 PartMRPPara,
 Page,
 Container,
    Table,
    Td,
    HeaderCell,
    TitleCell,
    DescriptionHeader,
    DescriptionPara,
    RemarksSpan,
    RemarksCell,
 
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
            isSparesOpen: false,
            showError: false,
            showSparesError: false,
            isAddWorkAuthError : false,
            isAddSparesAuthError: false,
            isWorkAdded: false,
            isSparesAdded: false,
            workPageStatus: apiStatusConstants.initial, 
            sparesPageStatus: apiStatusConstants.initial, 
            worksData: [], 
            workAddedMsg : "",
            work: "",
            addWorkErrMsg : "",
            workDescription : "",
            workStatus : "",
            mechanic: "",
            helper: "",
            workId: "",
            ROT: [],
            sparePartNumber: "",
            sparePartDescription: "",
            sparePartQuantity: "",
            sparePartId: "",
            sparePartMRP: "",
            sparePartsSuggestions: [],
            sparesData: [],
            workRemarks: "",
            
   }


   componentDidMount(){

    this.getWorksData()
    this.getSparesData()

   }
  
  changeComplaintDetial = () => {
    this.setState((previousState) => ({complaintDetailArrow: !previousState.complaintDetailArrow}))
  }

  addWork = () => {
    const {isOpen} = this.state
    this.setState({isOpen: !isOpen, showError: false, isAddWorkAuthError: false, isWorkAdded: false})
  }

  addSpares = () => {
    const {isSparesOpen} = this.state
    this.setState({isSparesOpen: !isSparesOpen, showSparesError: false, isAddSparesAuthError: false, isSparesAdded: false})
  }

  setIsOpen = () => {
    this.setState({isOpen: false})
    this.getWorksData()

  }

  setIsSparesOpen = () => {
    this.setState({isSparesOpen: false})
    this.getWorksData()

  }

    
  onSubmitFailure = errorMsg => {
    this.setState({
      isAddWorkAuthError: true,
      addWorkErrMsg: errorMsg,
    })
  }

  onSubmitSparesFailure = errorMsg => {
    this.setState({
      isAddSparesAuthError: true,
      addSparesErrMsg: errorMsg,
    })
  }

  addROT = id => {
    this.addROTPutCall(id)
    this.getWorksData()
  }

  handleSparesChange = event => {
    const name = event.target.name
    const value = event.target.value  
    this.setState(
      {
        [name]: value,
        showSparesError: false,
      },
      () => {
        if (value.length >= 3) {
          this.getSparePartsSuggestions()
        }
      }
    )
  }

  handleSpareInput = eachItem => {
    console.log(eachItem)
    this.setState({sparePartNumber: eachItem.partNumber, sparePartDescription: eachItem.partDescription, sparePartMRP: eachItem.MRP})
  }


    addROTPutCall = async id => {

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


  handleAddSparesSubmit = async event => {
    event.preventDefault();

    const {vehicleId,complaintId} = this.props
    const {sparePartNumber, sparePartDescription, sparePartMRP, sparePartQuantity} = this.state



    const spareDetails = {vehicleId, complaintId, sparePartNumber, sparePartDescription, sparePartMRP, sparePartQuantity}

      if (sparePartNumber.length < 8 ){
         this.setState({showError: true})
      }else{

        const jwtToken = Cookies.get('jwt_token')

        const OurUrl = process.env.REACT_APP_OURURL


        const url = `${OurUrl}/addSpares`

        const jsonUserDetails = JSON.stringify(spareDetails)
        const options = {
          method: 'POST',
          headers: {'Content-Type': "application/json", Authorization: `Bearer ${jwtToken}`,}, 
          body: jsonUserDetails,
        }
    
    
       const response = await fetch(url, options)

       
        const data = await response.json()

        
        if (response.ok === true) {
          this.setState({
            spareId : data._id,
            sparePartDescription: "",
            sparePartMRP: "",
            sparePartNumber: "",
            sparePartQuantity: "",
            isSparesAdded: true,
            sparesAddedMsg: data.response,
              })

              this.getSparesData()
    
        } else {
          this.onSubmitFailure(data.response)
        }
      }


    
  };


  handleAddWorkSubmit = async event => {
    event.preventDefault();

    const {vehicleId,complaintId} = this.props
    const {workDescription, workStatus, mechanic, helper, workRemarks} = this.state



    const workDetails = {vehicleId, complaintId, workDescription,workStatus, mechanic, helper, workRemarks}

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
            workRemarks : ""
              })

              this.getWorksData()

        } else {
          this.onSubmitFailure(data.response)
        }
      }



  };

  handleWorkChange = event => {
    const name = event.target.name
    const value = event.target.value  
    this.setState(
      {
        [name]: value,
        showError: false,
      },
      () => {
        if (value.length >= 3) {
          
        }
      }
    )
  }
 


  getWorksData = async () => {
    const {complaintId} = this.props
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

      this.setState({
        worksData: [...worksData],
        workPageStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({workPageStatus: apiStatusConstants.failure})
    }
  }


  getSparesData = async () => {
    const {complaintId} = this.props
    this.setState({sparesPageStatus: apiStatusConstants.process})
    const jwtToken = Cookies.get('jwt_token')
    const OurUrl = process.env.REACT_APP_OURURL
    const url = `${OurUrl}/spares/${complaintId}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    const spares = await response.json()
    const sparesData = spares.data
    


    if (response.ok) {

      this.setState({
        sparesData: [...sparesData],
        sparesPageStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({sparesPageStatus: apiStatusConstants.failure})
    }
  }




  getSparePartsSuggestions = async () => {
    const {sparePartNumber, sparePartDescription} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const OurUrl = process.env.REACT_APP_OURURL
    const url = `${OurUrl}/sparePartsSuggestions?partNumber=${sparePartNumber}&partDescription=${sparePartDescription}`
    console.log(url)
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    const spares = await response.json()
    const sparesData = spares.data

    console.log(sparesData)
    







    if (response.ok) {

      this.setState({
        sparePartsSuggestions: [...sparesData],
      })

      console.log(sparesData)
    } else {
     console.log("error")
    }
  }






   render(){
    const {content} = this.props
    const {_id, vehicleId, complaint} = content
    const complaintId = _id
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
      workPageStatus,
      isSparesOpen,
      showSparesError,
      isAddSparesAuthError,
      isSparesAdded,
      sparesAddedMsg,
      addSparesErrMsg,
      sparePartNumber,
      sparePartDescription,
      sparePartQuantity,
      sparePartsSuggestions,
      sparesData,
      sparesPageStatus,
      workRemarks

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
                        <WorksDetails key={eachItem._id} vehicleId= {vehicleId} workId={eachItem._id} complaintId={complaintId} content={eachItem} getWorks={this.getWorksData}/>
                      )))
        }
        
         </Menu>


         <SparesMenu open={complaintDetailArrow}>
        <SparesItem>
        <SparesHeader>
        <SparesHeading>
          Spares Required
        </SparesHeading>
        <AddSparesButton  onClick={this.addSpares} >
          Add Spares
        </AddSparesButton>
        </SparesHeader>
        </SparesItem>

        <Container>
      <Table>
        <tbody>

          <tr>
            <Td>Part Number</Td>
            <Td>Part Description</Td>
            <Td>Quantity</Td>
            <Td>MRP</Td>
            <Td>Part Status</Td>
            <Td>Remarks</Td>
          </tr>




        {sparesPageStatus === apiStatusConstants.success && 
                        (sparesData.map(eachItem => (
                        <SparePartsList key={eachItem._id} vehicleId= {vehicleId} complaintId={eachItem._id} content={eachItem} />
                      )))
        }

</tbody>

</Table>
</Container> 
        
         </SparesMenu>
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

      <FieldContainer>
        <Label htmlFor="workDescription">
          Remarks
        </Label>

        <TextArea
          id="workRemarks"
          placeholder="Enter work Remarks..."
          value={workRemarks}
          onChange={this.handleWorkChange}
          name="workRemarks"
        />
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



{isSparesOpen && (
        <ModalOverlay onClick={() => {this.setIsSparesOpen()}}>
          <ModalBox onClick={(e) => e.stopPropagation()}>
          <ContainerB>
      <FormWrapper onSubmit={this.handleAddSparesSubmit}>
        <Heading>Add Spares</Heading>
       <FormContainer>
  <Form>

  <>
      <FieldContainer>
        <Label htmlFor="sparePartNumber">
          Spare Part Number
        </Label>

        <SparePartNumberInput
          id="sparePartNumber"
          placeholder="Enter Atleast 3 char..."
          value={sparePartNumber}
          onChange={this.handleSparesChange}
          name="sparePartNumber"
        />
      </FieldContainer>

      <FieldContainer>
        <Label htmlFor="sparePartDescription">
          Spare Part Description
        </Label>

        <SparePartDescription
          id="sparePartDescription"
          placeholder="Enter Atleast 3 char..."
          value={sparePartDescription}
          onChange={this.handleSparesChange}
          name="sparePartDescription"
        />
      </FieldContainer>

      <FieldContainer>
        <Label htmlFor="sparePartQuantity">
          Spare Part Quantity
        </Label>

        <SparePartQuantity
          id="sparePartQuantity"
          placeholder="Enter quantity..."
          value={sparePartQuantity}
          onChange={this.handleSparesChange}
          name="sparePartQuantity"
        />
      </FieldContainer>

      
    </>


  </Form>
</FormContainer>




        {showSparesError && (<ShowErrorPara>**Please Enter Spares</ShowErrorPara>)}

        
       {
       isAddSparesAuthError && <AddVehicleAuthErrorPara>
        {addSparesErrMsg}</AddVehicleAuthErrorPara>} 
      {
        isSparesAdded && <VehicleAddedPara>{sparesAddedMsg}</VehicleAddedPara>
      }

        <Button type="submit" onClick={this.handleAddSparesSubmit}>Submit</Button>
      </FormWrapper>

      <SparesSuggitionsHeading>Suggestions</SparesSuggitionsHeading>

      <SparesSuggestionsContainer>

        {(sparePartsSuggestions.map(eachItem => (
                        <SparePartSuggestionContainer onClick={() => this.handleSpareInput(eachItem)}>
                          <PartNumberPara>{eachItem.partNumber}</PartNumberPara>
                          <PartDescriptionPara>{eachItem.partDescription}</PartDescriptionPara>
                          <PartMRPPara>{eachItem.MRP}</PartMRPPara>

                        </SparePartSuggestionContainer>
                      ))) 
        }
 
      </SparesSuggestionsContainer>
    </ContainerB>

            <button onClick={() => this.setIsSparesOpen()}>
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
