import styled from 'styled-components'


export const CardContainer = styled.div`
  width: 320px;
  background: linear-gradient(145deg, #00a2ed, #0078d7);
  border-radius: 22px;
  padding: 22px;
  color: white;

  box-shadow:
    0 12px 25px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px) scale(1.02);
  }

    @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 20px;
    width: 45vw;
    margin: 5px;
  }

  margin: 5px;
`

export const CardHeader = styled.div`
  margin-bottom: 18px;
  border-bottom: 1px solid rgba(255,255,255,0.2);
  padding-bottom: 12px;
`

export const CardTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 0;
  text-transform: uppercase;
`

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const DetailRow = styled.div`
  display: flex;  
  align-items: center;

  background: rgba(255,255,255,0.08);
  padding: 10px 14px;
  border-radius: 12px;

  backdrop-filter: blur(8px);
`

export const DetailKey = styled.p`
  font-size: 14px;
  opacity: 0.85;
  margin: 0;
  margin-right: 8px;
`

export const DetailValue = styled.p`
  font-size: 15px;
  font-weight: 600;
  margin: 0;
`