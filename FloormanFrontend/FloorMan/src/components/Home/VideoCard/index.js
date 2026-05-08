import {Link, withRouter} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'
import { ButtonLoader } from "../../../ButtonLoader";

import {
  CardContainer,
  DescriptionContainer,
  Thumbnail,
  ProfileImageContainer,
  ProfileImage,
  TextContainer,
  Title,
  TagsContainer,
  TagName,
  DotContainer,
  Card,
  Heading,
  Row,
  Key,
  Value,
  LoaderOverlay,
  Content,

} from './styling'
import './index.css'

import Context from '../../../Context'

const GetVideoCard = props => {
  const {content, loading} = props
  const {id, title} = content

  return (
    <Context.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <Link to={`/videos/${id}`} className="link">
         <Card>
      <Content loading={loading}>
        <Heading>{title}</Heading>

        {Object.entries(content).map(([key, value]) => (
          <Row key={key}>
            <Key>{key}</Key>
            <Value>{value}</Value>
          </Row>
        ))}
      </Content>

      {loading && (
        <LoaderOverlay>
          <ButtonLoader />
        </LoaderOverlay>
      )}
    </Card>
          </Link>
        )
      }}
    </Context.Consumer>
  )
}

export default withRouter(GetVideoCard)
