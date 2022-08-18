import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledFriendContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin: 10px;
  padding: 10px 20px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

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

const friendItemPropTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

const FriendItem = props => {
  return (
    <StyledFriendContainer isOnline={props.isOnline}>
      <span className="status"></span>
      <img className="avatar" src={props.avatar} alt="User avatar" width="48" />
      <p className="name">{props.name}</p>
    </StyledFriendContainer>
  );
};

FriendItem.protoTypes = friendItemPropTypes;

export default FriendItem;
export { friendItemPropTypes };