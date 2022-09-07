import PropTypes from 'prop-types';
import StyledFriendContainer from './FriendItem.styled';

const friendItemPropTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

const FriendItem = props => {
  const { isOnline, avatar, name } = props;
  return (
    <StyledFriendContainer isOnline={isOnline}>
      <span className="status"></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </StyledFriendContainer>
  );
};

FriendItem.propTypes = friendItemPropTypes;

export default FriendItem;
export { friendItemPropTypes };
