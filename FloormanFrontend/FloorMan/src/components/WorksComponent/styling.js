import styled from "styled-components";

export const Page = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a, #111827);
  padding: 40px;
  color: white;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
`;

export const Header = styled.div`
  padding: 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 42px;
  font-weight: 900;
  margin: 0;
  background: linear-gradient(90deg, #22d3ee, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Subtitle = styled.p`
  margin-top: 8px;
  color: #94a3b8;
  letter-spacing: 2px;
  font-size: 13px;
  text-transform: uppercase;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
`;

export const ActionButton = styled.button`
  padding: 12px 18px;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #06b6d4, #8b5cf6);
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }
`;

export const TableWrapper = styled.div`
  padding: 30px;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 14px;
`;

export const TableHead = styled.th`
  text-align: left;
  color: #94a3b8;
  font-size: 13px;
  text-transform: uppercase;
  padding: 12px 16px;
`;

export const TableRow = styled.tr`
  background: rgba(255, 255, 255, 0.05);
  transition: 0.3s ease;
`;