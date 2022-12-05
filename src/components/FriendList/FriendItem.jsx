import PropTypes from 'prop-types';
import StyledFriendContainer from './FriendItem.styled';

const FriendItem = ({ isOnline, avatar, name }) => {
  return (
    <StyledFriendContainer isOnline={isOnline}>
      <span className="status"></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </StyledFriendContainer>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendItem;
