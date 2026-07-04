import {Link, withRouter} from 'react-router-dom'
import {Component} from 'react'
import ReactDOM from "react-dom";
import Cookies from 'js-cookie'




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
    
    
  } from "./styling";


  const apiStatusConstants = {
    initial: 'INITIAL',
    process: 'PROCESS',
    success: 'SUCCESS',
    failure: 'FAILURE',
  }








  class WorksDetails extends Component {
    state = {workDescription : "", work: "", isOpen: false,
             showError: false,
             isAddWorkAuthError : false,
             isOpen: false,
             workAddedMsg : "",
             work: "",
             addWorkErrMsg : "",
             workDescription : "",
             workStatus : "",
             mechanic: "",
             helper: "",
             workId: "",
             ROT: [],
             
             
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

   // const {getWorks} = this.props

   // getWorks()

 
 
 
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
             ROT,
             
     } = this.state  
     return(

      <Container>
      <Table>
        <tbody>
          <tr>
            <TitleCell colSpan={3} rowSpan={2}>{workDescription}</TitleCell>
            <HeaderCell>Work Status</HeaderCell>
            <Td>{workStatus}</Td>
            <Tdb onClick={this.editWork}>edit</Tdb>
          </tr>

          <tr>
            <Td>Mech: {mechanic}</Td>
            <Td>Hel : {helper}</Td>
            <Tdb>delete</Tdb>
          </tr>

          <tr>
          <RemarksCell colSpan={3}> {workRemarks}</RemarksCell>
            <HeaderCell>Time on Work</HeaderCell>
            <Td>5 Hrs</Td>
            <Tdb>Add Rot</Tdb>
          </tr>

          <tr>
            <Td>PPS120</Td>
            <Td>Propeller shaft R&amp;R</Td>
            <Td>Actual: 3 hrs</Td>
            <Td>Percentage: 20%</Td>  
            <Td>ROT Hours : </Td>
          </tr>

        </tbody>
      </Table>



      {isOpen && 
       ReactDOM.createPortal(
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
    </Container> 
       
     )
    }
 }
 
 export default withRouter(WorksDetails)
 















