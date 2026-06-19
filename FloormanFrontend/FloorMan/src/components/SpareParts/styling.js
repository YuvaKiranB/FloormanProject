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


export const DescriptionHeader = styled.div`
display: flex;
flex-direction: row;
justify-content:start;
align-items: center;`

export const DescriptionPara = styled.p`
font-size: 18px;
margin: 0px;
padding: 0px;`

export const RemarksSpan = styled.p`
font-size: 18px;
font-weight: normal;`

export const RemarksCell = styled(Td)`
  font-size: 14px;

`;