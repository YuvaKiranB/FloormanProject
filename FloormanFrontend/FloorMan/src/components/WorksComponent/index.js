import {Link, withRouter} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'




import {
    Page,
    Container,
    Table,
    Td,
    HeaderCell,
    TitleCell,
    SparesHeader,
    SparesRequiredHeading,
    
    
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

      <Container>
      <Table>
        <tbody>
          <tr>
            <TitleCell colSpan={3} rowSpan={2}>{workDescription}</TitleCell>
            <HeaderCell>Work Status</HeaderCell>
            <Td>{workStatus}</Td>
          </tr>

          <tr>
            <Td>Mech: {mechanic}</Td>
            <Td>Hel : {helper}</Td>
          </tr>

          <tr>
            <Td>BRF300</Td>
            <Td>Brakes Adjustment</Td>
            <Td>Actual: 5 hrs</Td>
            <HeaderCell>Time on Work</HeaderCell>
            <Td>5 Hrs</Td>
          </tr>

          <tr>
            <Td>PPS120</Td>
            <Td>Propeller shaft R&amp;R</Td>
            <Td>Actual: 3 hrs</Td>
          </tr>

          <tr>
            <Td colSpan={5}>
              <SparesHeader>
              <SparesRequiredHeading>Spares Reqired</SparesRequiredHeading>
              </SparesHeader>
              </Td>
          </tr>
        </tbody>
      </Table>
    </Container>
       
     )
    }
 }
 
 export default withRouter(WorksDetails)
 















