import PropTypes from 'prop-types';
import StyledFriendContainer from './FriendItem.styled';


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