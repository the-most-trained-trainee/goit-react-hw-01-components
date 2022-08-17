
import Profile from './Profile/Profile';
import user from 'user.json';
import data from 'data.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      Task 1
      <Profile 
      username = {user.username}
      tag = {user.tag}
      location = {user.location}
      avatar = {user.avatar}
      stats = {user.stats}/>
    </div>
  );
};