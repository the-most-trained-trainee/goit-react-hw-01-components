import styled from 'styled-components';

const StyledTable = styled.table`
  font-size: 22px;
  text-align: center;
  border-collapse: collapse;

  & thead {
    background-color: #01bcd5;
    text-transform: uppercase;
    color: #ffffff;
    padding: 10px 20px;
    & th {
      padding: 30px 50px;
      border: 1px solid #ffffff;
    }
  }

  & tbody {
    color: #ffffff;
    background-color: #95d0d7;
  }

  & td {
    border: 1px solid #ffffff;
    padding: 5px;
  }
`;

export default StyledTable;