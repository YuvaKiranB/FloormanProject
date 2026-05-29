import {Link, withRouter} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'




import {
    Page,
    Container,
    Card,
    Header,
    Title,
    Subtitle,
    ButtonGroup,
    ActionButton,
    TableWrapper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    Status,
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
             isSparesAdded: false,
             sparesPageStatus: apiStatusConstants.initial, 
             sparesData: [], 
             sparesAddedMsg : "",
             spares: "",
             addSparesErrMsg : "",
             
    }


 
 
    componentDidMount(){
 
     this.getSparesData()
 
    }
   
 
   addSpares = () => {
     const {isOpen} = this.state
     this.setState({isOpen: !isOpen, showError: false, isAddSparesAuthError: false, isSparesAdded: false})
   }
 
   setIsOpen = () => {
     this.setState({isOpen: false})
   }
 
     
   onSubmitFailure = errorMsg => {
     this.setState({
       isAddSparesAuthError: true,
       addSparesErrMsg: errorMsg,
     })
   }
 
   handleSparesChange = event => {
     const name = event.target.name
     const value = event.target.value  
     this.setState({[name] : value, showError: false})
   }
 
 
   handleAddSparesSubmit = async event => {
     event.preventDefault();
 
     const {vehicleId,complaintId} = this.props
     const {spares} = this.state
 
 
 
     const sparesDetails = {vehicleId, spares}
 
       if (spares.length < 3 ){
          this.setState({showError: true})
       }else{
 
         const jwtToken = Cookies.get('jwt_token')
 
         const OurUrl = process.env.REACT_APP_OURURL
 
 
         const url = `${OurUrl}/addSpares`
 
         const jsonUserDetails = JSON.stringify(sparesDetails)
         const options = {
           method: 'POST',
           headers: {'Content-Type': "application/json", Authorization: `Bearer ${jwtToken}`,}, 
           body: jsonUserDetails,
         }
     
     
        const response = await fetch(url, options)
 
        
         const data = await response.json()
 
         
         if (response.ok === true) {
           this.setState({
             spares: "",
             isSparesAdded: true,
             sparesAddedMsg: data.response,
               })
 
               this.getSparesData()
     
         } else {
           this.onSubmitFailure(data.response)
         }
       }
 
 
     
   };
 
 
   getSparesData = async () => {
     const {match} = this.props
     const {params} = match
     const {id} = params
     this.setState({sparesPageStatus: apiStatusConstants.process})
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
 
 
 
 
    render(){
     const {content} = this.props
     const {_id, vehicleId, complaintId, workDescription, workStatus, mechanic, helper} = content
     const {} = this.state  
     return(

      <Page>
  <Container>
    <Card>
      <Header>
        <div>
          <Title>WORKFLOW MATRIX</Title>
          <Subtitle>Industrial Work Monitoring System</Subtitle>
        </div>

        <ButtonGroup>
          <ActionButton>Add Task</ActionButton>
          <ActionButton>Export</ActionButton>
        </ButtonGroup>
      </Header>

      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <TableHead>Code</TableHead>
              <TableHead>Task</TableHead>
              <TableHead>Hours</TableHead>
              <TableHead>Mechanic</TableHead>
              <TableHead>Helper</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Status</TableHead>
            </tr>
          </thead>

          <tbody>
            <h1>{workDescription}</h1>
          </tbody>
        </Table>
      </TableWrapper>
    </Card>
  </Container>
</Page>
       
     )
    }
 }
 
 export default withRouter(WorksDetails)
 















