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
  const {id, vehicleNumber, JCdate} = content

  return (
    <Context.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <Link to={`/videos/${id}`} className="link">
<CardContainer>
  <CardHeader>
    <CardTitle>{vehicleNumber}</CardTitle>
  </CardHeader>

  <CardBody>

      <DetailRow >
        <DetailKey>{"Date In"}</DetailKey>
        <DetailValue>{JCdate}</DetailValue>
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
