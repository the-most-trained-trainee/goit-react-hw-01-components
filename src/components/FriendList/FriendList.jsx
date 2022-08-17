const FriendList = props => {
  return (
    <ul className="friend-list">
      {props.friends.map(friend => (
        <li className="item" key={friend.id}>
          <span className="status">online status here</span>
          <img
            className="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
