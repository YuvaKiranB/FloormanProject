import {Link, withRouter} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'
import { ButtonLoader } from "../../../ButtonLoader";

import {
  CardContainer,
  CardHeader,
  CardTitle,
  CardBody,
  DetailRow,
  DetailKey,
  DetailValue,

} from './styling'
import './index.css'

import Context from '../../../Context'

const GetVideoCard = props => {
  const {content, loading} = props
  console.log(content)
  const {_id, vehicleNumber, JCdate} = content
  console.log(_id)
  const d = new Date(JCdate)
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();

  let hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');

  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12;

  hours = String(hours).padStart(2, '0');

  const updatedDate =  `${day}-${month}-${year} ; ${hours}:${minutes} ${ampm}`;

  return (
    <Context.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <Link to={`/videos/${_id}`} className="link">
<CardContainer>
  <CardHeader>
    <CardTitle>{vehicleNumber}</CardTitle>
  </CardHeader>

  <CardBody>

      <DetailRow >
        <DetailKey>{"Date In"}</DetailKey>
        <DetailValue>{updatedDate}</DetailValue>
      </DetailRow>

      <DetailRow >
        <DetailKey>{"Current Status"}</DetailKey>
        <DetailValue>{"spare part pending: Arriving from the extra long engine of the issue then the option of the status"}</DetailValue>
      </DetailRow>

  </CardBody>
</CardContainer>



          </Link>
        )
      }}
    </Context.Consumer>
  )
}

export default withRouter(GetVideoCard)
