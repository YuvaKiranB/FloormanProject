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



    



   render(){
    const {content} = this.props
    const {_id, vehicleId, complaint} = content
    const {complaintDescription, complaintDetailArrow,} = this.state  
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
        <AddWorksButton>
          Add Works
        </AddWorksButton>
        </WorksHeader>
        </MenuItem>

        </Menu>
      </ComplaintDropDown>
    </ComplaintDropDownContainer>
    )
   }
}

export default withRouter(ComplaintDetails)
