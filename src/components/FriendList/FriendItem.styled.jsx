import styled from 'styled-components';

const StyledFriendContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin: 10px;
  padding: 10px 20px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  font-size: 30px;
  font-weight: bold;

  & img {
    width: 80px;
    height: 80px;
  }

  & span {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${props => (props.isOnline ? 'green' : 'red')};
    
  }
`;

export default StyledFriendContainer;