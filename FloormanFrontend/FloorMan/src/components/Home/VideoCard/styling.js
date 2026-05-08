import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: 450px;
    margin-right: 20px;
  }
`

export const DescriptionContainer = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: row;
`

export const Thumbnail = styled.img`
  width: 100%;
`

export const ProfileImageContainer = styled.div`
  padding: 10px;
`

export const ProfileImage = styled.img`
  height: 60px;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.p`
  font-family: roboto;
  color: ${props => (props.isDarkMode ? '#cbd5e1' : 'black')};
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const TagName = styled.p`
  margin: 0px;
  font-family: roboto;
  font-size: 16px;
  color: ${props => (props.isDarkMode ? '#64748b' : '#606060')};
`
export const DotContainer = styled.div`
  font-size: 25px;
  color: ${props => (props.isDarkMode ? '#64748b' : '#606060')};
  margin-left: 5px;
  margin-right: 5px;
  font-weight: 600;
  padding: 0px;
  margin-top: 2px;
`
export const Card = styled.div`
  position: relative;
  padding: 20px;
  border-radius: 10px;
  background: #1f2937;
  color: white;
  width: 320px;
`;

export const Heading = styled.h2`
  margin-bottom: 16px;
  font-size: 18px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Key = styled.span`
  opacity: 0.7;
`;

export const Value = styled.span`
  font-weight: 500;
`;

export const LoaderOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(31, 41, 55, 0.6); /* blur effect feel */
  border-radius: 10px;
`;

export const Content = styled.div`
  opacity: ${({ loading }) => (loading ? 0.3 : 1)};
`;
