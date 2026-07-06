import {Link, withRouter} from 'react-router-dom'
import {Component} from 'react'
import ReactDOM from "react-dom";
import Cookies from 'js-cookie'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";



import {
    Container,
    Table,
    Td,
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








  class GetRots extends Component {


    state = { 
             
             
    }




  

 
    render(){
     
     const {content, workId, rotId} = this.props
     const {rotCode, rotDescription, hrs, percentage, actualRot} = content
     return(
        <>


        <tr>
            <Td>{rotCode}</Td>
            <Td>{rotDescription}</Td>
            <Td>{hrs}</Td>
            <Td>{percentage}</Td>  
            <Td>{actualRot}</Td>
            <Tdb><MdDelete /></Tdb>
          </tr>
      


      
      </>
       
     )
    }
 }
 
 export default withRouter(GetRots)
 















