import {Link, withRouter} from 'react-router-dom'
import {Component} from 'react'
import ReactDOM from "react-dom";
import Cookies from 'js-cookie'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import GetRots from '../GetRots';



import {
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
    Tdb,
    ModalOverlay,
    ModalBox,
    ContainerB,
    FormWrapper,
    Heading,
    FormContainer,
    Field,
    Form,
    FieldContainer,
    Label,
    TextArea,
    Select,
    Button,
    ShowErrorPara,


    SparePartNumberInput,
    SparePartDescription,
    SparePartQuantity,
    SparesSuggestionsContainer,
    SparesSuggitionsHeading,
    SparePartSuggestionContainer,
    PartNumberPara,
    PartDescriptionPara,
    PartMRPPara,
    
    TdA,
    
  } from "./styling";


  const apiStatusConstants = {
    initial: 'INITIAL',
    process: 'PROCESS',
    success: 'SUCCESS',
    failure: 'FAILURE',
  }








  class WorksDetails extends Component {


    state = { work: "", isOpen: false,
             showError: false,
             isAddWorkAuthError : false,
             workAddedMsg : "",
             addWorkErrMsg : "",
             workId: "",

            workDescription: this.props.content.workDescription,
            workStatus: this.props.content.workStatus,
            mechanic: this.props.content.mechanic,
            helper: this.props.content.helper,
            workRemarks: this.props.content.workRemarks,

            isRotsOpen : false,
            showRotsError: false,
            isAddRotsAuthError: false,
            isRotsAdded: false,

            rotCode: "",
            rotDescription: "",
            hrs: 0,
            percentage: 0,
            actualHours: 0,

            rotSuggestions:[],
            rotPageStatus: apiStatusConstants.initial,
            rotsData: [],
             


             
             
    }



    componentDidMount(){

      this.getROTData()
  
     }




    editWork = () => {

      const {content, getWork} = this.props
      const {_id, vehicleId, complaintId, workDescription, workStatus, mechanic, helper, workRemarks} = content
  
        const {isOpen} = this.state
        this.setState({isOpen: !isOpen, showError: false, isAddWorkAuthError: false, workDescription : workDescription, workStatus, mechanic, helper, workRemarks,})

    }

    setIsOpen = () => {
      this.setState({isOpen: false})
  
    }

    handleWorkChange = event => {
      console.log("workchange")
      const name = event.target.name
      const value = event.target.value  
      console.log(name, value)
      this.setState(
        {
          [name]: value,
          showError: false,
        }
      )


      console.log(name, value)
    }


    handleEditWorkSubmit = async event => {
      event.preventDefault();
  
      const {content} = this.props
      const {_id} = content
      const {workDescription, workStatus, mechanic, helper, workRemarks} = this.state
  
  
  
      const workDetails = {workDescription,workStatus, mechanic, helper, workRemarks, _id}
  
        if (workDescription.length < 3 ){
           this.setState({showError: true})
        }else{
          const jwtToken = Cookies.get('jwt_token')
          const OurUrl = process.env.REACT_APP_OURURL
  
  
          const url = `${OurUrl}/editWork`
  
          const jsonUserDetails = JSON.stringify(workDetails)
          const options = {
            method: 'PUT',
            headers: {'Content-Type': "application/json", Authorization: `Bearer ${jwtToken}`,}, 
            body: jsonUserDetails,
          }
  
  
         const response = await fetch(url, options)
  
  
          const data = await response.json()
  
  
          if (response.ok === true) {
           const {getWork} = this.props


            this.setState({
              isOpen: false,
          });
  
          } else {
            this.onSubmitFailure(data.response)
          }
        }
  
  
  
    };

    addRots = () => {
      const {isRotsOpen} = this.state
      this.setState({isRotsOpen: !isRotsOpen, showRotsError: false, isAddRotsAuthError: false, isRotsAdded: false})
    }

    setIsRotsOpen = () => {
      this.setState({isRotsOpen: false})
    }
  
  
  

    handleAddRotsSubmit = async event => {
      event.preventDefault();
  
      const {vehicleId,complaintId, workId} = this.props
      const {rotCode, rotDescription, hrs, percentage} = this.state

  
  
  
      const rotDetails = {vehicleId, complaintId, workId, rotCode, rotDescription, hrs, percentage}
  
        if (rotCode.length < 6 ){
           this.setState({showRotsError: true})
        }else{
  
          const jwtToken = Cookies.get('jwt_token')
  
          const OurUrl = process.env.REACT_APP_OURURL
  
  
          const url = `${OurUrl}/addRot`
  
          const jsonUserDetails = JSON.stringify(rotDetails)
          const options = {
            method: 'POST',
            headers: {'Content-Type': "application/json", Authorization: `Bearer ${jwtToken}`,}, 
            body: jsonUserDetails,
          }
      
      
         const response = await fetch(url, options)
  
         
          const data = await response.json()
  
          
          if (response.ok === true) {
            this.setState({
              rotId : data._id,
              rotCode: "",
              rotDescription: "",
              hrs: 0,
              percentage: 0,
              actualHours: 0,
              rotsAddedMsg: data.response,
                })
  
                this.getROTData()
      
          } else {
            this.onSubmitFailure(data.response)
          }
        }
  
  
      
    };


    getROTData = async () => {
      const {workId} = this.props
      this.setState({rotPageStatus: apiStatusConstants.process})
      const jwtToken = Cookies.get('jwt_token')
      const OurUrl = process.env.REACT_APP_OURURL
      const url = `${OurUrl}/rots/${workId}`
      const options = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        method: 'GET',
      }
  
      const response = await fetch(url, options)
      const rots = await response.json()
      const rotsData = rots.data
      console.log(rotsData)
      
  
  
      if (response.ok) {
  
        this.setState({
          rotsData: [...rotsData],
          rotPageStatus: apiStatusConstants.success,
        })
      } else {
        this.setState({rotPageStatus: apiStatusConstants.failure})
      }
    }
  
  





    handleROTChange = event => {
      const name = event.target.name
      const value = event.target.value  
      this.setState(
        {
          [name]: value,
          showRotsError: false,
        },
        () => {
          if (value.length >= 3) {
            console.log("triggered")
            this.getROTSuggestions()
          }
        }
      )
    }

    getROTSuggestions = async () => {
      const {rotCode, rotDescription} = this.state
      const jwtToken = Cookies.get('jwt_token')
      const OurUrl = process.env.REACT_APP_OURURL
      const url = `${OurUrl}/rotSuggestions?rotCode=${rotCode}&rotDescription=${rotDescription}`
      const options = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        method: 'GET',
      }
  
      const response = await fetch(url, options)
      const rots = await response.json()
      const rotsData = rots.data
  
      
  
  
  
  
  
  
  
      if (response.ok) {
  
        this.setState({
          rotSuggestions: [...rotsData],
        })
  
      } else {
       console.log("error")
      }
    }

    handleROTInput = eachItem => {
      this.setState({rotCode: eachItem.labour, rotDescription: eachItem.labourDescription, hrs: eachItem.hours})
    }
  

 
 
 
    render(){
     
     const {isOpen, showError, isAddWorkAuthError,
             workAddedMsg,
             work,
             addWorkErrMsg,
             workDescription,
             workStatus,
             mechanic,
             helper,
             workId,
             workRemarks,
             isRotsOpen,
             isRotsAdded,
             rotSuggestions,
             rotCode,
             rotDescription,
             hrs,
             percentage,
             actualHours,
             showRotsError,
             isAddRotsAuthError,
             rotsData,
             rotPageStatus,
     } = this.state  

     const {vehicleId, complaintId} = this.props

     return(

      <Container>
      <Table>
        <tbody>
          <tr>
            <TitleCell colSpan={3} rowSpan={2}>{workDescription}</TitleCell>
            <HeaderCell>Work Status</HeaderCell>
            <Td>{workStatus}</Td>
            <Tdb onClick={this.editWork}><MdEdit /></Tdb>
          </tr>

          <tr>
            <Td>Mech: {mechanic}</Td>
            <Td>Hel : {helper}</Td>
            <Tdb><MdDelete /></Tdb>
          </tr>

          <tr>
          <RemarksCell colSpan={3}> {workRemarks}</RemarksCell>
            <HeaderCell>Time on Work</HeaderCell>
            <Td>5 Hrs</Td>
            <Tdb onClick={this.addRots}><IoMdAddCircle /></Tdb>
          </tr>

          <tr>
            <TdA>ROT Code</TdA>
            <TdA>Description</TdA>
            <TdA>Actual Hours</TdA>
            <TdA>Percentage</TdA>  
            <TdA>Total ROT</TdA>
            <Tdb><MdDelete /></Tdb>
          </tr>
        
          {rotPageStatus === apiStatusConstants.success && 
                        (rotsData.map(eachItem => (
                        <GetRots key={eachItem._id} vehicleId= {vehicleId} complaintId={complaintId} workId={eachItem.workId} rotId={eachItem._id} content={eachItem} />
                      )))
        }





        </tbody>
      </Table>



      {isOpen && 
       ReactDOM.createPortal(
        <ModalOverlay onClick={() => {this.setIsOpen()}}>
          <ModalBox onClick={(e) => e.stopPropagation()}>
          <ContainerB>
      <FormWrapper onSubmit={this.handleEditWorkSubmit}>
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


        <Button type="submit" onClick={this.handleEditWorkSubmit}>Submit</Button>
      </FormWrapper>
    </ContainerB>

            <button onClick={() => this.setIsOpen()}>
              Close
            </button>
          </ModalBox>
        </ModalOverlay>, 
        document.body
      )}

{isRotsOpen && 
       ReactDOM.createPortal(

        <ModalOverlay onClick={() => {this.setIsRotsOpen()}}>
          <ModalBox onClick={(e) => e.stopPropagation()}>
          <ContainerB>
      <FormWrapper onSubmit={this.handleAddRotsSubmit}>
        <Heading>Add ROT</Heading>
       <FormContainer>
  <Form>

  <>
      <FieldContainer>
        <Label htmlFor="rotCode">
          ROT Code
        </Label>

        <SparePartNumberInput
          id="rotCode"
          placeholder="Enter Atleast 3 char..."
          value={rotCode}
          onChange={this.handleROTChange}
          name="rotCode"
        />
      </FieldContainer>

      <FieldContainer>
        <Label htmlFor="rotDescription">
          ROT Description
        </Label>

        <SparePartDescription
          id="rotDescription"
          placeholder="Enter Atleast 3 char..."
          value={rotDescription}
          onChange={this.handleROTChange}
          name="rotDescription"
        />
      </FieldContainer>

      <FieldContainer>
        <Label htmlFor="hrs">
          Hrs
        </Label>

        <SparePartQuantity
          id="hrs"
          placeholder="hrs..."
          value={hrs}
          onChange={this.handleROTChange}
          name="hrs"
        />
      </FieldContainer>

      
    </>


  </Form>
</FormContainer>




        {showRotsError && (<ShowErrorPara>**Please Enter Spares</ShowErrorPara>)}

        
       {
       isAddRotsAuthError && <AddVehicleAuthErrorPara>
        {"test"}</AddVehicleAuthErrorPara>} 
      {
        isRotsAdded && <VehicleAddedPara>{sparesAddedMsg}</VehicleAddedPara>
      }

        <Button type="submit" onClick={this.handleAddSparesSubmit}>Submit</Button>
      </FormWrapper>

      <SparesSuggitionsHeading>Suggestions</SparesSuggitionsHeading>

      <SparesSuggestionsContainer>

        {(rotSuggestions.map(eachItem => (
                        <SparePartSuggestionContainer onClick={() => this.handleROTInput(eachItem)}>
                          <PartNumberPara>{eachItem.labour}</PartNumberPara>
                          <PartDescriptionPara>{eachItem.labourDescription}</PartDescriptionPara>
                          <PartMRPPara>{eachItem.hours}</PartMRPPara>

                        </SparePartSuggestionContainer>
                      ))) 
        }
 
      </SparesSuggestionsContainer>
    </ContainerB>

            <button onClick={() => this.setIsRotsOpen()}>
              Close
            </button>
          </ModalBox>
        </ModalOverlay>, 
        document.body
      )}
    </Container> 
       
     )
    }
 }
 
 export default withRouter(WorksDetails)
 















