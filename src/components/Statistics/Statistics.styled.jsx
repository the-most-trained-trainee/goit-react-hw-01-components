import styled from 'styled-components';

const StatisticsSection = styled.section`
  margin: 0;
  padding: 0;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #ebf0f5;

  h2 {
    font-size: 32px;
    color: grey;
    text-align: center;
    margin: 15px;
  }

  & ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    
  }
`;

const StatisticsContainer = styled.li`
  font-size: 16px;
  margin: 0;
  padding: 10px 25px;
  width: 21%;
  color: #ffffff;
  background-color: ${props => props.backgroundRandomColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & span {
      font-weight: bold;
  }
`;

export { StatisticsSection, StatisticsContainer };
