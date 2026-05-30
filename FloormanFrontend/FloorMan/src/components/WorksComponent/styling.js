import styled from "styled-components";


export const Container = styled.div`
  padding: 16px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
`;

export const Td = styled.td`
  border: 1px solid #dcdcdc;
  padding: 10px;
  vertical-align: middle;
`;

export const HeaderCell = styled(Td)`
  font-weight: 600;
`;

export const TitleCell = styled(Td)`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;


export const SparesHeader = styled.div`
display: flex;
flex-direction: row;
justify-content:center;
align-items: center;`

export const SparesRequiredHeading = styled.h1`
font-size: 18px;
margin: 0px;
padding: 0px;`