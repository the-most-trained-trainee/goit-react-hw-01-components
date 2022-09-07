import PropTypes from 'prop-types';
import FriendItem, { friendItemPropTypes } from './FriendItem';

const FriendList = props => {
  const { friends } = props;
  return (
    <ul>
      {friends.map(friend => (
        <FriendItem
          isOnline={friend.isOnline}
          name={friend.name}
          avatar={friend.avatar}
          key={friend.id}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape(friendItemPropTypes)).isRequired,
};

export default FriendList;
