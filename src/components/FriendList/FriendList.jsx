import PropTypes from 'prop-types';
import styled from 'styled-components';
import FriendItem, { friendItemPropTypes } from './FriendItem';

const FriendList = props => {
  return (
    <ul>
      {props.friends.map(friend => (
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
  frends: PropTypes.arrayOf(PropTypes.shape(friendItemPropTypes)),
};

export default FriendList;