import PropTypes from 'prop-types';
import { Description, Stats } from './Profile.styled';

const Profile = props => {
  const {
    avatar,
    username,
    tag,
    location,
    stats: { followers, views, likes },
  } = props;

  return (
    <div className="profile">
      <Description>
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </Description>
      <Stats>
        <li>
          <span className="label">Followers</span>
          <span className="quantity"> {followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity"> {views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </Stats>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
