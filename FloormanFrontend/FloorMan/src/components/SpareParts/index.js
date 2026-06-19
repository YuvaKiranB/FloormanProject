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
    DescriptionHeader,
    DescriptionPara,
    RemarksSpan,
    RemarksCell,
    
    
  } from "./styling";








  class SparePartsList extends Component {
    state = { }



 
 
 
    render(){
     const {content} = this.props
     const {_id, vehicleId, complaintId, partNumber, partDescription, MRP, quantity, sparePartStatus, sparePartRemarks} = content
     const {} = this.state  
     return(

        <tr>
        <Td>{partNumber}</Td>
        <Td>{partDescription}</Td>
        <Td>{quantity}</Td>
        <Td>{MRP}</Td>
        <Td>{sparePartStatus}</Td>
        <Td>{sparePartRemarks}</Td>
      </tr>

       
     )
    }
 }
 
 export default withRouter(SparePartsList)
 















