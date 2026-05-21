import {Link, withRouter} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'

import {
 ComplaintDropDownContainer,
 ComplaintDropDown,
 DropdownButton,
 Menu,
 Arrow,
 MenuItem
} from './styling'

import Context from '../../Context'


class ComplaintDetails extends Component {
   state = {complaintDescription : "", complaintDetailArrow : false, complaint: ""}

   componentDidMount(){

   }
  
  changeComplaintDetial = () => {
    console.log("complaint detail change initiated")
    this.setState((previousState) => ({complaintDetailArrow: !previousState.complaintDetailArrow}))
  }


   getWorksData = async () => {
    const {content} = this.props
    console.log(content)
    const {_id, vehicleId, complaint} = content
    this.setState({complaint: complaint})
    console.log(complaint)
    

   }

   render(){
    const {complaintDescription, complaintDetailArrow, complaint} = this.state
    return(
      <ComplaintDropDownContainer>
      <ComplaintDropDown>

        <DropdownButton onClick={this.changeComplaintDetial}>
          {complaintDescription}
          <Arrow open={complaintDetailArrow}>▼</Arrow>
        </DropdownButton>

        <Menu open={complaintDetailArrow}>
        <MenuItem>{complaint}</MenuItem>

        </Menu>
      </ComplaintDropDown>
    </ComplaintDropDownContainer>
    )
   }
}

export default withRouter(ComplaintDetails)
